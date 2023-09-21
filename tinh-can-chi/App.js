import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native'

export default function App() {
  const [nam, setNam] = useState(0)
  const [canChi, setCanChi] = useState('')
  const [hinh, setHinh] = useState()

  var dia_chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửa', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi']
  var thien_can = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ']
  var images = [
    require('./images/than.jpg'),
    require('./images/dau.jpg'),
    require('./images/cho.jpg'),
    require('./images/hoi.jpg'),
    require('./images/chuot.jpg'),
    require('./images/suu.jpg'),
    require('./images/dan.jpg'),
    require('./images/meo.jpg'),
    require('./images/thin.jpg'),
    require('./images/ti.jpg'),
    require('./images/ngo.jpg'),
    require('./images/mui.jpg'),
  ]

  const tinhCanChi = () => {
    let canChi = thien_can[nam % 10] + ' ' + dia_chi[nam % 12]
    setCanChi(canChi)
    setHinh(images[nam % 12])
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TÍNH CĂN CHI</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.items}>
          <TextInput style={styles.input} keyboardType='numeric' value={nam} onChangeText={setNam}></TextInput>
        </View>

        <View>
          <Button color="#556B2F" style={styles.button} title='=>' onPress={tinhCanChi} />
        </View>

        <View style={styles.items}>
          <TextInput style={styles.result} value={canChi}></TextInput>
        </View>
      </View>

      <View>
        <Image source={hinh} style={styles.image}></Image>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3CB371',
    alignItems: 'center',
    paddingTop: 100,
  },
  titleContainer: {
    backgroundColor: '#2E8B57',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  items: {
    width: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    flexBasis: '70%',
    textAlign: 'center',
    backgroundColor: '#90EE90'
  },
  result: {
    fontSize: 18,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    flexBasis: '70%',
    backgroundColor: '#90EE90',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    paddingTop: 20,
    width: 250,
    height: 350
  },
  button: {
    color: '#556B2F',
  },
})
