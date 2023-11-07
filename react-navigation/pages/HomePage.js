import * as React from 'react';
import {Button, View, Text} from "react-native";

function HomePage({navigation}) {
    return (
        <View>
            <Button title={"Go to details"} onPress={() => navigation.navigate('Detail')}/>
        </View>
    )
}

export default HomePage;