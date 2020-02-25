import React from "react";
import { View,Text,Image,StyleSheet,Dimensions } from "react-native";
import  Button  from "../assets/button";
const { height, width } = Dimensions.get("screen");
import { LinearGradient } from "expo-linear-gradient";
const DriverHomeScreen = (props)=>{
    return(
        <View style={styles.container}>
        {/* <LinearGradient colors={['#faaf40', '#ffe3ff']} style={styles.gradient}> */}
            <Text style={{fontSize:30 ,marginBottom:40,paddingVertical:50}}>Welcome Pavas!!!</Text>            
            <Image style={styles.imageContainer} source={require('../assets/45498.jpg')}/>
            <View style={{paddingBottom:100,paddingTop:50,width:'100%'}}>
                    <View style={{ paddingVertical:40, alignItems: 'center', justifyContent: 'center',width:'100%' }}>
                        {/* <View style={styles.button}> */}
                            <Button myWidth={{ width: '70%' }}
                                title={'Go Live'}
                                onSelect={() => { props.navigation.navigate('Driver1') }}
                            />
                        {/* </View> */}
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center',paddingTop:20 }}>
                        {/* <View style={styles.button}> */}
                            <Button myWidth={{ width: '70%' }}
                                title={'Sign Out'}
                                onSelect={() => { props.navigation.replace('Home') }}
                            />
                        {/* </View> */}
                    </View>
                </View>
            {/* </LinearGradient> */}
        </View>
    )
};
styles=StyleSheet.create({
    button: {
        width: 94.3 * 2.5,
        //height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    gradient:{
        flex: 0.9,
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
        paddingVertical:50
        
    }
})
export default DriverHomeScreen;