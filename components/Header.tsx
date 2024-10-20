import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { useAuth } from "@/app/context/auth-supabase";
import { getUser } from "@/app/service/user";

const Header = () => {
  const { user, signOut } = useAuth();
  getUser();

  function handleLogout() {
     signOut(
    ).then(() => {
     
    }).catch((error) => {
      console.error(error);
    } );
    
  }


  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.wrapper}
      >
        <View style={styles.userInfoWrapper}>
          <View style={styles.userTxtWrapper}>
            <Text style={[styles.userText, { fontSize: 12 }]}>{user?.user_metadata['name']}</Text>
            <Text style={[styles.userText, { fontSize: 16 }]}>
              Total Balance <Text style={styles.boldText}>12345.00$</Text> 
            </Text>
          </View>
        </View>
        <TouchableOpacity
            onPress={handleLogout}
            style={styles.btnWrapper}
          >
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userInfoWrapper: { 
    flexDirection: "row", 
    alignItems: "center", 
  },
  userImg: { 
    height: 50, 
    width: 50, 
    borderRadius: 30, 
  },
  userTxtWrapper: {
    
  },
  userText: {
    color: Colors.black,
  },
  boldText: {
    fontWeight:'700',
  },
  btnWrapper: {
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  btnText: { 
    color: Colors.black, 
    fontSize: 12,
  },
});
