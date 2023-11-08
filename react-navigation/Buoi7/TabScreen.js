import React from 'react';
import HomeScreen from './HomeScreen';
import LoginScreen from './HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

function TabScreen() {
  return (
      <Tab.Navigator initialRouteName="FlowerType">
        <Tab.Screen name="Home" component={HomeScreen}
                    options={{tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Ionicons name={"home-sharp"} size={24} color={"red"} />
                    )}}/>
        <Tab.Screen name="Login" component={LoginScreen()}/>
      </Tab.Navigator>
  );
}

export default TabScreen;