import { View, Text , StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DescriptionText, HeightSpacer, NetworkImage, PopularList, ReusableText, ReuseableBtn } from '../../components'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, TEXT, SIZES } from '../../constants/theme'
import reusable from '../../components/Reusable/reusbale.style'
import {Feather} from '@expo/vector-icons'
const StateDetails = ({navigation}) => {
    const route = useRoute()
    const {item} = route.params; 
  const state = {
    _id: "64c62bfc65af9f8c969a8d04",
    state: "Rajasthan",
    description:
      "Rajasthan, the land of kings, is a state in northwest India revered for its rich religious heritage. From the majestic temples of Khajuraho to the sacred city of Pushkar, Rajasthan is a spiritual haven for devotees. The state is home to several prominent Hindu and Jain pilgrimage sites, including the iconic Ranakpur Jain temples and the Sri Govind Dev Ji Temple in Jaipur. Rajasthan's vibrant festivals, such as the Gangaur and Teej, celebrate the divine with fervor and enthusiasm.",
    imageUrl:
      "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/rajasthan-famous.jpg",
    popular: [
      {
        _id: "64c631650298a05640539adc",
        title: "Khajuraho Temples Pilgrimage",
        imageUrl:
          "https://thefloatingpebbles.com/wp-content/uploads/2023/03/22-10-03-MP22-88-1024x731.jpg",
        rating: 4.7,
        review: "1204 Reviews",
        location: "Khajuraho, Rajasthan",
        price: '₹1599 per person'
      },
      {
        _id: "64d062a3de20d7c932f1f70a",
        title: "Khajuraho Temples Pilgrimage",
        imageUrl:
          "https://thefloatingpebbles.com/wp-content/uploads/2023/03/22-10-03-MP22-88-1024x731.jpg",
        rating: 4.7,
        review: "1204 Reviews",
        location: "Khajuraho, Rajasthan",
        price: '₹1599 per person'
      },
    ],
    region: "Northwest India, Rajasthan",
  };
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={state.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={state.state}
          icon={"search1"}
          
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={state.region}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={state.description} />

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20} />

          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Destinations"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={state.popular} />

          <ReuseableBtn
            onPress={() => navigation.navigate("PackageSearch")}
            btnText={"Find Best Hotels"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.nf}
            borderColor={COLORS.nf}
            borderWidth={0}
            textColor={COLORS.white}
          />
          <HeightSpacer height={50} />
        </View>
      </View>
    </ScrollView>
  );
};

export default StateDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
