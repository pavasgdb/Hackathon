import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
//import Colors from '../Constants/Colors';

const Height=Dimensions.get('window').height;
const Width=Dimensions.get('window').width;
const Button = props => {
    return (

        <TouchableOpacity style={{width:'100%',...props.myWidth}}activeOpacity={0.7} onPress={props.onSelect}>
            <View style={{...styles.ButtonContainer,...props.sty}}>
                <Text style={{ color: 'white',textAlign:'center',fontSize:20}} >
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>

    );
}
const styles = StyleSheet.create({
    ButtonContainer: {
        borderRadius: 20,
        paddingVertical: 15/774.9*Height,
        //paddingHorizontal: 30/392*Width,
        backgroundColor: '#faaf04',
        width: '100%',
    }
})

export default Button;