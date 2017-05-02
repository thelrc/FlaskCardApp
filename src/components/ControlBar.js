import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ControlBar = () => {
  return (
    <View style={styles.barStyle}>
      <View style={styles.leftBarStyle}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Main Menu</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Last Card</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.rightBarStyle}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Submit Answer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  barStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'indigo',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    justifyContent: 'space-between'
  },
  leftBarStyle: {
    flexDirection: 'row',
    flex: 1
  },
  rightBarStyle: {
    alignItems: 'flex-end'
  },
  buttonStyle: {
    borderRadius: 15,
    borderWidth: 5,
    borderColor: 'steelblue',
    backgroundColor: 'steelblue',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
  }
}

export default ControlBar;
