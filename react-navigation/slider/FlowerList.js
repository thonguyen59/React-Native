
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import axios from 'axios';

export default function FlowerList({route,navigation}) {
    const [flowerList, setFlowerList] = useState([])
    const filteredFlower = flowerList.filter(filtered)
    const {maloai} = route.params;

    function filtered(filteredFlower) {
        return filteredFlower.maLoai === maloai;
    }

    const getFlowerList = async () => {
        try {
            const response = await axios.get(
                'http://172.16.10.73:3000/api/getAllFlowers'
            );
            setFlowerList(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    React.useEffect(() => {
        console.log("Call API")
        getFlowerList()
    }, [])


    const onDone = () => {
        navigation.navigate('FlowerType')
    };

    const RenderItem = ({item}) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#f6437b',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                }}>
                <Text style={styles.introTitleStyle}>
                    {item.tenhoa}
                </Text>
                <Image
                    style={styles.introImageStyle}
                    source={{uri: 'http://172.16.10.73:3000/api/images' + item.hinh}}/>
                <Text style={styles.introTextStyle}>
                    Mô tả: {item.mota} {"\n"} {"\n"}
                    Đơn giá: {item.dongia}
                </Text>
            </View>
        )

    }

    return (
        <AppIntroSlider
            data={filteredFlower}
            renderItem={RenderItem}
            onDone={onDone}
            showSkipButton={true}
            onSkip={onDone}
            bottomButton
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 200,
        height: 200,
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
});
