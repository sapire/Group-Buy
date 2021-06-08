import * as React from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../../components/Header";
import CategoryItem from "../home/componemt/CategoryItem";
import ProductItem from "../home/componemt/ProductItem";
const windowHeight = Dimensions.get("window").height;

export const ProductPage = () => {
  const listCategory = [
    {
      id: 1,
      title: "Technology",
    },
    {
      id: 2,
      title: "Cars",
    },
    {
      id: 3,
      title: "Real Estate",
    },
    {
      id: 4,
      title: " Estate",
    },
    {
      id: 5,
      title: " something",
    },
  ];

  const listProducts = [
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

  const [category, setCategory] = React.useState("Technology");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerSection}>
        <Header />
      </View>
      <View style={styles.categorySection}>
        <FlatList
          data={listCategory}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryItem
              item={item}
              onPress={(val) => setCategory(val)}
              active={category}
            />
          )}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={listProducts.filter((item) => item.category == category)}
          keyExtractor={(item, index) => index.toString()}
          //   horizontal={true}
          style={{}}
          numColumns={2}
          contentContainerStyle={{ width: "100%" }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <ProductItem item={item} />
            </View>
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ fontSize: 22 }}>No Product</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "#F5FCFF",
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
