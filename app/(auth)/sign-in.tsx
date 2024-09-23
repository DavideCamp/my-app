import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import { useAuth } from "../context/auth-supabase";
  import { Stack, useRouter } from "expo-router";
  import { useRef, useState } from "react";
  import Colors from "@/constants/Colors";

  
  export default function SignIn() {
    const { signIn } = useAuth();
    const router = useRouter();
    const [error, setError] = useState("");
  
    const emailRef = useRef("");
    const passwordRef = useRef("");
    return (
      <>
        <Stack.Screen options={{ title: "sign up", headerShown: false }} />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="email"
              autoCapitalize="none"
              nativeID="email"
              onChangeText={(text) => {
                emailRef.current = text;
                setError("");
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
                setError("");
              }}
              style={styles.textInput}
            />
          </View>
          <View>
            <Text style={{ color: "red" }}>{error}</Text>
          </View>
  
          <TouchableOpacity
            onPress={async () => {
              await signIn(
                emailRef.current,
                passwordRef.current
              ).then((data) => {
                console.log(data);
                router.replace("/");
              }).catch((error) => {
                setError(error.message);
              } );
              
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 32 }}>
            <Text
              style={{ fontWeight: "500" }}
              onPress={() => router.push("/sign-up")}
            >
              Click Here To Create A New Account
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
      borderRadius: 10,
      borderColor: Colors.grey,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginBottom: 16,
    },
    button: {
      backgroundColor: Colors.grey,
      padding: 15,
      width: 250,
      borderRadius: 10,
      marginTop: 16,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontSize: 16,
    },
  });