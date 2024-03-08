import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
const StateDetails = ({navigation}) => {
    const route = useRoute()
    const {item} = route.params;
    console.log(item)

  return (
    <View>
      <Text>StateDetails</Text>
    </View>
  )
}

export default StateDetails