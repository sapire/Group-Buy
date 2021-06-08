import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ColorConfig from "../../static/ColorConfig";

const Login = (props) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);

  const onLogin = () => {
    if (email && password) {
      setLoading(true);
      setTimeout(() => {
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Home" }],
          })
        );
        setLoading(false);
      }, 1500);
    } else {
      Alert.alert("Error", "Please enter all fields", [
        {
          text: "Ok",
        },
      ]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: ColorConfig.white }}>
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: "10%",
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              style={{ fontSize: 34, color: ColorConfig.black }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={{ paddingTop: 30, width: "100%", alignItems: "center" }}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            keyboardType="email-address"
            placeholderTextColor={ColorConfig.gray}
            onChangeText={(val) => setEmail(val)}
            value={email}
          />
        </View>
        <View
          style={{ paddingVertical: 30, width: "100%", alignItems: "center" }}
        >
          <TextInput
            style={styles.textInput}
            placeholderTextColor={ColorConfig.gray}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(val) => setPassword(val)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          {loading ? (
            <ActivityIndicator size="small" color={ColorConfig.white} />
          ) : (
            <Text style={{ color: ColorConfig.white, fontSize: 16 }}>
              Login
            </Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={{ color: ColorConfig.white, fontSize: 16 }}>
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    color: ColorConfig.black,
  },
  button: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#007FFF",
    width: "80%",
    // marginVertical: 20,
  },
});
