import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../screens/NewsScreen';
import MainNavigator from './navigation/MainNavigator';
import FullNewsScreen from '../screens/FullNewsScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="FullNews" component={FullNewsScreen} /> 
    </Stack.Navigator>
  );
};
export default MainNavigator;
