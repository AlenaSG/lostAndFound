import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
import { View, Platform } from 'react-native';
import AnimalInfo from './AnimalInfoComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        AnimalInfo: { screen: AnimalInfo }
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#345667'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }        
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#345667'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }        
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#bbd2dd'
    }
);

class Main extends Component {
    

    render(){
        return(
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <MainNavigator /> 
            </View>
        );
    }
}

export default Main;