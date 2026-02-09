
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChannelsScreen from '../screens/ChannelsScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor:'#18181b',
          borderTopWidth:0
        },
        tabBarActiveTintColor:'#fff',
      }}
    >
      <Tab.Screen name="الدردشة" component={ChannelsScreen} />
      <Tab.Screen name="المنشورات" component={FeedScreen} />
      <Tab.Screen name="حسابي" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
