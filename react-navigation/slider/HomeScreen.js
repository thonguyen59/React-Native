import React from "react";
import FlowerType from "./FlowerType";
import FlowerList from "./FlowerList";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen() {
    return (
        <Stack.Navigator initialRouteName="FlowerType">
            <Stack.Screen name="FlowerType" component={FlowerType} options={{
                title: 'Danh mục loại hoa',
                headerStyle: {backgroundColor: '#f5411e'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: "bold"}
            }}/>
            <Stack.Screen name="FlowerList" component={FlowerList} options={{
                title: '',
                headerStyle: {backgroundColor: '#f5411e'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: "bold"}
            }}/>
        </Stack.Navigator>
    );
}

export default HomeScreen