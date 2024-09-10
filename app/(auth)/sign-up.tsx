import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { useAuth } from "../context/auth-supabase";
  import { Stack, useRouter } from "expo-router";
  import { useRef } from "react";
  import Colors from "@/constants/Colors";

  
  export default function SignUp() {
    const { signUp } = useAuth();
    const router = useRouter();
  
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const userNameRef = useRef("");
  
    return (
      <>
        <Stack.Screen options={{ title: "sign up", headerShown: false }} />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View>
            <Text style={styles.label}>UserName</Text>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              nativeID="userName"
              onChangeText={(text) => {
                userNameRef.current = text;
              }}
              style={styles.textInput}
            />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="email"
              autoCapitalize="none"
              nativeID="email"
              onChangeText={(text) => {
                emailRef.current = text;
              }}
              style={styles.textInput}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="password"
              secureTextEntry={true}
              nativeID="password"
              onChangeText={(text) => {
                passwordRef.current = text;
              }}
              style={styles.textInput}
            />
          </View>
  
          <TouchableOpacity
            onPress={async () => {
              await signUp(
                emailRef.current,
                passwordRef.current,
                userNameRef.current
              ).then(() => {
                  router.replace("/home")
              }).finally(() => {
                console.log("done");
              })
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
  
          <View style={{ marginTop: 32 }}>
            <Text
              style={{ fontWeight: "500" }}
              onPress={() => router.replace("/sign-in")}
            >
              Click Here To Return To Sign In Page
            </Text>
          </View>
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    label: {
      marginBottom: 4,
      color: Colors.black,
    },
    textInput: {
      width: 250,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: Colors.grey,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginBottom: 16,
    },
    button: {
      backgroundColor: Colors.grey,
      padding: 15,
      width: 250,
      borderRadius: 5,
      marginTop: 16,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontSize: 16,
    },
  });