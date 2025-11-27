import React from 'react';
import { View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Notifications from '../screens/Notifications/Notifications';
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';
import Colors from '../utilities/Colors';
import Style from '../styles/Style';
import Constants from '../utilities/Constants';
import Images from '../utilities/Images';

const Stack = createStackNavigator();
const MaterialBottomTabNavigator = createBottomTabNavigator();
const TabNavigator = createBottomTabNavigator();

const Navigator = ({ navigation, route }) => {
  const bottomnavigator = () => {
    //Bottom tab bar and its events
    return (
      <>
        <MaterialBottomTabNavigator.Navigator
          initialRouteName="Home"
          barStyle={{ backgroundColor: 'white' }}
          labeled={true}
          shifting={false}
          backBehavior="initialRoute"
        >
          <MaterialBottomTabNavigator.Screen
            name="Home"
            component={Home}
            options={{
              // Custom label for tab bar
              tabBarLabel: ({ focused }) => (
                <Text
                  style={{
                    color: focused ? 'black' : Colors.themeLightGrayTextColor,
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              ),
              tabBarVisible: true, // To show & hide the tab bar for specific screens.
              // Custom icon for tab bar
              tabBarIcon: ({ focused }) => (
                <Image
                  source={Images.homeTabIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused
                      ? Colors.themeYellowColor
                      : Colors.themeLightGrayTextColor,
                  }}
                />
              ),
            }}
          />

          <MaterialBottomTabNavigator.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: ({ focused, color }) => (
                <Text
                  style={{
                    color: focused ? 'black' : Colors.themeLightGrayTextColor,
                    fontSize: 12,
                  }}
                >
                  Search
                </Text>
              ),
              tabBarIcon: ({ focused }) => (
                <>
                  {/* Seach Bottom tab custom component */}
                  <View style={[Style.searchTabBar, { bottom: 10 }]}>
                    <Image
                      source={Images.homeSearchIcon}
                      style={[
                        Style.searchTabBarImage,
                        {
                          tintColor: focused
                            ? ''
                            : Colors.themeLightGrayTextColor,
                        },
                      ]}
                    />
                  </View>
                </>
              ),
            }}
          />

          <MaterialBottomTabNavigator.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text
                  style={{
                    color: focused ? 'black' : Colors.themeLightGrayTextColor,
                    fontSize: 12,
                  }}
                >
                  Notifications
                </Text>
              ),
              tabBarIcon: ({ focused }) => (
                <Image
                  source={Images.homeNotificationsIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused
                      ? Colors.themeYellowColor
                      : Colors.themeLightGrayTextColor,
                  }}
                />
              ),
            }}
          />
          <MaterialBottomTabNavigator.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text
                  style={{
                    color: focused ? 'black' : Colors.themeLightGrayTextColor,
                    fontSize: 12,
                  }}
                >
                  Profile
                </Text>
              ),
              tabBarIcon: ({ focused }) => (
                <Image
                  source={Images.homeProfileIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused
                      ? Colors.themeYellowColor
                      : Colors.themeLightGrayTextColor,
                  }}
                />
              ),
            }}
          />
        </MaterialBottomTabNavigator.Navigator>
      </>
    );
  };

  return (
    // Add newly created screens in stack for navigation.
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={bottomnavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
