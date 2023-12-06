import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen from './TabScreen';
import DetailScreen from './DetailScreen';
import RegistrationScreen from "./RegistrationPage";
import UserList from "./UserList";


const Drawer = createDrawerNavigator();

function DrawerScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabScreen} />
            <Drawer.Screen name="Detail" component={DetailScreen} />
            <Drawer.Screen name="Registration" component={RegistrationScreen} />
            <Drawer.Screen name="UserList" component={UserList} />
        </Drawer.Navigator>
    );
}

export default DrawerScreen