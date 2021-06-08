import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { watchPersonData } from "../../redux/product/productActions";
import { initdata } from "../../redux/product/productActions";
import { createPortal } from "react-dom";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import Header from "../../components/Header";
import CategoryItem from "./componemt/CategoryItem";
import ProductItem from "./componemt/ProductItem";
import { listItemSection } from "./static/ListSectionItem";
import ListSection from "./componemt/ListSection";
import { SliderBox } from "../../components/SliderBox";
import ColorConfig from "../../static/ColorConfig";
// import { SliderBox } from "react-native-image-slider-box";

let listProducts = [
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Silent Waters in the mountains in midst of Himilayas dsf dsfdfdf lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    id: 1,
    title: "Product Name 0",
    total: 1000,
    people: 500,
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Red fort in India New Delhi is a magnificient masterpeiece of humans",
    id: 2,
    title: "Product Name 1",
    total: 1000,
    people: 500,
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    id: 3,
    title: "Product Name 2",
    total: 1000,
    people: 500,
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    id: 4,
    title: "Product Name 3",
    total: 1000,
    people: 500,
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    id: 5,
    title: "Product Name 4",
    total: 1000,
    people: 500,
  },
];

const listCategory = [
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Silent Waters in the mountains in midst of Himilayas",
    id: 1,
    title: "Technology",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Red fort in India New Delhi is a magnificient masterpeiece of humans",
    id: 2,
    title: "Cars",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    id: 3,
    title: "Real Estate",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    id: 4,
    title: " Estate",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    id: 5,
    title: " Estate",
  },
];
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 5,
    backgroundColor: ColorConfig.white,
  },
  headerSection: {
    height: windowHeight * 0.08,
  },
  categorySection: {
    paddingVertical: 15,
  },
  hotSection: {
    // height: windowHeight * 0.4,

    justifyContent: "center",
    // alignItems:'center'
    // marginHorizontal: 10,
  },
  titleList: {
    height: "15%",
  },
  productSection: {
    // height: windowHeight * 0.25,
    backgroundColor: "gray",
    margin: 10,
  },
  listCategoryStyle: {
    flex: 1,
  },
});
const mapStateToProps = (state) => {
  return {
    personData: state.listPro.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    watchPersonData: () => dispatch(watchPersonData()),
    initdata: () => dispatch(initdata()),
  };
};

const HomePage = ({ watchPersonData, personData, initdata }) => {
  useEffect(() => {
    console.log("hey");
    console.log(watchPersonData());
  }, []);

  return (
    <ScrollView style={styles.MainContainer}>
      {/* <SafeAreaView style={styles.MainContainer}> */}
      <View style={styles.headerSection}>
        <Header />
      </View>
      <View style={styles.categorySection}>
        <FlatList
          data={listCategory}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CategoryItem item={item} />}
        />
      </View>
      <View style={styles.hotSection}>
        {/* <ProductItem item={productImages} isHot={true} /> */}
        <SliderBox
          images={listProducts[0].productImages}
          sliderBoxHeight={200}
          ImageComponentStyle={{ width: "90%", paddingHorizontal: 20 }}
        />
        <View style={{ paddingHorizontal: "5%", paddingVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {listProducts[0].title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5
                name="user-alt"
                size={18}
                style={{ paddingHorizontal: 10 }}
              />
              <Text style={{ fontSize: 18 }}>{listProducts[0].people}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="target"
                size={20}
                style={{ paddingHorizontal: 10 }}
              />
              <Text style={{ fontSize: 18 }}>{listProducts[0].total}</Text>
            </View>
          </View>
        </View>
      </View>
      {listItemSection.map((sec) => (
        <View style={styles.productSection}>
          <ListSection nameSection={sec.sectionName} />
        </View>
      ))}

      {/* <Text>{JSON.stringify(personData)}</Text> */}
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

HomePage.propTypes = {
  personData: PropTypes.array,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
