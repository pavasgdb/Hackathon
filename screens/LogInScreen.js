import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ShadowPropTypesIOS, Dimensions, KeyboardAvoidingView } from 'react-native';
import Button from '../assets/button';
import Images from "../constants/Images";
const { height, width } = Dimensions.get("screen");

const LogInScreen1 = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', }}>
                <Image source={Images.LogoOnboarding} style={styles.logo} />
            </View>
            <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={-70}
            style={{ width:'100%' }}>
                <View style={{ width: '90%', justifyContent: 'space-between' }}>
                    <TextInput placeholder='Enter your Email-Id' style={styles.emailContainer} keyboardType='email-address' blurOnSubmit={true} autoCompleteType='email'>
                    </TextInput>
                </View>
                <View style={{ width: '90%', paddingTop: 40 }}>
                    <TextInput secureTextEntry={true} placeholder='Enter Your Password' style={styles.emailContainer} blurOnSubmit={true} autoCompleteType='password' >
                    </TextInput>
                </View>
                <Text style={{ paddingTop: 40, fontWeight: 'bold', fontSize: 17 }} onPress={() => console.log('Pressed')}>Forgot Password?</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <View style={styles.button}>
                        <Button myWidth={{ width: '100%' }}
                            title={'Log In'}
                            onSelect={() => { props.navigation.replace('Driver') }}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>

    );
}
const styles = StyleSheet.create({
    logo: {
        width: 94.3 * 2.5,
        height: 120 * 2.5,
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
        height: height,
        width: width,
        paddingBottom: 100
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
    button: {
        width: 94.3 * 2.5,
        //height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
})
export default LogInScreen1
