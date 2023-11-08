import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlowerType from './FlowerType';
import FlowerList from './FlowerList';
import FlowerDetail from './FlowerDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginScreen() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={FlowerType}>
          <Stack.Screen name="FlowerType" component={FlowerType}
                        options={{
                          title: 'Loại hoa',
                          headerStyle: {backgroundColor: '#f45111e'},
                          headerTintColor: '#fff',
                          headerTitleStyle: {fontWeight: 'bold'},
                        }}/>
          <Stack.Screen name="FlowerList" component={FlowerList} options={{title: 'Danh sách hoa'}}/>
          <Stack.Screen name="FlowerDetail" component={FlowerDetail} options={{title: 'Chi tiết hoa'}}/>
        </Stack.Navigator>
      </NavigationContainer>);
}

export default LoginScreen;