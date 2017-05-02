import React, {Component} from 'react';
import  {TouchableOpacity, Text} from 'react-native';


class AnswerButton extends Component {
    constructor() {
        super()
        this.borderChange = this.borderChange.bind(this) // borderChange becomes a new function that is bound to this instance of AnswerButton
        
        this.state = {
            toggle: false
        }
    }
 
  
  borderChange() {
    console.log('pressed')
    this.setState({ toggle: !this.state.toggle }) // This will flip the this.state.toggle
    // Here comes the error. 
    // borderChange() is passed to the TouchableOpacity Element as a prop. React's implementation will call it who knows where and how, The problem is that in JS 'this' is bound by certain rules. Generally 'this' refers to the object that came before the '.' in the function invocation. Example: coolObject.borderChange(). 'this' will be coolObject. What that means is that when your borderChange function is called 'this' is undefined, because thay call it nakedly, 'borderChange()'
    
    // You need to bind it so the 'this' always points to your component. Like this:
  }
  
  render(props) {
    return (
      <TouchableOpacity 
        style={[styles.unpressedStyle,  this.state.toggle && styles.pressedStyle]} // Good, this will overwrite unpressedStyle, if toggle is true
        onPress={this.borderChange} > 
          
          <Text style={styles.textStyle}>{this.props.answer_text}</Text>
      
      </TouchableOpacity>
    );
  };
}
          

const styles = {
  unpressedStyle: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: 'steelblue',
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressedStyle: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: 'yellow',
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'royalblue'
  }
};

export default AnswerButton;