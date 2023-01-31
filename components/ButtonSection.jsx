import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import LineDivider from "./LineDivider";

export default function ButtonSection() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}
        >
          {/* Claim */}
          <Pressable style={{ flex: 1 }} onPress={() => console.log("Claim")}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                Claim
              </Text>
            </View>
          </Pressable>

          {/* Divider */}
          <LineDivider />

          {/* Get Point */}
          <Pressable
            style={{ flex: 1 }}
            onPress={() => console.log("Get Point")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                Get Point
              </Text>
            </View>
          </Pressable>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <Pressable style={{ flex: 1 }} onPress={() => console.log("My Card")}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                My Card
              </Text>
            </View>
          </Pressable>
        </View>
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