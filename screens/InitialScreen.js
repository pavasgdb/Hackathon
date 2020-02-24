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
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 130 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={Images.LogoOnboarding} style={styles.logo} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center',paddingTop:100 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                        Bus Tracking Device
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', padding: 20 }}>
                    <Text style={{ fontSize: 20,padding:20,paddingBottom:15 }}>
                    • Track shuttle bus
                    </Text>
                    <Text style={{ fontSize: 20,padding:20,paddingTop:15}}>
                    • Now no more wating for Bus
                    </Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.button}>
                        <Button myWidth={{ width: '100%' }}
                            title={'Get Started'}
                            onSelect={() => { navigation.navigate("Home") }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 94.3 * 2.5,
        //height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },
    logo: {
        width: 94.3 * 2.5,
        height: 120 * 2.5,
        resizeMode: 'stretch',
        position: 'relative',
    },
});

export default InitialScreen;
