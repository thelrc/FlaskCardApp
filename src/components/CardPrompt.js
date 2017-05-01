import React from 'react';
import {View, Image } from 'react-native';

const CardPrompt = (props) => {
  return (
  <View style={styles.imageContainerStyle} >
      <Image source={{uri: props.src}} style={styles.imageStyle} />
  </View>    
  );
};

const styles = {
  imageStyle: {
    height: 300,
    width: null,
    flex: 1,
    borderRadius: 20
  },
  imageContainerStyle: {
    flex: 1
  }
}; 

export default CardPrompt;
