import Expo from 'expo';
import React, { Component } from 'react';
import { View } from 'react-native';
//import { StackNavigator } from 'react-navigation';
import MainMenu from './src/components/MainMenu';
import BaseCard from './src/components/BaseCard';

class flashCard extends Component {
  constructor(props) {
        super(props)
        this.navToggle = this.navToggle.bind(this)
        
        this.state = {
            start: false
        };
  }
  
  navToggle = () => {
    this.setState({start: !this.state.start})
    console.log(this.state)
  }
  
  render() {  
    if (this.state.start) 
    { return (
        <View style={{flex: 1}}>
          <BaseCard navToggle={this.navToggle} />
        </View>
      );
     }    
    else 
    {
      return (
        <View style={{flex: 1}}>
          <MainMenu navToggle={this.navToggle} />
        </View>
      );  
    }
  }
}


Expo.registerRootComponent(flashCard);

//AppRegistry.registerComponent('FlashCards', () => FlashCards);

/*import React from 'react';
import { AppRegistry, View, } from 'react-native';
import MainMenu from './src/components/MainMenu';
import SolveCards from './src/components/SolveCards';
import HomeScreen from './src/components/HomeScreen';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <HomeScreen />
  </View>
);

//Render it to the device
AppRegistry.registerComponent('FlashCards', () => App);
*/


