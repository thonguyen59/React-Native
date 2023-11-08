import React, { useState } from 'react'
import { Text, Button, View, Image, ImageBackground, Switch } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyDrawer from "./draw/MyDrawer";
import DrawerScreen from "./Buoi8/DrawerScreen";


const Stack = createNativeStackNavigator()

// test
export default function App() {
    return (
        <NavigationContainer>
           <DrawerScreen/>
        </NavigationContainer>
    );

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Welcome' }} />
  //       <Stack.Screen name='Profile' component={ProfileScreen} options={{ title: 'Profile' }} />
  //       <Stack.Screen name='Studying' component={StudyingScreen} options={{ title: 'Study until die' }} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={require('./image/image1.jpg')}
        style={{
          padding: 20,
          height: 600,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Button title="Go to Thor's profile" onPress={() => navigation.navigate('Profile', { name: 'Thor' })} />
        <View style={{ alignContent: 'center' }}>
          <Image style={{ width: 100, height: 100 }} source={require('./image/image1.jpg')} />
          <View style={{ paddingTop: 20 }}>
            <Image
              style={{ width: 100, height: 100, paddingTop: 20 }}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_tabby_and_white_kitten_n01.jpg/1200px-Golden_tabby_and_white_kitten_n01.jpg',
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const ProfileScreen = ({ navigation }) => {
  const [den, setDen] = useState(true)
  return (
    <View>
      <View>
        <Switch
          trackColor={{ true: 'green', false: 'red' }}
          thumbColor={den ? 'green' : 'red'}
          onValueChange={setDen}
          ios_backgroundColor='#3e3e3e'
          value={den}
        />
      </View>
      <View>
        <Button title='Go to study are' onPress={() => navigation.navigate('Studying', { name: 'Thor', age: 20 })} />
      </View>
    </View>
  )
}

const StudyingScreen = ({ navigation, route }) => {
  return (
    <View
      style={{
        paddingHorizontal: 110,
        justifyContent: 'center',
        paddingTop: 20,
      }}
    >
      <View style={{ paddingBottom: 10 }}>
        <Text>
          MR.{route.params.name} is studying. Age {route.params.age}
        </Text>
      </View>
      <Button title="Go to Thor's profile" onPress={() => navigation.navigate('Profile', { name: 'Hoc bai di' })} />
      <View style={{ paddingTop: 20 }}>
        <Button title='Go to Homepage' onPress={() => navigation.navigate('Home', { name: 'Hoc bai di' })} />
      </View>
    </View>
  )
}
