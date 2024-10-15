import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface Props {
  onPress: () => void;
}

const AddExpenseButton = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 65,
    right: 20,
  },
  button: {
    backgroundColor: Colors.green,
    borderRadius: 50,
    padding: 15,
  },
});

export default AddExpenseButton;
