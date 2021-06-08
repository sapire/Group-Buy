import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Share,
} from "react-native";
import Header from "../../components/Header";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { SliderBox } from "../../components/SliderBox";
import { Linking } from "react-native";

const windowHeight = Dimensions.get("window").height;

const openMap = () => {
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `40.7128,74.0060`;
  const label = "New york city";
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        "Group buy Message",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const ProductDetail = (props) => {
  let item = props.route.params.item;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.headerSection}>
            <Header />
          </View>
          <View style={{ flex: 1, paddingVertical: 10 }}>
            <SliderBox
              images={item.productImages}
              sliderBoxHeight={200}
              ImageComponentStyle={{
                width: "98%",
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            />
            <TouchableOpacity
              onPress={onShare}
              style={{ position: "absolute", top: 20, left: 5 }}
            >
              <Ionicons
                name="share-social"
                size={42}
                style={{ paddingHorizontal: 5 }}
              />
            </TouchableOpacity>
            <View style={{ paddingHorizontal: "5%", paddingVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingTop: 20,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome5
                    name="user-alt"
                    size={18}
                    style={{ paddingHorizontal: 10 }}
                  />
                  <Text style={{ fontSize: 18 }}>{item.people}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Feather
                    name="target"
                    size={20}
                    style={{ paddingHorizontal: 10 }}
                  />
                  <Text style={{ fontSize: 18 }}>{item.total}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                marginTop: 20,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text>{item.desc}</Text>
              </View>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:0542222234`)}
              >
                <Ionicons
                  name="call"
                  size={30}
                  style={{ paddingHorizontal: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={openMap}>
                <Ionicons
                  name="location-sharp"
                  size={30}
                  style={{ paddingHorizontal: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "#F5FCFF",
  },
  headerSection: {
    height: windowHeight * 0.08,
  },
});
