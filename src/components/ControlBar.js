import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BarButton from './BarButton';

const ControlBar = (props) => {
  return (
    <View style={styles.barStyle}>
      
      
        <BarButton buttonText={'Main Menu'}
                   onPress={props.onPress} />
        <BarButton buttonText={'Last Card'} />
      
      
      
        <BarButton buttonText={'Submit Answer'} />
      
    
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
  }
}

export default ControlBar;
