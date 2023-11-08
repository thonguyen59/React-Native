import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FlowerType from "./Buoi8/FlowerType";
import FlowerDetail from "./Buoi8/FlowerDetail";
import FlowerList from "./Buoi8/FlowerList";


const Stack = createNativeStackNavigator()

function App_b6() {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName={FlowerType}>
            <Stack.Screen name='FlowerType' component={FlowerType} options={{title: 'Loại hoa'}}/>
            <Stack.Screen name='FlowerList' component={FlowerList} options={{title: 'Danh sách hoa'}}/>
            <Stack.Screen name='FlowerDetail' component={FlowerDetail} options={{title: 'Chi tiết hoa'}}/>
        </Stack.Navigator>
    </NavigationContainer>)
}

export default App_b6;