import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import IncomeBlock from "@/components/IncomeBlock";
import SpendingBlock from "@/components/SpendingBlock";
import incomeList from '@/data/income.json';
import spendingList from '@/data/spending.json';
import SwitchSelector from "react-native-switch-selector";
import ExpandableCalendarScreen from "../components/Calendar";
import SummaryExpense from "../components/SummaryExpense";

const Page = () => {
  const [typeOfFlow, setTypeOfFlow] = useState('e');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const mockDataExpenses = {
    totalExpenses: 1475,
  };

  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: Colors.blue,
      text: "40%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
  ];

  function onChangeDate(date: string) {
    setSelectedDate(date);
  }

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 50 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <SwitchSelector
                backgroundColor={Colors.lightGrey}
                initial={0}
                onPress={(value: string) => setTypeOfFlow(value)}
                textColor={Colors.grey}
                selectedColor={Colors.white}
                buttonColor={typeOfFlow === 'e' ? Colors.red : Colors.green}
                borderColor={Colors.lightGrey}
                hasPadding
                options={[
                  { label: "Expense", value: "e" },
                  { label: "Income", value: "i" }
                ]}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

            {/* <View style={{ paddingVertical: 20, alignItems: 'center' }}>
              { <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                      <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>47%</Text>
                    </View>
                  );
                }}
              /> }
            </View> */}
          </View>
          <ExpandableCalendarScreen onChangeDate={onChangeDate}/>
          {typeOfFlow === 'e' ? <SummaryExpense /> : <IncomeBlock incomeList={incomeList} />}
          <SpendingBlock spendingList={spendingList} selectedDate={selectedDate}/>
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
