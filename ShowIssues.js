import React from 'react';  
import { View, Text, Button } from 'react-native';  
import { createStackNavigator, createAppContainer } from 'react-navigation';  

class ShowIssues extends React.Component {  
      render() {  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text>Profile Screen</Text>  
                <Button  
                    title="Go to Profile... again"  
                    onPress={() => this.props.navigation.push('Profile')}  
                />  
                <Button  
                    title="Go to Home"  
                    onPress={() => this.props.navigation.navigate('Home')}  
                 />  
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
            </View>  
    );  
    }  
}  