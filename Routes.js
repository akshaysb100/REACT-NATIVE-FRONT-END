import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native';  
import { createStackNavigator, createAppContainer } from 'react-navigation';  

import Login from './Login';
import Signup from './Signup';
import ShowIssues from './ShowIssues'

class Routes extends Component<{}> {
	   render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
                <Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.push('Profile')}  
                />  
            </View>  
        );  
    }  
}


const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen  
    },  
    {  
        initialRouteName: "Home"  
    }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  