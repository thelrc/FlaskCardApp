import Expo from 'expo';
import React from 'react';
import {View} from 'react-native';
import BaseCard from './src/components/BaseCard';
import CardPrompt from './src/components/CardPrompt';

const flashCard = () => {
  return (
    <View style={{flex: 1}}>
      <BaseCard />
    </View>
  );
};

Expo.registerRootComponent(flashCard);
