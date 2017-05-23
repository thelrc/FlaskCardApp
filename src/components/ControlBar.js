import React from 'react';
import { View, Text } from 'react-native';
import BarButton from './BarButton';

const ControlBar = (props) => {
  return (
    <View style={styles.barStyle}>
      <BarButton 
        buttonText={"Main Menu"}
        pressed={props.navToggle} />
        
    
      <View style={styles.textContainerStyle}>
        <Text style={[styles.neutralText, props.correct && styles.correctText, 
                      props.wrong && styles.wrongText]} >
          {props.checker}
        </Text>
      </View>
        
      <BarButton      
        buttonText={'Next Card'}
        pressed={props.submit} />

    </View>
  );
};

const styles = {
  barStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    //backgroundColor: 'indigo',
    flexDirection: 'row',
    //justifyContent: 'flex-start',
    justifyContent: 'space-between'
  },
  /*leftBarStyle: {
    flexDirection: 'row',
    flex: 1
  },
  rightBarStyle: {
    alignItems: 'flex-end'
  },*/
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'flex-start'
  },
  neutralText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  correctText: {
    color: '#0F0'
  },
  wrongText: {
    color: 'red'
  }
};

export default ControlBar;
