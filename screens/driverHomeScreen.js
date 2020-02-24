import React from "react";
import { View,Text,Image,StyleSheet,Dimensions } from "react-native";
import  Button  from "../assets/button";
const { height, width } = Dimensions.get("screen");
import { LinearGradient } from "expo-linear-gradient";
const DriverHomeScreen = (props)=>{
    return(
        <View style={styles.container}>
        <LinearGradient colors={['#faaf40', '#ffe3ff']} style={styles.gradient}>
        
            <Text style={{fontSize:30 ,marginBottom:40}}>Welcome Pavas!!!</Text>
            
            
            <Image style={styles.imageContainer} source={require('../assets/45498.jpg')}/>
            </LinearGradient>
            <View style={{margin:30,marginLeft:99,marginTop:0, width:'99%'}}>
                <Button myWidth={{width:'80%'}} title='Go Live' onSelect={() => {
                        console.log('You son of a bitch ! I\'m in!')
                        props.navigation.replace('Driver1')
                    }} />
                    </View>
            <Button myWidth={{width:'80%'}} title='Sign Out!' onSelect={() => {
                console.log('You son of a bitch ! I\'m in!')
                props.navigation.replace('Home')
            }} />
        </View>
    )
};
styles=StyleSheet.create({
    gradient:{
        flex: 0.8,
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
        height:300,
        
    }
})
export default DriverHomeScreen;