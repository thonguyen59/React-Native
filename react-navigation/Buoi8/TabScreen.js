import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import LoginScreen from ".//LoginScreen";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator()

function TabScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}
                        options={{
                            headerShown: false,
                            tabBarLabel: 'Home',
                            tabBarIcon: () => (<Entypo name="home" size={24} color="black"/>)
                        }}/>

            <Tab.Screen name='Login' component={LoginScreen}
                        options={{
                            headerShown: false,
                            tabBarLabel: 'Login',
                            tabBarIcon: () => (<Entypo name="login" size={24} color="black"/>)
                        }}
            />
        </Tab.Navigator>
    )
}

export default TabScreen;