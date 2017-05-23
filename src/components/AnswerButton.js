import React, { Component } from 'react';
import  { TouchableOpacity, Text } from 'react-native';


class AnswerButton extends Component {
/*    constructor() {
        super()
        this.borderChange = this.borderChange.bind(this) 
        
        this.state = {
            toggle: false
        }
    }
 
  
  borderChange() {
    console.log('pressed')
    this.setState({ toggle: !this.state.toggle })
  }
*/
  
  render(props) {
    return (
      <TouchableOpacity 
        style={[styles.unpressedStyle, this.props.borderState && styles.pressedStyle]} 
        //This will overwrite unpressedStyle, if toggle is true
        onPress={this.props.answer} 
      > 
          
          <Text style={styles.textStyle}>{this.props.answer_text}</Text>
      
      </TouchableOpacity>
    );
  }
}
          

const styles = {
  unpressedStyle: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#355095',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressedStyle: {
    //flex: 1,
    //borderRadius: 15,
    //borderWidth: 5,
    borderColor: 'gold',
    //backgroundColor: 'black',
    //marginLeft: 5,
    //marginRight: 5,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  }
};

export default AnswerButton;
