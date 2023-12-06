import {Button, View, Alert, TextInput, SafeAreaView, FlatList, Text} from "react-native";
import * as SQLite from 'expo-sqlite';
import React, {useEffect, useState} from "react";

var db = SQLite.openDatabase('qlbhoa.db');

function UserList({navigation}) {
    let [flatListItems, setFlatListItems] = useState([])

    const getUserList = () => {
        db.transaction((txn) => {
            txn.executeSql('SELECT * FROM user', [], (txn, results) => {
                var temp = []
                for (let i = 0; i < results.rows.length; ++i) temp.push(results.rows.item(i));
                setFlatListItems(temp)
            })
        })
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserList()
        })
    })

    let listViewItemSeparator = () => {
        return (
            <View
                style={{height: 0.2, width: '100%', backgroundColor: 'yellow'}}
            />
        )
    }

    const listItemView = (item) => {
        console.log("Results: ", item)
        return (
            <View style={{backgroundColor: 'white', padding: 20}}>
                <Text>Id: {item.user_id}</Text>
                <Text>Username: {item.username}</Text>
                <Text>Password: {item.password}</Text>
                <Text>Email: {item.email_address}</Text>
            </View>
        )
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 1}}></View>
                <FlatList data={flatListItems}
                          ItemSeparatorComponent={listViewItemSeparator}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({item}) => listItemView(item)}/>
            </View>

        </SafeAreaView>
    )
}
export default UserList;