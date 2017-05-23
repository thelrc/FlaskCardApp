import React from 'react';
import {View, Image } from 'react-native';

const CardPrompt = (props) => {
  return (
  <View style={styles.imageContainerStyle} >
      <Image source={{uri: props.src}} style={styles.imageStyle}
             resizeMode={'cover'} />
  </View>    
  );
};

const styles = {
  imageStyle: {
    height: 300,
    width: null,
    flex: 1,
    marginTop: 22,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#355095'
    
  },
  imageContainerStyle: {
    flex: 1,/*
    marginTop: 22,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#355095'*/
  }
}; 

export default CardPrompt;
