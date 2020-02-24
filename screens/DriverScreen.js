import React, { Component } from "react";

import {
    ImageBackground,
    Image,
    StyleSheet,
    StatusBar,
    Dimensions,
    View,
    Text,
    Platform,
    Switch
} from "react-native";
const { height, width } = Dimensions.get("screen");
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

class InitialScreen extends React.Component {
    state = {
        posts: null,
        loaded: false,
        location: null,
        errorMessage: null,
        region: {
            latitude: 28.5476753,
            longitude: 77.1862817,
            latitudeDelta: 0.012,
            longitudeDelta: 0.0061,
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
                        posts: dat.weather[0].main,
                        img: dat.weather[0].icon,
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
        // await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        //     accuracy: Location.Accuracy.Balanced,
        //     pausesUpdatesAutomatically: false,
        //     distanceInterval: 0,
        //     timeInterval: 100,
        // });
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location});

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
            <View style={{ flex: 1, padding: 30, backgroundColor: 'white' }}>
                {/* <View style={styles.filterContainer}>
                    <Text>Show my location</Text>
                    <Switch
                        trackColor={{ true: '#' }}
                        thumbColor={Platform.OS === 'android' ? '#faaf04': ''}
                        value={props.state}
                        onValueChange={props.onChange}
                    />
                </View> */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 30 }}>
                        {this.state.posts}
                    </Text>
                    <Text style={styles.paragraph}>{JSON.stringify(this.state.location)}</Text>
                    <MapView
                        coordinate={this.state.region}
                        region={this.state.region}
                        style={styles.mapStyle}
                    //showsMyLocationButton={true}
                    // annotation={this.state.marker}
                    >
                        <MapView.Marker
                            coordinate={this.state.region}
                            // {latitude:global.variable[0].coords.latitude,longitude:global.variable[0].coords.longitude
                            title={'abcd'}
                            description={'1234'}
                            image={Images.Marker} />
                        </MapView>
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
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default InitialScreen;
