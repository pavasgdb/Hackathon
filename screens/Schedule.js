import React from "react";
import {
    ImageBackground,
    Image,
    StyleSheet,
    StatusBar,
    Dimensions,
    View,
    Text,
} from "react-native";
const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import Button from '../assets/button';

class InitialScreen extends React.Component {
    render() {
        //const { navigation } = this.props;

        return (
            <View style={{ flex: 1, padding: 30,backgroundColor:'white' }}>    
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 30 }}>
                        Schedule
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 94.3 * 2,
        //height: 54,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 94.3 * 2,
        height: 120 * 2,
        resizeMode: 'stretch',
        position: 'relative',
    },
});

export default InitialScreen;
