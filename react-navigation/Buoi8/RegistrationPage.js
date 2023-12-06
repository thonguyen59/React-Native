import {Button, View, Alert, TextInput} from "react-native";
import * as SQLite from 'expo-sqlite';
import React, {useEffect, useState} from "react";

var db = SQLite.openDatabase('qlbhoa.db');

function RegistrationScreen({navigation}) {

    useEffect(() => {
        createUserTable();
    }, []);

    const createUserTable = () => {
        console.log("create table")
        db.transaction(function (txn) {
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(20), password VARCHAR(20) , email_address VARCHAR (255))',
                []
            )
        })
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    let registration = () => {
        if (!username) {
            alert('Please fill name')
            return;
        }
        if (!password) {
            alert('Please fill name')
            return;
        }
        if (!emailAddress) {
            alert('Please fill name')
            return;
        }

        db.transaction(function (txn) {
            console.log("Insert user !", username, password, emailAddress)
            txn.executeSql(
                'INSERT INTO user (username, password, email_address) VALUES (?, ?, ?)',
                [username, password, emailAddress],
                (txn, results) => {
                    console.log("Results: ", results.rowsAffected)
                    if (results.rowsAffected > 0) {
                        Alert.alert('Successful', 'You are registered successful!',
                            [{text: 'OK', onPress: () => navigation.navigate('Home')}],
                            {cancelable: false})
                    } else {
                        alert('Registration failed!')
                    }
                }
            )
        })
    }

    let listViewItemSeparator = () => {
        return (
            <View
                style={{height: 0.2, width: '100%', backgroundColor: 'white'}}
            />
        )
    }

    let listItemView = (item) => {
        return (
            <View key={item.user_id} style={{backgroundColor: 'white', padding: 20}}>
                <Text>Id: {item.user_id}</Text>
                <Text>Username: {item.user_name}</Text>
                <Text>Password: {item.password}</Text>
                <Text>Email: {item.emailAdress}</Text>
            </View>
        )
    }


    return (
        <View>
            <TextInput placeholder={"Enter username"} value={username} onChangeText={setUsername}/>
            <TextInput placeholder={"Enter password"} value={password} onChangeText={setPassword}/>
            <TextInput placeholder={"Enter emailAddress"} value={emailAddress} onChangeText={setEmailAddress}/>
            <Button title={'Create user'} onPress={registration}/>
        </View>
    )
}

export default RegistrationScreen;