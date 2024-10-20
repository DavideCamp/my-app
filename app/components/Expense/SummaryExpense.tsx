import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const SummaryExpense = () => {
  const summary = [{
    name: 'Day',
    amount: 13,
  },
  {
    name: 'Week',
    amount: 123,
  },
  {
    name: 'Month',
    amount: 1230,
  },]


  return (
    <View  style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
    }}>
    {summary.map((item, index) => <>
          <View
              key={index}
              style={{
                backgroundColor: Colors.lightGrey,
                padding: 20,
                borderRadius: 30,
                width: '32%',
                gap: 10,
                justifyContent: "space-between",
                alignItems: "center",
              }}
          >
            <Text
              style={[
                styles.expenseBlockTxt1,
                {
                  color: Colors.black,
                },
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.expenseBlockTxt2,
                {
                  color: Colors.black,
                  fontSize: 20,

                },
              ]}
            >
              {item.amount}$
            </Text>
            {/* <View style={styles.expenseBlock3View}>
              <Text
                style={[
                  styles.expenseBlockTxt1,
                  {
                    color:
                      Colors.white,
                  },
                ]}
              >
                '60%'
              </Text>
            </View> */}
          </View>
    </>)}
    </View>
  );
};


export default SummaryExpense;

const styles = StyleSheet.create({
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  expenseBlockTxt1: {
    color: Colors.white,
    fontSize: 14,
  },
  expenseBlockTxt2: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  expenseBlockTxt2Span: {
    fontSize: 12,
    fontWeight: "400",
  },
  expenseBlock3View: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
});
