
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabsNavigator';
import ServersDrawer from '../screens/ServersDrawer';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={() => <ServersDrawer />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#09090b',
          width: 80
        }
      }}
    >
      <Drawer.Screen name="Main" component={TabsNavigator} />
    </Drawer.Navigator>
  );
}
