import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Divider } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

import {
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import NavigationService from "../../../components/NavigationService";

const windowHeight = Dimensions.get("window").width;
const heightImage = 0.4 * windowHeight * (3 / 4);
const ProductItem = ({ item, isHot }) => {
  return (
    // <Card
    //   containerStyle={{
    //     backgroundColor: "#2089dc",
    //     width: isHot ? "100%" : windowHeight * 0.4,
    //     margin: 0,
    //     // height: "100%",
    //     padding: 0,
    //     marginLeft: isHot ? 0 : 10,
    //   }}
    // >
    //   <View
    //     style={{ height: heightImage, width: "100%", backgroundColor: "white" }}
    //   >
    //     <Card.Image
    //       style={{ resizeMode: "contain", height: "100%", width: "100%" }}
    //       source={{
    //         uri: "https://firebasestorage.googleapis.com/v0/b/finalpro-c979d.appspot.com/o/dyson.png?alt=media&token=2ff78fe4-4e4a-4dcf-ae3c-e5633e006a3c",
    //       }}
    //     ></Card.Image>
    //   </View>
    //   <Text>DFD</Text>
    // </Card>
    <TouchableOpacity
      style={{
        height: 160,
        width: 130,
        backgroundColor: "#fff",
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
      }}
      onPress={() => NavigationService.navigate("ProductDetail", { item })}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: item?.productImages[0] }}
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      </View>
      <View style={{ flex: 1, paddingTop: 5, paddingHorizontal: 5 }}>
        <Text>{item.title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="user-alt" size={12} />
            <Text style={{ fontSize: 16 }}>{item.people}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="target" size={12} style={{}} />
            <Text style={{ fontSize: 14 }}>{item.total}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#2089dc",
    width: windowHeight * 0.4,

    height: "100%",
    padding: 0,
    marginLeft: 10,
  },
  img: {
    height: "90%",
  },
});
