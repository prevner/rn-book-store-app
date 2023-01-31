import React from "react";
import { FlatList,  Pressable, Text, View } from "react-native";
import { COLORS, FONTS, SIZES} from "../constants";
import { categories } from "../data";

export default function CategoryHeader() {

    
const [categorie, setCategories] = React.useState(categories);
const [selectedCategory, setSelectedCategory] = React.useState(1);

    const renderItem = ({ item }) => {
      return (
        <Pressable
          style={{ flex: 1, marginRight: SIZES.padding }}
          onPress={() => setSelectedCategory(item.id)}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: `${
                selectedCategory == item.id ? COLORS.white : COLORS.gray
              }`,
            }}
          >
            {item.categoryName}
          </Text>
        </Pressable>
      );
    };

    return (
      <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <FlatList
          data={categorie}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  }