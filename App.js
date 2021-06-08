import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomePage from "./src/pages/home/HomePage";
import { ProductPage } from "./src/pages/product/ProductPage";
import ProfilePage from "./src/pages/profile/ProfilePage";
import { SearchPage } from "./src/pages/search/SearchPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavigationService from "./src/components/NavigationService";
import ProductDetail from "./src/pages/product/ProductDetail";
import { Login, Signup, Welcome } from "./src/pages/Auth";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductPage}
        options={{
          tabBarLabel: "cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="card-search"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer
        ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <Stack.Navigator initialRouteName="Welcome" headerMode="none">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home">
              {(props) => <MyTabs {...props} />}
            </Stack.Screen>
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ff7700",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: { marginTop: 30, fontSize: 20, fontWeight: "bold" },
  container: {
    flex: 1,
  },
});
