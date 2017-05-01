import React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';

const AnswerOptions = () => {
  return (
    <View style={styles.columnStyle}>
      
      <View style={styles.rowStyle}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Option 1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Option 2</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.rowStyle}>
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Option 3</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Option 4</Text>
          </TouchableOpacity>
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
    backgroundColor: 'red',
    justifyContent: 'space-around',
    flex: 1
  },
  buttonStyle: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: 'blue',
    backgroundColor: 'pink',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black'
  }
};
export default AnswerOptions;