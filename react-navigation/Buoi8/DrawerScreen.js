import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen from './TabScreen';
import DetailScreen from './DetailScreen';


const Drawer = createDrawerNavigator();

function DrawerScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabScreen} />
            <Drawer.Screen name="Detail" component={DetailScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerScreen