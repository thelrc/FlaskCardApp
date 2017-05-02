import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class BarButton extends Component {
  
  render(props) {
    return (
      <TouchableOpacity style={styles.buttonStyle}>
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
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
  },
  buttonStyle: {
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#355095',
    backgroundColor: '#355095',
    margin: 5,
    //marginLeft: 5,
    //marginRight: 5,
    //marginTop: 5,
    //marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

