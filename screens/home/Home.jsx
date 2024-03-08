import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusbale.style'
import { BestPackages, HeightSpacer, Recommendation, ReusableText,  } from '../../components'
import Places from '../../components/Home/Places'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'

const Home = ({ navigation }) => {
   return (
     <SafeAreaView style={reusable.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
         <View>
           <View style={reusable.rowWithSpace("space-between")}>
             <ReusableText
               text={"Hey User!"}
               family={"regular"}
               size={TEXT.large}
               color={COLORS.black}
             />
   
             <TouchableOpacity
               style={styles.box}
               onPress={() => navigation.navigate("Search")}
             >
               <AntDesign name="search1" size={26} />
             </TouchableOpacity>
           </View>
   
           <HeightSpacer height={SIZES.xLarge} />
   
           <ReusableText
             text={'Explore Place'}
             family={"medium"}
             size={TEXT.large}
             color={COLORS.black}
           />
           
          <Places />
   
          <HeightSpacer height={5} />
   
          <Recommendation />
   
          <HeightSpacer height={30} />
   
          <BestPackages />
          <HeightSpacer height={30} />
          
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };

const styles = StyleSheet.create({
  box: {
    padding: 10,
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
  },
});

 export default Home;
