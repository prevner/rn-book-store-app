import React from "react";
import { categories } from "../data";
import { FlatList, Image, StyleSheet, Pressable, Text, View } from "react-native";
import { COLORS, FONTS, SIZES, icons} from "../constants";

export default function CategoryData() {
    const [categorie, setCategories] = React.useState(categories);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    var books = [];

    let selectedCategoryBooks = categorie.filter(
      (a) => a.id == selectedCategory
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const bookItem = ({ item }) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <Pressable style={{ flex: 1, flexDirection: "row" }}>
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              {/* Book name and author */}
              <View>
                <Text style={styles.BookName}>{item.bookName}</Text>
                <Text style={styles.AuthorBook}>{item.author}</Text>
              </View>

              {/* Book Info */}
              <View style={styles.BookInfoContainer}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={styles.BookImage}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.pageNo}
                </Text>

                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={styles.readIcon}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.readed}
                </Text>
              </View>

              {/* Genre */}
              <View style={styles.genreContainer}>
                {item.genre.includes("Adventure") && (
                  <View style={styles.AdventureContainer}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes("Romance") && (
                  <View style={styles.RomanceContainer}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes("Drama") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>
                      Drama
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </Pressable>

          {/* Bookmark Button */}
          <Pressable
            style={{ position: "absolute", top: 5, right: 15 }}
            onPress={() => console.log("Bookmark")}
          >
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightGray,
              }}
            />
          </Pressable>
        </View>
      );
    };

    return (
      <View style={styles.ListContainer}>
        <FlatList
          data={books}
          renderItem={bookItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={true}
        />
      </View>
    );
  }

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
  