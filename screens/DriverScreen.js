import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';
import Images from "../constants/Images";

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class DriverScreen extends Component {
    constructor() {
        super()
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }

            this.setState({ initialPosition: initialRegion })
        },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
    }


    renderScreen = () => {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={this.state.initialPosition}>
                    <MapView.Marker
                        coordinate={this.state.initialPosition}
                        // {latitude:global.variable[0].coords.latitude,longitude:global.variable[0].coords.longitude
                        title={'abcd'}
                        description={'1234'}
                        // image={Images.Marker}
                        // width={10}
                        // height={10}
                    />
                </MapView>
            </View>
        );
    }
    render() {
        console.log(this.state.initialPosition)
        return (
            this.renderScreen()
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'relative',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
    },
});

export default DriverScreen;
