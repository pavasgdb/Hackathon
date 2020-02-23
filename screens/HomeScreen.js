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
            <View style={{ flex: 1, padding: 30,backgroundColor:'white' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={Images.LogoOnboarding} style={styles.logo} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.button}>
                        <Button myWidth={{ width: '100%' }}
                            title={'Driver'}
                            onSelect={()=>{navigation.navigate("LogIn")}}
                        />
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.button}>
                        <Button myWidth={{ width: '100%' }}
                            title={'Student'}
                            onSelect={()=>{navigation.navigate("LogIn")}}
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
        padding:20
    },
    logo: {
        width: 94.3 * 2,
        height: 120 * 2,
        resizeMode: 'stretch',
        position: 'relative',
    },
});

export default HomeScreen;
