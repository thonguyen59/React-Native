import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList, Image, Alert, TouchableOpacity } from 'react-native'

export default function App() {
  const data = [
    { id: 1, ten: 'Nướng đậu xanh', hinh: require('./images/nuong_dau_xanh.jpg') },
    { id: 2, ten: 'Nướng gà quay', hinh: require('./images/nuong_ga_quay.jpg') },
    { id: 3, ten: 'Nướng hạt sen', hinh: require('./images/nuong_hat_sen.jpg') },
    { id: 4, ten: 'Nướng mè đen', hinh: require('./images/nuong_me_den.jpg') },
    { id: 5, ten: 'Nướng trà xanh', hinh: require('./images/nuong_tra_xanh.jpg') },
    { id: 6, ten: 'Dẻo đậu xanh', hinh: require('./images/deo_dau_xanh.jpg') },
    { id: 7, ten: 'Dẻo thập cẩm', hinh: require('./images/deo_thap_cam.jpg') },
    { id: 8, ten: 'Bánh Đài Loan', hinh: require('./images/banh_dai_loan.jpg') },
    { id: 9, ten: 'Nướng đậu xanh', hinh: require('./images/nuong_dau_xanh.jpg') },
    { id: 10, ten: 'Nướng gà quay', hinh: require('./images/nuong_ga_quay.jpg') },
    { id: 11, ten: 'Nướng hạt sen', hinh: require('./images/nuong_hat_sen.jpg') },
    { id: 12, ten: 'Nướng mè đen', hinh: require('./images/nuong_me_den.jpg') },
    { id: 13, ten: 'Nướng trà xanh', hinh: require('./images/nuong_tra_xanh.jpg') },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Các loại bánh trung thu</Text>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.label}>{item.ten}</Text>
            </View>

            <TouchableOpacity onPress={() => Alert.alert(item.ten)}>
              <Image style={styles.image} source={item.hinh} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc9900',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#cc3300',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    height: '6%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#cc9900',
  },
  item: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    paddingRight: 40,
    fontWeight: 'bold',
    color: '#993300',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 5,
  },
})
