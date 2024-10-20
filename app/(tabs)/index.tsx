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
import ExpandableCalendarScreen from "../components/commons/calendar/Calendar";
import SummaryExpense from "../components/Expense/SummaryExpense";
import AddExpenseButton from "../components/Expense/ButtonAddExpense";
import ModalForm from "../components/commons/Modal";

const Page = () => {
  const [flowType, setFlowType] = useState<string>('expense');
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const expensesData = {
    total: 1475,
  };

  const chartData = [
    { value: 47, color: Colors.tintColor, focused: true, label: "47%" },
    { value: 40, color: Colors.blue, label: "40%" },
    { value: 16, color: Colors.white, label: "16%" },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", label: "3%" },
  ];

  const handleDateChange = (date: string) => {
    setCurrentDate(date);
  };

  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <View style={[styles.container, { paddingTop: 50 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.switchSelectorWrapper}>
            <SwitchSelector
              backgroundColor={Colors.lightGrey}
              initial={0}
              onPress={(value: string) => setFlowType(value)}
              textColor={Colors.grey}
              selectedColor={Colors.white}
              buttonColor={flowType === 'expense' ? Colors.red : Colors.green}
              borderColor={Colors.lightGrey}
              hasPadding
              options={[
                { label: "Expense", value: "expense" },
                { label: "Income", value: "income" }
              ]}
            />
          </View>
          <ExpandableCalendarScreen onChangeDate={handleDateChange} />
          {flowType === 'expense' ? <SummaryExpense /> : <IncomeBlock incomeList={incomeList} />}
          <SpendingBlock spendingList={spendingList} selectedDate={currentDate} />
        </ScrollView>
        <AddExpenseButton onPress={() => setIsModalVisible(true)} />
        <ModalForm title={flowType} isVisible={isModalVisible} onClose={() => setIsModalVisible(!isModalVisible)} >
         <></>
          </ModalForm>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  switchSelectorWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});

export default Page;