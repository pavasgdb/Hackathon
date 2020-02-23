import React,{ Component } from "react";

import {
    ImageBackground,
    Image,
    StyleSheet,
    StatusBar,
    Dimensions,
    View,
    Text,
    Platform,
} from "react-native";
const { height, width } = Dimensions.get("screen");
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import Button from '../assets/button';

const LOCATION_TASK_NAME = 'background-location-task';

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
      const { locations } = data;
      console.log(locations);// do something with the locations captured in the background
    }
  });
  
class InitialScreen extends React.Component {
    state = { posts: null, loaded: false,location: null,
        errorMessage: null, }
    componentDidMount() {
        
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=28.545110&lon=77.199490&appid=43f8561e92da167bceacd986637de924')
            .then(res => res.json()
                .then((dat) => {

                    this.setState({
                        posts: dat.weather[0].main,
                        img:dat.weather[0].icon,
                        loaded: true
                    })
                })
                .catch(console.log))
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
            } else {
            this._getLocationAsync();
            }
    }

    _getLocationAsync = async () => {

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            accuracy: Location.Accuracy.Balanced,
          });
        // TaskManager.defineTask(GET_LOCATION, ({ data: { eventType, region }, error }) => {
        //     if (error) {
        //       // check `error.message` for more details.
        //       return;
        //     }
        //     let location = Location.watchPositionAsync({ accuracy:High,   timeInterval : 100,distanceInterval:5,mayShowUserSettingsDialog:true }, callback)
        //     this.setState({ location });
        //   });

        
      };


    render() {
        //const { navigation } = this.props;

        // let text = 'Waiting..';
        // if (this.state.errorMessage) {
        // text = this.state.errorMessage;
        // } else if (this.state.location) {
        // text = JSON.stringify(this.state.location);
        // }
        
        console.log(this.state.img)
        return (
            <View style={{ flex: 1, padding: 30, backgroundColor: 'white' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 30 }}>
                        {this.state.posts}
                    </Text>
                    <Text style={styles.paragraph}>{this.state.location}</Text>
                </View>
                <View>
                    <Image source={{uri: '  '}} style={{width:30,height:30,resizeMode:'stretch'}}/>
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
    },
    logo: {
        width: 94.3 * 2,
        height: 120 * 2,
        resizeMode: 'stretch',
        position: 'relative',
    },
    location: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
      },
});

export default InitialScreen;
