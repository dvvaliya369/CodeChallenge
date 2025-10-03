

import React, { useState, useEffect } from 'react'
import {
    View, Image, Text, Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home'
import Notifications from '../screens/Notifications/Notifications'
import Post from '../screens/Post/Post'
import Pic from '../screens/Post/Pic'
import Profile from '../screens/Profile/Profile'
import Search from '../screens/Search/Search';
import Settings from '../screens/Settings/Settings'; // New screen
import Colors from '../utilities/Colors';
import Style from '../styles/Style';
import Constants from '../utilities/Constants';
import Images from '../utilities/Images';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = ({ navigation, route }) => {

    const TabNavigator = () => {
        const [postTabBarHide, setPostTabBarhide] = useState(false)

        useEffect(() => {
        }, [postTabBarHide])
        
        //Bottom tab bar and its events
        return (
            <Tab.Navigator 
                initialRouteName="Home" 
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { 
                        backgroundColor: 'white',
                        display: postTabBarHide ? 'none' : 'flex'
                    },
                    tabBarActiveTintColor: Colors.themeYellowColor || 'black',
                    tabBarInactiveTintColor: Colors.themeLightGrayTextColor || 'gray',
                    tabBarLabelStyle: { fontSize: 12 }
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <Image source={Images.homeTabIcon}
                                style={{
                                    width: 24, height: 24, tintColor: focused ?
                                        Colors.themeYellowColor : Colors.themeLightGrayTextColor
                                }} />
                        ),
                    }}
                />

                <Tab.Screen 
                    name="Post" 
                    component={Post}
                    options={{
                        tabBarLabel: 'Post',
                        tabBarIcon: ({ focused }) => (
                            <Image source={Images.homePostIcon}
                                style={{
                                    width: 24, height: 24, tintColor: focused ?
                                        Colors.themeYellowColor : Colors.themeLightGrayTextColor
                                }}
                            />
                        ),
                    }}
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            setPostTabBarhide(true) // Setting Tab bar hidden for Post tab
                        },
                    })}
                />

                <Tab.Screen 
                    name="Search" 
                    component={Search}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={[Style.searchTabBar, { bottom: postTabBarHide ? Platform.OS === "ios" ? 0 : -25 : 10 }]}>
                                <Image
                                    source={Images.homeSearchIcon}
                                    style={[Style.searchTabBarImage, {
                                        tintColor: focused ? Colors.themeYellowColor :
                                            Colors.themeLightGrayTextColor
                                    }]}
                                />
                            </View>
                        )
                    }}
                />

                <Tab.Screen 
                    name="Notifications" 
                    component={Notifications}
                    options={{
                        tabBarLabel: 'Notifications',
                        tabBarIcon: ({ focused }) => (
                            <Image source={Images.homeNotificationsIcon}
                                style={{
                                    width: 24, height: 24, tintColor: focused ?
                                        Colors.themeYellowColor : Colors.themeLightGrayTextColor
                                }} />
                        ),
                    }}
                />
                
                <Tab.Screen 
                    name="Profile" 
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ focused }) => (
                            <Image source={Images.homeProfileIcon}
                                style={{
                                    width: 24, height: 24, tintColor: focused ?
                                        Colors.themeYellowColor : Colors.themeLightGrayTextColor
                                }} />
                        ),
                    }}
                />
                
                {/* New Settings screen in tab bar */}
                <Tab.Screen 
                    name="Settings" 
                    component={Settings}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ focused }) => (
                            <Image 
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/126/126472.png' }}
                                style={{
                                    width: 24, height: 24, tintColor: focused ?
                                        Colors.themeYellowColor : Colors.themeLightGrayTextColor
                                }} 
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }

    return (
        // Add newly created screens in stack for navigation.
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="Pic" component={Pic} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;