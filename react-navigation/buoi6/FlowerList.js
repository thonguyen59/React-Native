import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

export default function FlowerList({route, navigation}) {
    const {typeName} = route.params;
    const flowerData = [{
        "flowerCode": 1,
        "typeName": "Hoa Quà tặng",
        "typeCode": "1",
        "flowerName": "Đón xuân",
        "price": 15000,
        "image": require('../image/cuc_9.jpg'),
        "description": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
    }, {
        "flowerCode": 2,
        "typeName": "Hoa Quà tặng",
        "typeCode": "1",
        "flowerName": "Hồn nhiên",
        "price": 60000,
        "image": require('../image/cuc_2.jpg'),
        "description": "Hoa hồng đỏ, lá kim thuỷ tùng"
    }, {
        "flowerCode": 3,
        "typeName": "Hoa Quà tặng",
        "typeCode": "1",
        "flowerName": "Tím thuỷ chung",
        "price": 45000,
        "image": require('../image/cuc_3.jpg'),
        "description": "Hoa cúc tím"
    }, {
        "flowerCode": 4,
        "typeName": "Hoa Quà tặng",
        "typeCode": "1",
        "flowerName": "Nét duyên tím hoa cà",
        "price": 40000,
        "image": require('../image/cuc_4.jpg'),
        "description": "Hoa cúc màu tím nhạt"
    }, {
        "flowerCode": 5,
        "typeName": "Hoa Quà tặng",
        "typeCode": "1",
        "flowerName": "Cùng khoe sắc",
        "price": 70000,
        "image": require('../image/cuc_5.jpg'),
        "description": "Hoa cúc các màu: trắng, vàng, cam"
    }, {
        "flowerCode": 6,
        "typeName": "Hoa Quà tặng",
        "typeCode": "1",
        "flowerName": "Trắng thơ ngây",
        "price": 65000,
        "image": require('../image/cuc_6.jpg'),
        "description": "Hoa cúc trắng"
    }, {
        "flowerCode": 7,
        "typeName": "Hoa Hồng",
        "typeCode": "3",
        "flowerName": "Dây tơ hồng",
        "price": 250000,
        "image": require('../image/cuoi_1.jpg'),
        "description": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
    }, {
        "flowerCode": 8,
        "typeName": "Hoa Hồng",
        "typeCode": "3",
        "flowerName": "Cầu thuỷ tinh",
        "price": 220000,
        "image": require('../image/cuoi_2.jpg'),
        "description": "Hoa hồng và hoa thuỷ tiên trắng"
    }, {
        "flowerCode": 9,
        "typeName": "Hoa Hồng",
        "typeCode": "3",
        "flowerName": "Duyên thầm",
        "price": 260000,
        "image": require('../image/cuoi_3.jpg'),
        "description": "Hoa cúc trắng, baby, lá măng"
    }, {
        "flowerCode": 10,
        "typeName": "Hoa Hồng",
        "typeCode": "3",
        "flowerName": "Ðâm chồi nảy lộc",
        "price": 180000,
        "image": require('../image/cuoi_4.jpg'),
        "description": "Hoa hồng trắng và các loại lá măng"
    }, {
        "flowerCode": 11,
        "typeName": "Hoa Hồng",
        "typeCode": "3",
        "flowerName": "Hoà quyện",
        "price": 270000,
        "image": require('../image/cuoi_5.jpg'),
        "description": "Hoa hồng trắng, lá thuỷ tùng"
    }, {
        "flowerCode": 12,
        "typeName": "Hoa Hồng",
        "typeCode": "3",
        "flowerName": "Nồng nàn",
        "price": 210000,
        "image": require('../image/cuoi_6.jpg'),
        "description": "Hoa hồng đỏ, lá thuỷ tùng, lá măng"
    }, {
        "flowerCode": 13,
        "typeName": "Hoa Tình Yêu",
        "typeCode": "4",
        "flowerName": "Together",
        "price": 120000,
        "image": require('../image/hong_1.jpg'),
        "description": "Hồng xác pháo, cúc tím"
    }, {
        "flowerCode": 14,
        "typeName": "Hoa Tình Yêu",
        "typeCode": "4",
        "flowerName": "Long trip",
        "price": 85000,
        "image": require('../image/hong_2.jpg'),
        "description": "Hoa hồng đỏ, lá kim thuỷ tùng"
    }, {
        "flowerCode": 15,
        "typeName": "Hoa Tình Yêu",
        "typeCode": "4",
        "flowerName": "Beautiful life",
        "price": 100000,
        "image": require('../image/hong_3.jpg'),
        "description": "Hoa hồng đỏ, lá măng, lá đệm"
    }, {
        "flowerCode": 16,
        "typeCode": "4",
        "typeName": "Hoa Tình Yêu",
        "flowerName": "Morning Sun",
        "price": 75000,
        "image": require('../image/hong_4.jpg'),
        "description": "Hoa hồng vàng"
    }, {
        "flowerCode": 17,
        "typeName": "Hoa Tình Yêu",
        "flowerName": "Pretty Bloom",
        "price": 65000,
        "image": require('../image/hong_5.jpg'),
        "description": "Hoa hồng trắng và lá thông"
    }, {
        "flowerCode": 18,
        "typeName": "Hoa Tình Yêu",
        "typeCode": "4",
        "flowerName": "Red Rose",
        "price": 45000,
        "image": require('../image/hong_7.jpg'),
        "description": "Hoa hồng đỏ và lá măng"
    }, {
        "flowerCode": 19,
        "typeName": "Hoa Cưới",
        "typeCode": "2",
        "flowerName": "Vấn vuơng",
        "price": 150000,
        "image": require('../image/xuan_1.jpg'),
        "description": "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá"
    }, {
        "flowerCode": 20,
        "typeCode": "2",
        "typeName": "Hoa Cưới",
        "flowerName": "Nắng nhẹ nhàng",
        "price": 50000,
        "image": require('../image/xuan_2.jpg'),
        "description": "Hoa cúc xanh, hoa lys vàng, lá đệm"
    }, {
        "flowerCode": 21,
        "typeName": "Hoa Cưới",
        "typeCode": "2",
        "flowerName": "Thanh tao",
        "price": 120000,
        "image": require('../image/xuan_3.jpg'),
        "description": "Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm"
    }, {
        "flowerCode": 22,
        "typeName": "Hoa Cưới",
        "flowerName": "Tinh khiết",
        "price": 110000,
        "image": require('../image/xuan_4.jpg'),
        "description": "Hồng trắng và salem"
    }, {
        "flowerCode": 23,
        "typeName": "Hoa Cưới",
        "typeCode": "2",

        "flowerName": "Mùa xuân chín",
        "price": 150000,
        "image": require('../image/xuan_5.jpg'),
        "description": "Hồmg cam, cúc xanh, thuỷ tiên và các loại lá"
    }, {
        "flowerCode": 24,
        "typeName": "Hoa Cưới",
        "typeCode": "2",
        "flowerName": "Rực rở nắng vàng",
        "price": 75000,
        "image": require('../image/xuan_6.jpg'),
        "description": "Hồng vàng và cúc vàng"
    }, {
        "flowerCode": 25,
        "typeName": "Hoa Tình Yêu",
        "typeCode": "4",
        "flowerName": "Love Candy",
        "price": 95000,
        "image": require('../image/hong_13.jpg'),
        "description": "Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng"
    }, {
        "flowerCode": 26,
        "typeName": "Hoa Hồng",
        "typeCode": "3",
        "flowerName": "Happy Wedding",
        "price": 210000,
        "image": require('../image/cuoi_9.jpg'),
        "description": "Hoa hồng môn và các loại lá"
    }, {
        "flowerCode": 27,
        "typeName": "Hoa Quà tặng",
        "typeCode": "1",
        "flowerName": "Cúc nhiệt đới",
        "price": 150000,
        "image": require('../image/cuc_15.jpg'),
        "description": "Cúc vàng - h?ng cam - lá mang"
    }];

    const filteredFlower = flowerData.filter(filtered)

    function filtered(hoa) {
        return hoa.typeName == typeName;
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/* flower list */}

            <View style={styles.containerFlowerList}>
                <Text style={styles.title}>{typeName}</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filteredFlower}
                    renderItem={({item}) =>
                        <View style={styles.item}>
                            <Text style={styles.label}>{item.flowerName}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('FlowerDetail', {flowerDetail: item})
                                }}>
                                <Image source={item.image}/>
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
        color: 'rgb(23,222,64)',
    },
    label: {
        fontSize: 16,
        alignSelf: 'center'
    },

    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        elevation: 9,
    },
    containerFlowerList: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
    }

})