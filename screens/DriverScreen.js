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
const LATITUDE_DELTA = 0.006
const LONGITUDE_DELTA = 0.003

class MapScreen extends Component {
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
        this.interval = setInterval(() => {
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
    },1000)}

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    renderScreen = () => {
        console.log(this.state.initialPosition)
        return (
            <View style={styles.container}>
                <MapView
                    coordinate={this.state.initialPosition}
                    region={this.state.initialPosition}
                    style={styles.mapStyle}
                //showsMyLocationButton={true}
                >
                    <MapView.Marker
                        coordinate={this.state.initialPosition}
                        // {latitude:global.variable[0].coords.latitude,longitude:global.variable[0].coords.longitude
                        title={'abcd'}
                        description={'1234'}
                        image={Images.Marker}
                        style={{
                            transform: [{
                                rotate: '113deg'
                            }]
                        }} />
                </MapView>
            </View>
        );
    }
    render() {
        return (
            this.renderScreen()
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mapStyle: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
});

export default MapScreen;
