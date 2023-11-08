import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../tab/HomeScreen";
import FlowerDetail from "../pages/FlowerDetail";
import LoginScreen from "../Buoi7/LoginScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="FlowerDetail" component={FlowerDetail} />
            <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        </Drawer.Navigator>
    );
}

export default MyDrawer