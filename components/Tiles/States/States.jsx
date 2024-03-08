import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { TEXT, COLORS } from '../../../constants/theme'
import {NetworkImage, ReusableText, HeightSpacer } from '../../../components/index'
import { useNavigation } from "@react-navigation/native";


const States = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('StateDetails', {item})}>
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={188}
          height={138}
          radius={12}
        />
        <HeightSpacer height={5}/>

        <ReusableText
          text={item.state}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
}

export default States