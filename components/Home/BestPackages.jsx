import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusbale.style'
import ReusableText from '../Reusable/ReusableText'
import { Feather } from "@expo/vector-icons";
import { TEXT, COLORS, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'


const BestPackages = () => {
    const navigation = useNavigation()

    const packages = [
      {
        "_id": "64c674d23cfa5e847bcd5430",
        "state_id": "64c62bfc65af9f8c969a8d04", // Rajasthan
        "title": "Khajuraho Temples Pilgrimage",
        "imageUrl": "https://thefloatingpebbles.com/wp-content/uploads/2023/03/22-10-03-MP22-88-1024x731.jpg",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Khajuraho, Rajasthan",
        "price": 15999
      },
      {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "state_id": "64cf2c935d14628d0ac0a2b9", // Uttar Pradesh
        "title": "Varanasi Ganga Aarti Experience",
        "imageUrl": "https://www.raffaeleferrari.com/wp-content/uploads/2020/04/ganga-arti.jpeg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "Varanasi, Uttar Pradesh",
        "price": 11999
      },
      {
        "_id": "64c675be3cfa5e847bcd5439",
        "state_id": "64cf2d095d14628d0ac0a2bd", // Uttarakhand
        "title": "Char Dham Yatra",
        "imageUrl": "https://static.toiimg.com/photo/98085810.cms",
        "rating": 4.6,
        "review": "12854 Reviews",
        "location": "Uttarakhand",
        "price": 39999
      },
      {
        "_id": "64c67442776ed29f19727fd7",
        "state_id": "64cf2d4d5d14628d0ac0a2bf", // Tamil Nadu
        "title": "Meenakshi Temple Heritage Tour",
        "imageUrl": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/21/a87540ce5aa169669e49bad274149709_1000x1000.jpg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "Madurai, Tamil Nadu",
        "price": 18499
      }
    ];

  return (
    <View style={styles.container}>
     
          <View
            style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
          >
            <ReusableText
              text={"Top Trending Packages"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />
    
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <FlatList 
          data={packages}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle= {{ columnGap: SIZES.medium}}
          keyExtractor={(item) => item.id}
          />
    
    </View>
  )
}

export default BestPackages

const styles = StyleSheet.create({})