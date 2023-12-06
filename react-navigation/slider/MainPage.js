import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IntroPage from "./IntroPage";
import DrawScreen from "./DrawScreen";

const Stack = createNativeStackNavigator();

function MainPage({navigation}) {
    return (
        <Stack.Navigator initialRouteName="IntroPage">
            <Stack.Screen name="IntroPage" component={IntroPage}
                          options={{
                              title: 'Intro',
                              headerStyle: {backgroundColor: '#f5411e'},
                              headerTintColor: '#fff',
                              headerTitleStyle: {fontWeight: "bold"}
                          }}
            />

            <Stack.Screen name="DrawScreen" component={DrawScreen}
                          options={{
                              title: 'Main',
                              headerStyle: {backgroundColor: '#f5411e'},
                              headerTintColor: '#fff',
                              headerTitleStyle: {fontWeight: "bold"}
                          }}
            />

        </Stack.Navigator>
    )
}

export default MainPage;