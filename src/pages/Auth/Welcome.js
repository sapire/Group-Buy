import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import Header from "../../components/Header";
import ColorConfig from "../../static/ColorConfig";
const windowHeight = Dimensions.get("window").height;

const Welcome = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: ColorConfig.white }}>
      <View style={styles.headerSection}>
        <Header />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingVertical: 20,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "60%",
            width: "70%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Already Have an account ?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={{ color: ColorConfig.white, fontSize: 18 }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={styles.text}>New here ?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("Signup")}
          >
            <Text style={{ color: ColorConfig.white, fontSize: 18 }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  headerSection: {
    height: windowHeight * 0.08,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#007FFF",
    width: "100%",
    marginVertical: 20,
  },
});
