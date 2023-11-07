import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../tab/HomeScreen";
import FlowerDetail from "../pages/FlowerDetail";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="FlowerDetail" component={FlowerDetail} />
        </Drawer.Navigator>
    );
}

export default MyDrawer