import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import styles from './packageDetails.style'
import { NetworkImage } from '../../components'

const PackageDetails = ({navigation}) => {
  const hotel = {
    "availability": {
        "start": "2023-08-20T00:00:00.000Z",
        "end": "2023-08-25T00:00:00.000Z"
    },
    "_id": "64c675793cfa5e847bcd5436",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Urban Chic Boutique Hotel",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    "rating": 4.8,
    "review": "2312 Reviews",
    "location": "San Francisco, CA",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "price": 400,
    "facilities": [
        {
            "wifi": true,
            "_id": "64c675793cfa5e847bcd5437"
        }
    ],
    "__v": 0
}
  return (
    <ScrollView >
      <View style={{height: 80}}>
      <AppBar
          top={40}
          left={20}
          right={20}
          title={"hm"}
          icon={"search1"}
          
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>
      <View style={styles.container}>
        <NetworkImage 
        source={hotel}
        width={"100%"}
        height={220}
        radius={25}
        />
        <View style={styles.titleContainer}>
        <View style={styles.titleColumn}>

      </View>
        </View>

      </View >
    </ScrollView>
  )
}

export default PackageDetails