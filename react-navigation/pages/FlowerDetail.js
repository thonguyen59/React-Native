
import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
export default function FlowerDetail({route,navigation}) {

    const {flowerDetail} = route.params
    const [Flower,setFlower] = useState({
        "mahoa": 1,
        "tenloai": "Hoa Quà tặng",
        "maloai": "1",
        "tenhoa": "Đón xuân",
        "dongia": 15000,
        "hinh": require('../image/cuc_9.jpg'),
        "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
    })
    const getFlower =() =>{
        try{
            setFlower(flowerDetail)
        }
        catch(error){
            alert(error.message)
        }
    }
    useEffect(()=>{
        getFlower();
    },[]);

    return (
        <View style={styles.container}>

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text styles={styles.modalText}>{Flower.tenhoa}</Text>
                    <Image style={styles.image} source={Flower.hinh}></Image>
                    <Text styles={styles.modalText}>Giá bán:{Flower.dongia}</Text>
                    <Text>{Flower.mota}</Text>

                    <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                        <Pressable style={[styles.button,styles.buttonClose,  {marginRight: 10}]}
                                   onPress={()=> navigation.navigate('FlowerType')}>
                            <Text style={styles.textStyle}>Home</Text>
                        </Pressable>
                        <Pressable style={[styles.button,styles.buttonClose]}
                                   onPress={()=> navigation.goBack()}>
                            <Text style={styles.textStyle}>Đóng</Text>
                        </Pressable>
                    </View>



                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: "row",
    },
    containerFlowerType: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerFlowerList: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    image: {
        height: 160,
        width: 160,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 20,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width:'90%',
        height:'52%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop:20,
        width:80,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})

