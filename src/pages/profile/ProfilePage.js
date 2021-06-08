import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ColorConfig from "../../static/ColorConfig";

const ProfilePage = (props) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);

  const onSignout = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      })
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: ColorConfig.white }}>
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
          //   alignItems: "center",
          paddingHorizontal: "10%",
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
            {/* <Ionicons
              name="chevron-back"
              style={{ fontSize: 34, color: ColorConfig.black }}
            /> */}
          </TouchableOpacity>
          <Text style={styles.text}>Your Profile</Text>
        </View>
        <View style={{ paddingTop: 30, width: "100%" }}>
          <Text style={styles.heading}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Name"
            placeholderTextColor={ColorConfig.gray}
            onChangeText={(val) => setName(val)}
            value={name}
          />
        </View>
        <View style={{ paddingTop: 30, width: "100%" }}>
          <Text style={styles.heading}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            keyboardType="email-address"
            placeholderTextColor={ColorConfig.gray}
            onChangeText={(val) => setEmail(val)}
            value={email}
          />
        </View>
        <View style={{ paddingVertical: 30, width: "100%" }}>
          <Text style={styles.heading}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={ColorConfig.gray}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(val) => setPassword(val)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          {loading ? (
            <ActivityIndicator size="small" color={ColorConfig.white} />
          ) : (
            <Text style={{ color: ColorConfig.white, fontSize: 16 }}>
              Update
            </Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity style={styles.button} onPress={onSignout}>
            <Text style={{ color: ColorConfig.white, fontSize: 16 }}>
              Signout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },
  textInput: {
    width: "100%",
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
    width: "100%",
    // marginVertical: 20,
  },
  heading: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: "bold",
  },
});
