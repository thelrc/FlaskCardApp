import Expo from 'expo';
import React, {Component} from 'react';
import {View} from 'react-native';
import BaseCard from './src/components/BaseCard';
import MainMenu from './src/components/MainMenu';

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
    <BaseCard onPress={this.navToggle} />
        </View>
      );
     }    
    else 
    {
      return (
        <View style={{flex: 1}}>
          <MainMenu onPress={this.navToggle} />
        </View>
      );  
    }
  }
}



Expo.registerRootComponent(flashCard);
