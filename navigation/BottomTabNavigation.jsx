import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    Home, Location,
    Chat,
    Profile
} from '../screens'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

const tabBarStyle = {
    backgroundColor: '#3461A8', // Set the background color of the tab bar
   // padding: 20,
    borderRadius: 20,
    height: 80,
    position: "absolute",
    bottom: -8,
    //left: 20,
    //right: 20,
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarHideKeyBoard={true}
            headerShown={false}
            barStyle={{ paddingBottom: 48 }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "grid" : "grid-outline"}
                            color={focused ? 'white' : "#384A66"} // Set the color of the icon
                            size={26}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Location"
                component={Location}
                options={{
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "location" : "location-outline"}
                            color={focused ? 'white' : "#384A66"} // Set the color of the icon
                            size={26}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                            color={focused ? 'white' : "#384A66"} // Set the color of the icon
                            size={26}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarStyle: tabBarStyle,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            color={focused ? 'white' : "#384A66"} // Set the color of the icon
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;