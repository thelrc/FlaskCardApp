import React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import AnswerButton from './AnswerButton';

const AnswerOptions = () => {
  
  return (
    <View style={styles.columnStyle}>
      
      <View style={styles.rowStyle}>
        <AnswerButton answer_text='Option 1' />
        <AnswerButton answer_text='Option 2' />
      </View>
      
      <View style={styles.rowStyle}>
        <AnswerButton answer_text='Option 3' /> 
        <AnswerButton answer_text='Option 4' />
      </View>
      
    </View>
  );
};

const styles = {
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    paddingBottom: 10
  },
  columnStyle: {
    backgroundColor: 'indigo',
    justifyContent: 'space-around',
    flex: 1
  }
};
export default AnswerOptions;
