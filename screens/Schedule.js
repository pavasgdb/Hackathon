import React from "react";
import {
    ImageBackground,
    Image,
    StyleSheet,
    TextInput,
    StatusBar,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    LinearGradient,
    
} from "react-native";
const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import Button from '../assets/button';

class InitialScreen extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        //const { navigation } = this.props;

        return (
            
            <ImageBackground source={require('../assets/schedule1.jpg')} style={{width: '100%', height: '100%'}} imageStyle={{opacity:0.03}}>
            <View style={{ flex: 1, paddingTop: 30,paddingHorizontal:10 , }}>    
                <View style={{ flex: 1, marginTop:30, paddingTop: 10,paddingHorizontal:10, flexDirection:'row' }}>
                    <Text style={{ fontSize: 25, marginRight:10, marginTop:15, color:'black' }}>
                        To View The Bus Time   
                    </Text>
                    {/* <TouchableOpacity>
                        <Text style={{fontSize:20}} onPress={()=>{this.props.navigation.navigate('TimeTable') 
                    console.log('hi')}}>
                            Click Here!
                        </Text>
                    </TouchableOpacity> */}
                    <Button title="Click Here!" myWidth={{width:'30%'}} onSelect={()=>this.props.navigation.navigate('TimeTable')}></Button>
                </View>
                <Text style={{ fontSize: 25, marginRight:10, marginTop:15 }}>
                        Add the Schedule by setting reminder   
                    </Text>
                    <View style={{ flex: 1, marginTop:30, paddingVertical: 10,paddingHorizontal:10, flexDirection:'row' }}>

                    <View style={{ width: '80%',justifyContent:'space-between',marginRight:10 }}>
                    <TextInput placeholder='Add here' style={styles.emailContainer} keyboardType='email-address' blurOnSubmit={true} autoCompleteType='email'>
                    </TextInput>
                    </View> 
                    {/* <TouchableOpacity>
                        <Text style={{fontSize:20}} onPress={()=>{this.props.navigation.navigate('TimeTable') 
                    console.log('hi')}}>
                            Click Here!
                        </Text>
                    </TouchableOpacity> */}
                    <Button title="+" myWidth={{width:'18%'}} onSelect={()=>console.log('hi')}/>
</View>
</View>
          </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 94.3 * 2,
        //height: 54,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 94.3 * 2,
        height: 120 * 2,
        resizeMode: 'stretch',
        position: 'relative',
    },
    emailContainer: {
        height: 40 / 774 * 683,
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        fontSize: 17,
    },
});

export default InitialScreen;
