
import { useFonts } from 'expo-font';
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, Search, StateDetails , Recommended,PlaceDetails,PDetails, PackageDetails, PackageList, PackageSearch} from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={Onboarding} options={ {headerShown: false}}/>
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={ {headerShown: false}}/>
        <Stack.Screen name='Search' component={Search} options={ {headerShown: false}}/>
        <Stack.Screen name='StateDetails' component={StateDetails} options={ {headerShown: false}}/>
        <Stack.Screen name='Recommended' component={Recommended} options={ {headerShown: false}}/>
        <Stack.Screen name='PDetails' component={PDetails} options={ {headerShown: false}}/>

        <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={ {headerShown: false}}/>

        <Stack.Screen name='PackageDetails' component={PackageDetails} options={ {headerShown: false}}/>
        <Stack.Screen name='PackageList' component={PackageList} options={ {headerShown: false}}/>
        <Stack.Screen name='PackageSearch' component={PackageSearch} options={ {headerShown: false}}/>

      </Stack.Navigator>
   </NavigationContainer>
  );
}
