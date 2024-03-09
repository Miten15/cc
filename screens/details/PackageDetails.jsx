import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import {
  AppBar,
  DescriptionText,
  HeightSpacer,
  HotelMap,
  NetworkImage,
  ReusableText,
  ReviewsList,
} from "../../components";
import styles from './packageDetails.style'

import { TEXT, COLORS, SIZES} from '../../constants/theme'
import reusable from '../../components/Reusable/reusbale.style'
import {Rating} from 'react-native-stock-star-rating'
import {Feather} from '@expo/vector-icons'
const PackageDetails = ({navigation}) => {
  
    const hotel = {
      "availability": {
          "start": "2023-08-10T00:00:00.000Z",
          "end": "2023-08-17T00:00:00.000Z"
      },
      "coordinates": {
          "latitude": 37.7749,
          "longitude": -122.4194
      },
      "_id": "64d34be53295a816648298d0",
      "country_id": "64d2fd32618522e2fb342eec",
      "title": "Hotel Alpha",
      "description": "Hotel Alpha is a luxurious hotel located in the heart of a bustling city. Experience the best of hospitality with our impeccable service and top-notch facilities. The elegantly designed rooms offer a comfortable stay, and the hotel's strategic location provides easy access to popular attractions and landmarks. Enjoy a variety of amenities, including free Wi-Fi, parking, air conditioning, room service, flat-screen TV, and private bathrooms. Whether you're here for business or leisure, Hotel Alpha promises a memorable and enjoyable stay.",
      "contact": "64c5d95adc7efae2a45ec376",
      "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
      "rating": 4.7,
      "review": "253425 Reviews",
      "location": "City Center, USA",
      "price": 200,
      "__v": 1,
      "reviews": [
          {
              "_id": "64d38ff59af9119acfab0ece",
              "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
              "rating": 4.6,
              "user": {
                  "_id": "64c5d95adc7efae2a45ec376",
                  "username": "John Doe",
                  "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg"
              },
              "updatedAt": "2023-08-09"
          },
          {
              "_id": "64d797efa5628cedef4fce58",
              "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
              "rating": 4.6,
              "user": {
                  "_id": "64c5d95adc7efae2a45ec376",
                  "username": "Zoe Doe",
                  "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg"
              },
              "updatedAt": "2023-08-09"
          }
      ]
  }
  
    let coordinates = {
      id: hotel._id,
      title: hotel.title,
      latitude: hotel.coordinates.latitude,
      longitude: hotel.coordinates.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
  
   
  
    return (
      <ScrollView>
        <View style={{ height: 80 }}>
          <AppBar
            top={50}
            left={20}
            right={20}
            title={hotel.title}
            color={COLORS.white}
            icon={"search1"}
            color1={COLORS.white}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />
        </View>
  
        <View>
          <View style={styles.container}>
            <NetworkImage
              source={hotel.imageUrl}
              width={"100%"}
              height={220}
              radius={25}
            />
  
            <View style={styles.titleContainer}>
              <View style={styles.titleColumn}>
                <ReusableText
                  text={hotel.title}
                  family={"medium"}
                  size={SIZES.xLarge}
                  color={COLORS.black}
                />
  
                <HeightSpacer height={10} />
                <ReusableText
                  text={hotel.location}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
  
                <HeightSpacer height={15} />
  
                <View style={reusable.rowWithSpace("space-between")}>
                  <Rating
                    maxStars={5}
                    stars={hotel.rating}
                    bordered={false}
                    color={"#FD9942"}
                  />
  
                  <ReusableText
                    text={`(${hotel.review})`}
                    family={"medium"}
                    size={SIZES.medium}
                    color={COLORS.gray}
                  />
                </View>
              </View>
            </View>
          </View>
  
          <View style={[styles.container, { paddingTop: 90 }]}>
            <ReusableText
              text={"Description"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
  
            <HeightSpacer height={10} />
  
            <DescriptionText text={hotel.description} />
  
            <HeightSpacer height={10} />
  
            <ReusableText
              text={"Location"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
  
            <HeightSpacer height={15} />
  
            <ReusableText
              text={hotel.location}
              family={"regular"}
              size={SIZES.small+2}
              color={COLORS.gray}
            />
  
            
  
            <View style={reusable.rowWithSpace('space-between')}>
            <ReusableText
              text={'Reviews'}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
  
            <TouchableOpacity>
              <Feather name='list' size={20}/>
            </TouchableOpacity>
            </View>
  
            <HeightSpacer height={10}/>
  
            <ReviewsList reviews={hotel.reviews}/>
  
            
  
  
  
  
          </View>
        </View>
      </ScrollView>
    );
  };

export default PackageDetails