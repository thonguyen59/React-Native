import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [storage, setStorage] = useState("");

    const saveUserInfo = () => {
        if (username && password) {
            AsyncStorage.setItem('username', username);
            AsyncStorage.setItem('password', password);
            setUsername('')
            setPassword('')
            alert('Saved user info!')
        } else {
            alert('Enter username and password, please!')
        }
    }

    const getStorageValue = () => {
        AsyncStorage.getItem('username').then(
            (value) =>
                setStorage("username: " + value)
        )

        AsyncStorage.getItem('password').then(
            (value) =>
                setStorage(storage + " - password: " + value)
        )
    }

    return (<View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Đăng nhập</Text>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="username"
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                placeholder="password"
            />
        </View>

        <TouchableOpacity onPress={saveUserInfo} style={styles.buttonContainer}>
            <Text>Lưu thông tin</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={getStorageValue} style={styles.buttonContainer}>
            <Text>Lấy thông tin</Text>
        </TouchableOpacity>

        <Text>{getStorageValue}</Text>
    </View>)

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingBottom: 250
    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    label: {
        fontSize: 18,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        flexBasis: '70%',
    },
    buttonContainer: {
        marginTop: 20,
    },
})


export default LoginScreen;