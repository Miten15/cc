import { FlatList, View } from 'react-native'
import React from 'react'
import ReusableTile2 from '../Reusable/ReusableTile2';
import { useNavigation } from '@react-navigation/native';

const PopularList = ({data}) => {
    const navigation = useNavigation();

const renderItem=({item}) => (
    <View  style={{marginBottom: 10}}>
        <ReusableTile2 item={item} onPress={()=> navigation.navigate('PlaceDetails')}/>
    </View>
)

  return (
    <FlatList 
     data={data}
     scrollEnabled={false}
     showsVerticalScrollIndicator={false}
     renderItem={renderItem}
    />
  )
}

export default PopularList

