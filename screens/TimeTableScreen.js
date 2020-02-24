import React from "react";
import { View,Text,Image,StyleSheet,Dimensions } from "react-native";
import  Button  from "../assets/button";
const { height, width } = Dimensions.get("screen");
import { LinearGradient } from "expo-linear-gradient";
const TimeTableScreen= (props)=>{
    return(
        <View style={styles.container}>
        <LinearGradient colors={['#faaf40', '#ffe3ff']} style={styles.gradient}>
        
           
            
            
            <Image style={styles.imageContainer} source={require('../assets/BusSchedule.png')}/>
            </LinearGradient>
            </View>
    )
};
styles=StyleSheet.create({
    gradient:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        marginTop:0,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        width:width,
        height:250,
        
    }
})
export default TimeTableScreen;