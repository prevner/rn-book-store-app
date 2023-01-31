import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import { profile, categories, myBooks, books } from "../data";

import { BookSection, ButtonSection, CategoryData, CategoryHeader, HeaderSection } from "../components";

const ScreenHome = () => {
  const [profiles, setProfile] = React.useState(profile);
  const [myBook, setMyBooks] = React.useState(myBooks);
  {
    /* console.log(categorie) */
  }


  return (
    <View style={styles.mainContainer}>
      {/* HeaderSection & ButtonSection */}
      <View style={styles.HeaderSection}>
        {HeaderSection(profile)}
        {ButtonSection()}
      </View>
      {/* BodySection */}
      <ScrollView style={styles.BodySection}>
        {/* BooksSection */}
        <View>{BookSection(myBook)}</View>
        {/* CategoriesSection */}
        <View style={styles.CategorySection}>
          <View>{CategoryHeader()}</View>
          <View>{CategoryData()}</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScreenHome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 10,
  },
  HeaderSection: {
    height: 200,
  },
  Header: {
    paddingHorizontal: SIZES.padding,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  BookInfoContainer: {
    flexDirection: "row",
    marginTop: SIZES.radius,
  },
  BookName: {
    paddingRight: SIZES.padding,
    ...FONTS.h2,
    color: COLORS.white,
  },

  AuthorBook: {
    ...FONTS.h3,
    color: COLORS.lightGray,
  },
  BookImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  readIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  genreContainer: {
    flexDirection: "row",
    marginTop: SIZES.base,
  },
  AdventureContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.base,
    marginRight: SIZES.base,
    backgroundColor: COLORS.darkGreen,
    height: 40,
    borderRadius: SIZES.radius,
  },
  RomanceContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.base,
    marginRight: SIZES.base,
    backgroundColor: COLORS.darkRed,
    height: 40,
    borderRadius: SIZES.radius,
  },
  BodySection: {
    marginTop: SIZES.radius,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
    alignItems: "center",
  },
  marksDisplay: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingLeft: 3,
    paddingRight: SIZES.radius,
    borderRadius: 20,
  },
  ListContainer: {
    flex: 1,
    marginTop: SIZES.radius,
    paddingLeft: SIZES.padding,
  },
  CategorySection: {
    marginTop: SIZES.padding,
  },
});
