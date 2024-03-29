import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './slides.style'
import {HeightSpacer, ReusableText, ReuseableBtn} from '../../components/index'
import { COLORS, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const Slides = ({item}) => {
  const navigation = useNavigation()
  return (
    <View>
        <Image source={item.image}  style={styles.image} />
       {/*So this the text , its data is coming from the Onboarding screen */}
        <View style={styles.stack}>
          <ReusableText
          text={item.title}
          family={'medium'}
          size={SIZES.xxLarge}
          color={COLORS.white}
          />
   
         <HeightSpacer height={40}/>

          <ReuseableBtn 
           onPress={()=> navigation.navigate('Bottom')}
           btnText={"Get Started"}
           width={(SIZES.width-50)/2.2}
           backgroundColor={COLORS.nf}
           borderColor={COLORS.nf}
           borderWidth={0}
           textColor={COLORS.white}
          />

        </View>
    </View>
  )
}

export default Slides