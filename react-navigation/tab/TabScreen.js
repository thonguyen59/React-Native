import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./Login";

const Tab = createStackNavigator();
function TabScreen() {
    return (
        <Tab.Navigator initialRouteName="FlowerType" >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
    );
}

export default TabScreen