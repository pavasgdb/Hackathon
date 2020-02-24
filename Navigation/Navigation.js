import React from "react";
import { Easing, Animated, View, Text } from "react-native";
import {

    createAppContainer
} from "react-navigation";
import {
    createStackNavigator,
    TransitionPresets
} from "react-navigation-stack";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import InitialScreen from "../screens/InitialScreen";
import MapScreen from "../screens/MapScreen2";
import Schedule from "../screens/Schedule";
import LogInScreen from '../screens/LogInScreen';
import DriverScreen from "../screens/DriverScreen";
import DriverHomeScreen from "../screens/driverHomeScreen"
import LogInScreen1 from "../screens/LogInScreen1";
import TimeTableScreen from "../screens/TimeTableScreen"
// header for screens
//import Header from "../components/Header";

// const transitionConfig = (transitionProps, prevTransitionProps) => ({
//   transitionSpec: {
//     duration: 400,
//     easing: Easing.out(Easing.poly(4)),
//     timing: Animated.timing
//   },
//   screenInterpolator: sceneProps => {
//     const { layout, position, scene } = sceneProps;
//     const thisSceneIndex = scene.index;
//     const width = layout.initWidth;

//     const scale = position.interpolate({
//       inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
//       outputRange: [4, 1, 1]
//     });
//     const opacity = position.interpolate({
//       inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
//       outputRange: [0, 1, 1]
//     });
//     const translateX = position.interpolate({
//       inputRange: [thisSceneIndex - 1, thisSceneIndex],
//       outputRange: [width, 0]
//     });

//     const scaleWithOpacity = { opacity };
//     const screenName = "Search";

//     if (
//       screenName === transitionProps.scene.route.routeName ||
//       (prevTransitionProps &&
//         screenName === prevTransitionProps.scene.route.routeName)
//     ) {
//       return scaleWithOpacity;
//     }
//     return { transform: [{ translateX }] };
//   }
// });
const MapNavigator = createStackNavigator({
    HeaderProject: MapScreen
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        ...TransitionPresets.SlideFromRightIOS,
        header: () =>
            <View style={{ flexDirection: 'row', width: '100%', height: 100, alignItems: 'center', backgroundColor: '#faaf04', justifyContent: 'center', paddingTop: 28 }}>
                <View style={{alignItems:'center',width:'75%'}}>
                    <Text style={{color:'white',fontSize:30,}}>
                        Welcome User!!!
                    </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 20 }}>
                    <MaterialCommunityIcons
                        name="logout"
                        size={30}
                        color={'white'}
                        onPress={() => {
                            navigation.pop()
                            navigation.pop()
                            navigation.pop()
                        }}
                    />
                </View>
            </View>,
        headerStyle: {
            backgroundColor: '#faaf04',
            width: '100%'
        }
    })
})
const ScheduleNavigator = createStackNavigator({
    HeaderProject: Schedule,
    TimeTable: TimeTableScreen
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        ...TransitionPresets.SlideFromRightIOS,
        header: () =>
            <View style={{ flexDirection: 'row', width: '100%', height: 100, alignItems: 'center', backgroundColor: '#faaf04', justifyContent: 'center', paddingTop: 28 }}>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 20 }}>
                    <MaterialCommunityIcons
                        name="logout"
                        size={30}
                        color={'white'}
                        onPress={() => {
                            navigation.pop()
                            navigation.pop()
                            navigation.pop()
                        }}
                    />
                </View>
            </View>,
        headerStyle: {
            backgroundColor: '#faaf04',
            width: '100%'
        }
    })
})

const TabScreens = createMaterialBottomTabNavigator(
    {
        Location: {
            screen: MapNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <MaterialIcons
                            name="event-available"
                            size={27}
                            color={tintColor}
                        />
                    );
                }
            }
        }, Schedule: {
            screen: ScheduleNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <Ionicons
                            name="ios-school"
                            size={28}
                            color={tintColor}
                        />
                    );
                }
            }
        },

    },
    {
        initialRouteName: 'Location',
        // activeTintColor: 'red',
        // inactiveTintColor:'blue',
        activeColor: '#faaf04',
        inactiveColor: 'grey',
        shifting: true,
        barStyle: {
            backgroundColor: 'white', height: 80, justifyContent: 'center'
        },
        defaultNavigationOptions: ({ navigation }) => ({
            ...TransitionPresets.SlideFromRightIOS,

        })
    }
);
const AppNavigator = createStackNavigator(
    {
        Initial: InitialScreen,
        Home: HomeScreen,
        LogInDriver: LogInScreen,
        LogInStu:LogInScreen1,
        Main: {
            screen: TabScreens,
        },
        Driver:DriverHomeScreen,
        Driver1:DriverScreen
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerShown: false,
        },
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS,
        },
    }
);


// const ElementsStack = createStackNavigator({
//   Elements: {
//     screen: Elements,
//     navigationOptions: ({ navigation }) => ({
//       header: <Header title="Elements" navigation={navigation} />
//     })
//   }
// },{
//   cardStyle: {
//     backgroundColor: "#F8F9FE"
//   },
//   transitionConfig
// });

// const ArticlesStack = createStackNavigator({
//   Articles: {
//     screen: Articles,
//     navigationOptions: ({ navigation }) => ({
//       header: <Header title="Articles" navigation={navigation} />
//     })
//   }
// },{
//   cardStyle: {
//     backgroundColor: "#F8F9FE"
//   },
//   transitionConfig
// });

// const ProfileStack = createStackNavigator(
//   {
//     Profile: {
//       screen: Profile,
//       navigationOptions: ({ navigation }) => ({
//         header: (
//           <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
//         ),
//         headerTransparent: true
//       })
//     }
//   },
//   {
//     cardStyle: { backgroundColor: "#FFFFFF" },
//     transitionConfig
//   }
// );

// const HomeStack = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: ({ navigation }) => ({
//         header: <Header search options title="Home" navigation={navigation} />
//       })
//     },
//     Pro: {
//       screen: Pro,
//       navigationOptions: ({ navigation }) => ({
//         header: (
//           <Header left={<View/>} white transparent title="" navigation={navigation} />
//         ),
//         headerTransparent: true
//       })
//     }
//   },
//   {
//     cardStyle: {
//       backgroundColor: "#F8F9FE"
//     },
//     transitionConfig
//   }
// );
// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

