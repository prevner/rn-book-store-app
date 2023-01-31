import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    Image,
    ScrollView,
    StyleSheet,
    FlatList
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { profile,categories,myBooks,books } from "../data";

console.log(categories)

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const ScreenHome = () => {


      const [profiles, setProfile] = React.useState(profile);   
    const [myBook, setMyBooks] = React.useState(myBooks);
    const [categorie, setCategories] = React.useState(categories);
    {/* console.log(categorie) */}
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function HeaderSection(profile) {
        
        return (
            <View style={styles.profile}>
                {/* Greetings */}

                
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good Morning</Text>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}</Text>
                    </View>
                </View>

                {/* Points */}
                <Pressable
                    style={styles.marksDisplay}
                    onPress={() => { console.log("Point") }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>

                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.point} point</Text>
                    </View>
                </Pressable>
            </View>
        )
    }

    function ButtonSection() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
                <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                    {/* Claim */}
                    <Pressable
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Claim</Text>
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
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.point_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Get Point</Text>
                        </View>
                    </Pressable>

                    {/* Divider */}
                    <LineDivider />

                    {/* My Card */}
                    <Pressable
                        style={{ flex: 1 }}
                        onPress={() => console.log("My Card")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.card_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>My Card</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        )
    }

    function BookSection(myBook) {

        const renderItem = ({ item, index }) => {
            return (
                <Pressable
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    {/* Book Info */}
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.clock_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                    </View>
                </Pressable>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={styles.Header}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>

                    <Pressable
                        onPress={() => console.log("See More")}
                    >
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
                    </Pressable>
                </View>

                {/* Books */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBook}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }

    function CategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <Pressable
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                    }
                </Pressable>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categorie}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function CategoryData() {
        var books = []
        
        let selectedCategoryBooks = categorie.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base }}>
                    <Pressable
                        style={{ flex: 1, flexDirection: 'row' }}                       
                    >
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
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={styles.readIcon}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
                            </View>

                            {/* Genre */}
                            <View style={styles.genreContainer}>
                                {
                                    item.genre.includes("Adventure") &&
                                    <View style={styles.AdventureContainer}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Romance") &&
                                    <View style={styles.RomanceContainer}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Drama") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </Pressable>

                    {/* Bookmark Button */}
                    <Pressable
                        style={{ position: 'absolute', top: 5, right: 15 }}
                        onPress={() => console.log("Bookmark")}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </Pressable>
                </View>
            )
        }

        return (
            <View style={styles.ListContainer}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {/* HeaderSection */}
            <View style={styles.HeaderSection}>
                {HeaderSection(profile)}
            </View>

            {/* BodySection */}
            <ScrollView style={styles.BodySection}>
                {/* BooksSection */}
                <View>
                    {BookSection(myBook)}
                </View>

                {/* CategoriesSection */}
                <View style={styles.CategorySection}>
                    <View>
                        {CategoryHeader()}
                    </View>
                    <View>
                        {CategoryData()}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ScreenHome;

const styles = StyleSheet.create({
    mainContainer :{ 
        flex: 1, 
        backgroundColor: COLORS.black,
        padding:10, 
    },
    HeaderSection:{ 
        height: 200, 
    },
    Header:{ 
        paddingHorizontal: SIZES.padding, 
        flexDirection: 'row', 
        justifyContent: 'space-between' ,
    },
    BookInfoContainer:{ 
        flexDirection: 'row', 
        marginTop: SIZES.radius,
     },
    BookName:{ 
        paddingRight: SIZES.padding,
         ...FONTS.h2, 
         color: COLORS.white 
        },
        
    AuthorBook:{ 
        ...FONTS.h3, 
        color: 
        COLORS.lightGray,
        },
    BookImage :{
        width: 20,
        height: 20,
        tintColor: COLORS.lightGray
    },
    readIcon:{
        width: 20,
        height: 20,
        tintColor: COLORS.lightGray
    },
    genreContainer:{ 
        flexDirection: 'row', 
        marginTop: SIZES.base, 
    },
    AdventureContainer:{
         justifyContent: 'center', 
         alignItems: 'center', 
         padding: SIZES.base, 
         marginRight: SIZES.base, 
         backgroundColor: COLORS.darkGreen, 
         height: 40, 
         borderRadius: SIZES.radius, 
        },
    RomanceContainer:{ 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: SIZES.base, 
            marginRight: SIZES.base, 
            backgroundColor: COLORS.darkRed, 
            height: 40,
            borderRadius: SIZES.radius,
         } ,
    BodySection:{ 
        marginTop: SIZES.radius 
      },
    profile: { 
        flex: 1, 
        flexDirection: 'row', 
        paddingHorizontal: SIZES.padding, 
        alignItems: 'center' },
    marksDisplay: {
        backgroundColor: COLORS.primary,
        height: 40,
        paddingLeft: 3,
        paddingRight: SIZES.radius,
        borderRadius: 20
    },
    ListContainer: { 
        flex: 1, 
        marginTop: SIZES.radius,
         paddingLeft: SIZES.padding 
        },
    CategorySection:{ 
        marginTop: SIZES.padding,
    },
})