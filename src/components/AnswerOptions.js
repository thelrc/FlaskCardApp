import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AnswerButton from './AnswerButton';

export default class AnswerOptions extends Component {
  
  constructor(props) {

      super(props);
  }
  
  render() {
    
    return (
      <View style={styles.columnStyle}>
        
        <View style={styles.rowStyle}>
        <AnswerButton answer_text={this.props.deck[0].answer1} answer={this.props.answerOne} borderState={this.props.a1} />
        <AnswerButton answer_text={this.props.deck[0].answer2} answer={this.props.answerTwo} borderState={this.props.a2} />
        </View>
        
        <View style={styles.rowStyle}>
        <AnswerButton answer_text={this.props.deck[0].answer3} answer={this.props.answerThree} borderState={this.props.a3} /> 
        <AnswerButton answer_text={this.props.deck[0].answer4} answer={this.props.answerFour} borderState={this.props.a4} />
        </View>
        
      </View>
    );
  }
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
