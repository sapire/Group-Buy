import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Divider } from "react-native-elements";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import NavigationService from "../../../components/NavigationService";

const CategoryItem = ({ item, onPress = () => {}, active='' }) => {
  return (
    // <Card containerStyle={styles.card}>
    <TouchableOpacity
      style={{
        ...styles.card,
        backgroundColor: active == item.title ? "gray" : "#2089dc",
      }}
      onPress={() => onPress(item.title)}
    >
      <Text style={styles.cardTitle}>{item?.title}</Text>
    </TouchableOpacity>
    // </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  card: {
    backgroundColor: "#2089dc",
    minWidth: 100,
    minHeight: 80,
    marginHorizontal: 20,
    // padding: 30,
    // marginVertical:5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    color: "#fff",
  },
});
