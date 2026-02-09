
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { I18nManager } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
