import React, { Component } from "react";

import {
    Image,
    StyleSheet,
    Dimensions,
    View,
    Text,
    Platform,
} from "react-native";

//const { height, width } = Dimensions.get("screen");
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';


// this is for map view
import MapView from 'react-native-maps';
const { Marker } = MapView;
////////////////////////////

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import Button from '../assets/button';

const LOCATION_TASK_NAME = 'background-location-task';

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
        // Error occurred - check `error.message` for more details.
        console.log("Background location error");
        return;
    }
    if (data) {
        var { locations } = data;
        return locations
        // do something with the locations captured in the background
    }
});

class MapScreen extends React.Component {
    state = {
        weather: null,
        img: '',
        temp: '',
        wind: '',
        loaded: false,
        location: null,
        errorMessage: null,
        region: {
            latitude: 28.5476753,
            longitude: 77.1862817,
            latitudeDelta: 0.006,
            longitudeDelta: 0.003,
        },
        marker: [{
            latitude: 28.5476753,
            longitude: 77.1862817,
            title: 'Foo Place',
            subTitle: '1234 Foo Drive'
        }]
    }
    componentDidMount() {

        fetch('http://api.openweathermap.org/data/2.5/weather?lat=28.545110&lon=77.199490&appid=43f8561e92da167bceacd986637de924')
            .then(res => res.json()
                .then((dat) => {

                    this.setState({
                        weather: dat.weather[0].main,
                        img: dat.weather[0].icon,
                        temp: Math.floor(dat.main.temp - 273) + '°C',
                        wind: dat.wind.speed + 'kmph',
                        loaded: true,
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
            pausesUpdatesAutomatically: false,
            distanceInterval: 0,
            timeInterval: 100,

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
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <MapView
                    coordinate={this.state.region}
                    region={this.state.region}
                    style={styles.mapStyle}
                //showsMyLocationButton={true}
                >
                    <MapView.Marker
                        coordinate={this.state.region}
                        // {latitude:global.variable[0].coords.latitude,longitude:global.variable[0].coords.longitude
                        title={'abcd'}
                        description={'1234'}
                        image={Images.Marker} />
                </MapView>
                <View style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    backgroundColor: 'grey',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: 20,
                    width:100,
                    height:100,
                    borderBottomLeftRadius:5
                }}>
                    <View>
                        <Image source={{ uri: 'http://openweathermap.org/img/w/' + '04n' + '.png' }} style={{ width: 50, height: 50, resizeMode: 'stretch' }} />
                    </View>
                    {/* <Text>
                        Temp -->
                       </Text> */}
                    <Text style={{ fontSize: 15, }}>
                        {this.state.temp}
                    </Text>
                </View>
                {/* <View style={{ width: '100%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{flexDirection: 'row'}}>
                    <Text>
                      Weather Condition -->
                    </Text>
                    <Text style={{ fontSize: 15, }}>
                        {this.state.weather}
                    </Text>
                    </View> 
                    <View style={{flexDirection: 'row'}}>
                       <Text>
                           Temp -->  
                       </Text>
                        <Text style={{ fontSize: 15, }}>
                            {this.state.temp}
                        </Text>
                    </View>
                    <View>
                        <Image source={{ uri: 'http://openweathermap.org/img/w/' + '04n' + '.png' }} style={{ width: 50, height: 50, resizeMode: 'stretch' }} />
                    </View>
                    <Text style={styles.paragraph}>{this.state.location}</Text>
                </View> */}


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
    mapStyle: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
});

export default MapScreen;
