import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ShadowPropTypesIOS,Dimensions } from 'react-native';
import Button from '../assets/button';
import Images from "../constants/Images";
const { height, width } = Dimensions.get("screen");

const LogInScreen = (props) => {
    return (
            <View style={styles.container}>
                <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={Images.LogoOnboarding} style={styles.logo} />
                </View>
                <View style={{ width: '90%',justifyContent:'space-between' }}>
                    <TextInput placeholder='Enter Your E-Mail Id' style={styles.emailContainer} keyboardType='email-address' blurOnSubmit={true} autoCompleteType='email'>
                    </TextInput>
                </View>
                <View style={{ width: '90%',paddingTop:20 }}>
                    <TextInput secureTextEntry={true} placeholder='Enter Your Password' style={styles.emailContainer} blurOnSubmit={true} autoCompleteType='password' >
                    </TextInput>
                </View>
                <Text style={{ paddingTop: 20, fontWeight: 'bold', fontSize: 17 }} onPress={() => console.log('Pressed')}>Forgot Password?</Text>
                <View style={{ padding: 30, marginTop: 10, width: '100%', alignItems: 'center' }}>
                    <Button title='Log In' onSelect={() => {
                        props.navigation.replace('Driver')
                    }} />
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    Logo: {
        width: 94.3 * 2,
        height: 120 * 2,
        resizeMode: 'stretch',
        position: 'relative',
    },
    container: {
        paddingTop: 50 / 774 * 683,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: 1,
        backgroundColor: 'white',
        height:height,
        width:width
    },
    heading: {
        fontSize: 30,
        textAlign: 'left',
        marginTop: 20 / 774 * 683,
        textShadowColor: 'grey',
    },
    emailContainer: {
        height: 40 / 774 * 683,
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        fontSize: 17,
    },
    logo: {
        width: 94.3 * 2,
        height: 120 * 2,
        resizeMode: 'stretch',
        position: 'relative',
    },
})
export default LogInScreen
