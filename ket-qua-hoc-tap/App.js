import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, Button, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [averageScore, setAverageScore] = useState(0)
  const [result, setResult] = useState('')
  const [academicAbility, setAcademicAbility] = useState('')

  const caculate = () => {
    if (
      isNaN(score1) ||
      isNaN(score2) ||
      score1 < 0 ||
      score1 > 10 ||
      score2 < 0 ||
      score2 > 10
    ) {
      Alert.alert('Thông báo', 'Nhập điểm từ 0 - 10 !', [
        { text: 'OK', onPress: () => console.log('Alert Closed') },
      ])

      setScore1(0)
      setScore2(0)
      return
    }

    let average = (parseFloat(score1) + score2 * 2) / 3
    setAverageScore(average.toFixed(2))

    if (average >= 5) {
      setResult('Lên lớp')
    } else {
      setResult('Ở lại lớp')
    }

    if (average >= 8) {
      setAcademicAbility('Giỏi')
    } else if (average > 6.5) {
      setAcademicAbility('Khá')
    } else if (average >= 5) {
      setAcademicAbility('Trung bình')
    } else {
      setAcademicAbility('Yếu')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>KẾT QUẢ HỌC TẬP</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Điểm HK1:</Text>
        <TextInput
          style={styles.input}
          value={score1}
          onChangeText={setScore1}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Điểm HK2:</Text>
        <TextInput
          style={styles.input}
          value={score2}
          onChangeText={setScore2}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.label}>Điểm trung bình:</Text>
        <TextInput
          style={styles.result}
          value={averageScore}
          editable={false}
        />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.label}>Kết quả: </Text>
        <TextInput style={styles.result} value={result} editable={false} />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.label}>Xếp loại học lực: </Text>
        <TextInput
          style={styles.result}
          value={academicAbility}
          editable={false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Xem kết quả' onPress={() => caculate()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    paddingHorizontal: 10,
    paddingBottom: 200,
    justifyContent: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 18,
    paddingRight: 10,
  },
  input: {
    fontSize: 18,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    flexBasis: '70%',
  },
  result: {
    fontSize: 18,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    flexBasis: '70%',
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 110,
  },
})
