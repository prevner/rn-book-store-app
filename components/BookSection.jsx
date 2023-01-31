import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";


export default function BookSection(myBook) {
    const renderItem = ({ item, index }) => {
      return (
        <Pressable
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.clock_icon}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}
            >
              {item.lastRead}
            </Text>

            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}
            >
              {item.completion}
            </Text>
          </View>
        </Pressable>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.Header}>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>

          <Pressable onPress={() => console.log("See More")}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: "flex-start",
                textDecorationLine: "underline",
              }}
            >
              see more
            </Text>
          </Pressable>
        </View>

        {/* Books */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={myBook}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    Header: {
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        justifyContent: "space-between",
      },
})