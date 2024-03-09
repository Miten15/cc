import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTile2 from '../../components/Reusable/ReusableTile2'


const PackageList = ({ navigation }) => {

  const packages = [
    {
      "_id": "1",
      "state_id": "64c62bfc65af9f8c969a8d04", // Rajasthan
      "title": "Khajuraho Temples Pilgrimage",
      "imageUrl": "https://thefloatingpebbles.com/wp-content/uploads/2023/03/22-10-03-MP22-88-1024x731.jpg",
      "rating": 4.9,
      "review": "1204 Reviews",
      "location": "Khajuraho, Rajasthan",
      "price": '₹1599 per person'
    },
    {
      "_id": "2",
      "state_id": "64cf2c935d14628d0ac0a2b9", // Uttar Pradesh
      "title": "Varanasi Ganga Aarti Experience",
      "imageUrl": "https://www.raffaeleferrari.com/wp-content/uploads/2020/04/ganga-arti.jpeg",
      "rating": 4.7,
      "review": "1204 Reviews",
      "location": "Varanasi, Uttar Pradesh",
      "price": '₹1599 per person'
    },
    {
      "_id": "3",
      "state_id": "64cf2d095d14628d0ac0a2bd", // Uttarakhand
      "title": "Char Dham Yatra",
      "imageUrl": "https://static.toiimg.com/photo/98085810.cms",
      "rating": 4.6,
      "review": "12854 Reviews",
      "location": "Uttarakhand",
      "price": '₹1599 per person'
    },
    {
      "_id": "4",
      "state_id": "64cf2d4d5d14628d0ac0a2bf", // Tamil Nadu
      "title": "Meenakshi Temple Heritage Tour",
      "imageUrl": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/21/a87540ce5aa169669e49bad274149709_1000x1000.jpg",
      "rating": 4.7,
      "review": "1204 Reviews",
      "location": "Madurai, Tamil Nadu",
      "price":'₹1599 per person'
      }
  
  ];
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          title={'Top Trending Packages'}
          icon={'search1'}
          top={60}
          left={0}
          right={0}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate('PackageSearch')}
        />
      </View>

      <View style={{ paddingTop: 60 }}>
        <FlatList
          data={packages}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile2
                item={item}
                onPress={() => navigation.navigate('PackageDetails', item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default PackageList
