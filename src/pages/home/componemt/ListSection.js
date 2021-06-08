import React from "react";

import { Dimensions, FlatList, View, Text, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";
const listCategory = [
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Silent Waters in the mountains in midst of Himilayas",
    title: "Product Name 1",
    total: 1000,
    people: 500,
    category: "Technology",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Red fort in India New Delhi is a magnificient masterpeiece of humans",
    title: "Product Name 2",
    total: 1000,
    people: 500,
    category: "Technology",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Red fort in India New Delhi is a magnificient masterpeiece of humans",
    title: "Product Name 8",
    total: 1000,
    people: 500,
    category: "Technology",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    title: "Product Name 3",
    total: 1000,
    people: 500,
    category: "Cars",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    title: "Product Name 4",
    total: 1000,
    people: 500,
    category: "Cars",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    title: "Product Name 5",
    total: 1000,
    people: 500,
    category: "Real Estate",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    title: "Product Name 6",
    total: 1000,
    people: 500,
    category: "Real Estate",
  },
  {
    productImages: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ],
    desc: "Sample Description below the image for representation purpose only",
    title: "Product Name 7",
    total: 1000,
    people: 500,
    category: "Real Estate",
  },
];
const ListSection = ({ nameSection }) => {
  return (
    <View style={styles.productSection}>
      <View style={styles.titleList}>
        <Text>{nameSection}</Text>
      </View>
      <FlatList
        style={styles.listCategoryStyle}
        data={listCategory}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        horizontal={true}
        renderItem={({ item }) => <ProductItem item={item} isHot={false} />}
      />
    </View>
  );
};

export default ListSection;
const windowHeight = Dimensions.get("window").width;
const styles = StyleSheet.create({
  productSection: {
    // height: "100%",
    backgroundColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  //   listCategoryStyle: {
  //     flex: 1,
  //   },
  titleList: {
    paddingBottom: 10,
    // height: "15%",
    // backgroundColor:"red",
  },
});
