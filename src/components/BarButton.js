import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

export default class BarButton extends Component {
  
  constructor(props) {
    super(props);
  }

render(props) {
    return (
      <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={() => this.props.pressed()} >
            
      <Text style={styles.textStyle}>{this.props.buttonText}</Text>
      
      </TouchableOpacity>
    );
  }
}

const styles = {
  textStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    //paddingBottom: 4,
    //paddingLeft: 4,
    //paddingRight: 4,
    //paddingTop: 4,
    marginLeft: 2,
    marginRight: 2
  },
  buttonStyle: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'steelblue',
    margin: 5,
    //marginLeft: 5,
    //marginRight: 5,
    //marginTop: 5,
    //marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4
  }
};

