import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from "./HomeScreen";

const Drawer = createDrawerNavigator();

function DrawScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
        </Drawer.Navigator>
    );
}

export default DrawScreen