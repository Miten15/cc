import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTile2 from '../../components/Reusable/ReusableTile2'

const Recommended = ({ navigation }) => {
  const topTrending = [
    {
      "_id": "64c631650298a05640539adc",
      "state_id": "64c62bfc65af9f8c969a8d04", // Rajasthan
      "title": "Khajuraho Temples",
      "imageUrl": "https://static.toiimg.com/thumb/70192987/khajuraho.jpg?width=1200&height=900",
      "rating": 4.7,
      "review": "1204 Reviews",
      "location": "Khajuraho, Rajasthan"
    },
    {
      "_id": "64d062a3de20d7c932f1f70a",
      "state_id": "64cf2c565d14628d0ac0a2b7", // Kerala
      "title": "Sri Padmanabhaswamy Temple",
      "imageUrl": "https://i.pinimg.com/736x/c6/e3/3e/c6e33e73a41c294022a85f7f099ff7d7.jpg",
      "rating": 4.8,
      "review": "1452 Reviews",
      "location": "Thiruvananthapuram, Kerala"
    },
    {
      "_id": "64d09e3f364e1c37c8b4b13c",
      "state_id": "64cf2c935d14628d0ac0a2b9", // Uttar Pradesh
      "title": "Varanasi Ghats",
      "imageUrl": "https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg",
      "rating": 4.6,
      "review": "2145 Reviews",
      "location": "Varanasi, Uttar Pradesh"
    },
    {
      "_id": "64d09f90364e1c37c8b4b140",
      "state_id": "64cf2d095d14628d0ac0a2bd", // Uttarakhand
      "title": "Kedarnath Temple",
      "imageUrl": "https://pbs.twimg.com/media/E5Bx7LDVkB0u1Vk.jpg:large",
      "rating": 4.8,
      "review": "24455 Reviews",
      "location": "Kedarnath, Uttarakhand"
    },
    {
      "_id": "64d30f789d008909fa8b7ce5",
      "state_id": "64cf2d4d5d14628d0ac0a2bf", // Tamil Nadu
      "title": "Meenakshi Amman Temple",
      "imageUrl": "https://media.istockphoto.com/id/494308337/photo/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india.jpg?s=612x612&w=0&k=20&c=xxS6Z6Jh2gTdThofH1HZaO6ey44w1FrJ1PjJfJsy_pI=",
      "rating": 4.8,
      "review": "12345 Reviews",
      "location": "Madurai, Tamil Nadu"
    }
  
  ];
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          title={'Top Trending'}
          icon={'search1'}
          top={60}
          left={0}
          right={0}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate('Search')}
        />
      </View>

      <View style={{ paddingTop: 60 }}>
        <FlatList
          data={topTrending}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile2
                item={item}
                onPress={() => navigation.navigate("PDetails", item._id)} // Pass item details as parameters
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Recommended
