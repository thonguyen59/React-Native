import React from "react";
import FlowerType from "../pages/FlowerType";
import FlowerList from "../pages/FlowerList";
import FlowerDetail from "../pages/FlowerDetail";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
function HomeScreen() {
    return (
        <Stack.Navigator initialRouteName="FlowerType" >
            <Stack.Screen name="FlowerType" component={FlowerType} />
            <Stack.Screen name="FlowerList" component={FlowerList} />
            <Stack.Screen name="FlowerDetail" component={FlowerDetail} />
        </Stack.Navigator>
    );
}

export default HomeScreen