
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, Image, Modal, Pressable } from 'react-native';

export default function FlowerList({route,navigation}) {
    const{tenloai}=route.params;
    const HOA = [{
        "mahoa": 1,
        "tenloai": "Hoa Quà tặng",
        "maloai": "1",
        "tenhoa": "Đón xuân",
        "dongia": 15000,
        "hinh": require('../image/cuc_9.jpg'),
        "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
    }, {
        "mahoa": 2,
        "tenloai": "Hoa Quà tặng",
        "maloai": "1",
        "tenhoa": "Hồn nhiên",
        "dongia": 60000,
        "hinh": require('../image/cuc_2.jpg'),
        "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
    }, {
        "mahoa": 3,
        "tenloai": "Hoa Quà tặng",
        "maloai": "1",
        "tenhoa": "Tím thuỷ chung",
        "dongia": 45000,
        "hinh": require('../image/cuc_3.jpg'),
        "mota": "Hoa cúc tím"
    }, {
        "mahoa": 4,
        "tenloai": "Hoa Quà tặng",
        "maloai": "1",
        "tenhoa": "Nét duyên tím hoa cà",
        "dongia": 40000,
        "hinh": require('../image/cuc_4.jpg'),
        "mota": "Hoa cúc màu tím nhạt"
    }, {
        "mahoa": 5,
        "tenloai": "Hoa Quà tặng",
        "maloai": "1",
        "tenhoa": "Cùng khoe sắc",
        "dongia": 70000,
        "hinh": require('../image/cuc_5.jpg'),
        "mota": "Hoa cúc các màu: trắng, vàng, cam"
    }, {
        "mahoa": 6,
        "tenloai": "Hoa Quà tặng",
        "maloai": "1",
        "tenhoa": "Trắng thơ ngây",
        "dongia": 65000,
        "hinh": require('../image/cuc_6.jpg'),
        "mota": "Hoa cúc trắng"
    }, {
        "mahoa": 7,
        "tenloai": "Hoa Hồng",
        "maloai": "3",
        "tenhoa": "Dây tơ hồng",
        "dongia": 250000,
        "hinh": require('../image/cuoi_1.jpg'),
        "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
    }, {
        "mahoa": 8,
        "tenloai": "Hoa Hồng",
        "maloai": "3",
        "tenhoa": "Cầu thuỷ tinh",
        "dongia": 220000,
        "hinh": require('../image/cuoi_2.jpg'),
        "mota": "Hoa hồng và hoa thuỷ tiên trắng"
    }, {
        "mahoa": 9,
        "tenloai": "Hoa Hồng",
        "maloai": "3",
        "tenhoa": "Duyên thầm",
        "dongia": 260000,
        "hinh": require('../image/cuoi_3.jpg'),
        "mota": "Hoa cúc trắng, baby, lá măng"
    }, {
        "mahoa": 10,
        "tenloai": "Hoa Hồng",
        "maloai": "3",
        "tenhoa": "Ðâm chồi nảy lộc",
        "dongia": 180000,
        "hinh": require('../image/cuoi_4.jpg'),
        "mota": "Hoa hồng trắng và các loại lá măng"
    }, {
        "mahoa": 11,
        "tenloai": "Hoa Hồng",
        "maloai": "3",
        "tenhoa": "Hoà quyện",
        "dongia": 270000,
        "hinh": require('../image/cuoi_5.jpg'),
        "mota": "Hoa hồng trắng, lá thuỷ tùng"
    }, {
        "mahoa": 12,
        "tenloai": "Hoa Hồng",
        "maloai": "3",
        "tenhoa": "Nồng nàn",
        "dongia": 210000,
        "hinh": require('../image/cuoi_6.jpg'),
        "mota": "Hoa hồng đỏ, lá thuỷ tùng, lá măng"
    }, {
        "mahoa": 13,
        "tenloai": "Hoa Tình Yêu",
        "maloai": "4",
        "tenhoa": "Together",
        "dongia": 120000,
        "hinh": require('../image/hong_1.jpg'),
        "mota": "Hồng xác pháo, cúc tím"
    }, {
        "mahoa": 14,
        "tenloai": "Hoa Tình Yêu",
        "maloai": "4",
        "tenhoa": "Long trip",
        "dongia": 85000,
        "hinh": require('../image/hong_2.jpg'),
        "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
    }, {
        "mahoa": 15,
        "tenloai": "Hoa Tình Yêu",
        "maloai": "4",
        "tenhoa": "Beautiful life",
        "dongia": 100000,
        "hinh": require('../image/hong_3.jpg'),
        "mota": "Hoa hồng đỏ, lá măng, lá đệm"
    }, {
        "mahoa": 16,
        "maloai": "4",
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Morning Sun",
        "dongia": 75000,
        "hinh": require('../image/hong_4.jpg'),
        "mota": "Hoa hồng vàng"
    }, {
        "mahoa": 17,
        "tenloai": "Hoa Tình Yêu",
        "tenhoa": "Pretty Bloom",
        "dongia": 65000,
        "hinh": require('../image/hong_5.jpg'),
        "mota": "Hoa hồng trắng và lá thông"
    }, {
        "mahoa": 18,
        "tenloai": "Hoa Tình Yêu",
        "maloai": "4",
        "tenhoa": "Red Rose",
        "dongia": 45000,
        "hinh": require('../image/hong_7.jpg'),
        "mota": "Hoa hồng đỏ và lá măng"
    }, {
        "mahoa": 19,
        "tenloai": "Hoa Cưới",
        "maloai": "2",
        "tenhoa": "Vấn vuơng",
        "dongia": 150000,
        "hinh": require('../image/xuan_1.jpg'),
        "mota": "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá"
    }, {
        "mahoa": 20,
        "maloai": "2",
        "tenloai": "Hoa Cưới",
        "tenhoa": "Nắng nhẹ nhàng",
        "dongia": 50000,
        "hinh": require('../image/xuan_2.jpg'),
        "mota": "Hoa cúc xanh, hoa lys vàng, lá đệm"
    }, {
        "mahoa": 21,
        "tenloai": "Hoa Cưới",
        "maloai": "2",
        "tenhoa": "Thanh tao",
        "dongia": 120000,
        "hinh": require('../image/xuan_3.jpg'),
        "mota": "Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm"
    }, {
        "mahoa": 22,
        "tenloai": "Hoa Cưới",
        "tenhoa": "Tinh khiết",
        "dongia": 110000,
        "hinh": require('../image/xuan_4.jpg'),
        "mota": "Hồng trắng và salem"
    }, {
        "mahoa": 23,
        "tenloai": "Hoa Cưới",
        "maloai": "2",

        "tenhoa": "Mùa xuân chín",
        "dongia": 150000,
        "hinh": require('../image/xuan_5.jpg'),
        "mota": "Hồmg cam, cúc xanh, thuỷ tiên và các loại lá"
    }, {
        "mahoa": 24,
        "tenloai": "Hoa Cưới",
        "maloai": "2",
        "tenhoa": "Rực rở nắng vàng",
        "dongia": 75000,
        "hinh": require('../image/xuan_6.jpg'),
        "mota": "Hồng vàng và cúc vàng"
    }, {
        "mahoa": 25,
        "tenloai": "Hoa Tình Yêu",
        "maloai": "4",
        "tenhoa": "Love Candy",
        "dongia": 95000,
        "hinh": require('../image/hong_13.jpg'),
        "mota": "Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng"
    }, {
        "mahoa": 26,
        "tenloai": "Hoa Hồng",
        "maloai": "3",
        "tenhoa": "Happy Wedding",
        "dongia": 210000,
        "hinh": require('../image/cuoi_9.jpg'),
        "mota": "Hoa hồng môn và các loại lá"
    }, {
        "mahoa": 27,
        "tenloai": "Hoa Quà tặng",
        "maloai": "1",
        "tenhoa": "Cúc nhiệt đới",
        "dongia": 150000,
        "hinh": require('../image/cuc_15.jpg'),
        "mota": "Cúc vàng - h?ng cam - lá mang"
    }];
    const filteredFlower = HOA.filter(filtered)
    function filtered(hoa) {
        return hoa.tenloai == tenloai;
    }

    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            {/* flower list */}

            <View style={styles.containerFlowerList}>
                <Text style={styles.title}>{tenloai}</Text>
                <FlatList
                    showsVerticalScrollIndicator = {false}
                    data={filteredFlower}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            <Text style={styles.label}>{item.tenhoa}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('FlowerDetail',{flowerDetail:item})
                                }}>
                                <Image source={item.hinh} />
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({

    image: {
        height: 160,
        width: 160,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
    label: {
        fontSize: 16,
        alignSelf:'center'
    },

    item: {
        backgroundColor:'#fff',
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:10,
        shadowColor: '#000',
        shadowRadius:3.84,
        shadowOpacity: 0.25,
        elevation:9,
    },
    containerFlowerList: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
    }

})