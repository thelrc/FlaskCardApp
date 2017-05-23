import React, { Component } from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import AnswerButton from './AnswerButton';

export default class AnswerOptions extends Component {
  
  constructor() {
      super()
      
      this.answerOne = this.answerOne.bind(this) 
      this.answerTwo = this.answerTwo.bind(this)
      this.answerThree = this.answerThree.bind(this)
      this.answerFour = this.answerFour.bind(this)

      
      this.state = {
          a1: false,
          a2: false,
          a3: false,
          a4: false
      }
  }
  
  answerOne() {
   if(this.state.a1 == true)
    {
      this.setState({a1: false, a2: false, a3: false, a4: false});
      console.log('one');
    }
    else
    {
      this.setState({a1: true, a2: false, a3: false, a4: false});
      console.log('one');
    }
  }
  
  answerTwo() {
    if(this.state.a2 == true)
    {
      this.setState({a1: false, a2: false, a3: false, a4: false});
      console.log('two');
    }
    else
    {
      this.setState({a1: false, a2: true, a3: false, a4: false});
      console.log('two');
    }
  }
  
  answerThree() {
    if(this.state.a3 == true)
    {
      this.setState({a1: false, a2: false, a3: false, a4: false});
      console.log('three');
    }
    else
    {
      this.setState({a1: false, a2: false, a3: true, a4: false});
      console.log('three');
    }
  }
  
  answerFour() {
    if(this.state.a4 == true)
    {
      this.setState({a1: false, a2: false, a3: false, a4: false});
      console.log('four');
    }
    else
    {
      this.setState({a1: false, a2: false, a3: false, a4: true});
      console.log('four');
    }
  }
  
  render() {
    return (
      <View style={styles.columnStyle}>
        
        <View style={styles.rowStyle}>
          <AnswerButton answer_text='Option 1' answer={this.answerOne} borderState={this.state.a1} />
          <AnswerButton answer_text='Option 2' answer={this.answerTwo} borderState={this.state.a2} />
        </View>
        
        <View style={styles.rowStyle}>
          <AnswerButton answer_text='Option 3' answer={this.answerThree} borderState={this.state.a3} /> 
          <AnswerButton answer_text='Option 4' answer={this.answerFour} borderState={this.state.a4} />
        </View>
        
      </View>
    );
  };
}

const styles = {
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    paddingBottom: 10
  },
  columnStyle: {
    //backgroundColor: 'indigo',
    justifyContent: 'space-around',
    flex: 1
  }
};
