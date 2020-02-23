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
            <View style={{ flex: 1, backgroundColor:'white',paddingTop:30 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={Images.LogoOnboarding} style={styles.logo} />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>
                        Track Shuttle Bus
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        Save time by not wating for bus
                    </Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.button}>
                        <Button myWidth={{ width: '100%' }}
                            title={'Get Started'}
                            onSelect={()=>{navigation.navigate("Home")}}
                        />
                    </View>
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
        paddingTop:30
    },
    logo: {
        width: 94.3 * 2,
        height: 120 * 2,
        resizeMode: 'stretch',
        position: 'relative',
    },
});

export default InitialScreen;
