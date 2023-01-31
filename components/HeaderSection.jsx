import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

export default function HeaderSection(profile) {
    return (
      <View style={styles.profile}>
        {/* Greetings */}

        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              Good Morning
            </Text>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {profile.name}
            </Text>
          </View>
        </View>

        {/* Points */}
        <Pressable
          style={styles.marksDisplay}
          onPress={() => {
            console.log("Point");
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {profile.point} point
            </Text>
          </View>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
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
})