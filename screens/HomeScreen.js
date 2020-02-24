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

//import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import Button from '../assets/button';

class HomeScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 130 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={Images.LogoOnboarding} style={styles.logo} />
                </View>
                <View style={{paddingBottom:100}}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.button}>
                            <Button myWidth={{ width: '100%' }}
                                title={'Driver'}
                                onSelect={() => { navigation.navigate("LogInDriver") }}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.button}>
                            <Button myWidth={{ width: '100%' }}
                                title={'User'}
                                onSelect={() => { navigation.navigate("LogInStu") }}
                            />
                        </View>
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
        paddingTop: 30
    },
    logo: {
        width: 94.3 * 2.5,
        height: 120 * 2.5,
        resizeMode: 'stretch',
        position: 'relative',
    },
});

export default HomeScreen;
