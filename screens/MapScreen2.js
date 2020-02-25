import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text
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
            weather: null,
            img: '',
            temp: '',
            wind: '',
            loaded: false,
            location: null,
            errorMessage: null,
            initialPosition: {
                latitude: 0,
                longitude: 0,

            },
        }
    }
    // componentDidMount() {
    //     this.interval = setInterval(() => this.tick(), 2000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }
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
        this.interval = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                var lat = parseFloat(position.coords.latitude)
                var long = parseFloat(position.coords.longitude)

                var initialRegion = {
                    latitude: lat,
                    longitude: long,
                }

                this.setState({ initialPosition: initialRegion })
            },
                (error) => alert(JSON.stringify(error)),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    renderScreen = () => {
        console.log(this.state.initialPosition)
        return (
            <View style={styles.container}>
                <MapView
                    coordinate={this.state.initialPosition}
                    region={{
                        ...this.state.initialPosition, latitudeDelta: 0.006,
                        longitudeDelta: 0.003,
                    }}
                    style={styles.mapStyle}
                //showsMyLocationButton={true}
                >
                    <MapView.Marker
                        coordinate={this.state.initialPosition}
                        // {latitude:global.variable[0].coords.latitude,longitude:global.variable[0].coords.longitude
                        title={'abcd'}
                        description={'1234'}
                        image={Images.Marker}
                        flat={false}
                        style={{
                            transform: [{
                                rotate: '113deg'
                            }]
                        }} />
                </MapView>
                <View style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    backgroundColor: '#D3D3D3',
                    opacity: 0.8,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: 20,
                    width: 100,
                    height: 100,
                    borderBottomLeftRadius: 5
                }}>
                    {/* <View>
                        <Text style={{ fontSize: 15}}>
                            Weather Condition
                        </Text>
                    </View> */}
                    <View>
                        <Image source={{ uri: 'http://openweathermap.org/img/w/' + this.state.img + '.png' }} style={{ width: 50, height: 50, resizeMode: 'stretch' }} />
                    </View>
                    <Text style={{ fontSize: 15, }}>
                        {this.state.temp}
                    </Text>
                </View>
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
