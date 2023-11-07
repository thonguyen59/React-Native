import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FlowerType from "./buoi6/FlowerType";
import FlowerDetail from "./buoi6/FlowerDetail";
import FlowerList from "./buoi6/FlowerList";


const Stack = createNativeStackNavigator()

function App() {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName={FlowerType}>
            <Stack.Screen name='FlowerType' component={FlowerType} options={{title: 'Loại hoa'}}/>
            <Stack.Screen name='FlowerList' component={FlowerList} options={{title: 'Danh sách hoa'}}/>
            <Stack.Screen name='FlowerDetail' component={FlowerDetail} options={{title: 'Chi tiết hoa'}}/>
        </Stack.Navigator>
    </NavigationContainer>)
}

export default App;