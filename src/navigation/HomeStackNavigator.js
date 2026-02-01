/**
 * FYNP Home Stack Navigator
 * Stack navigation for Home tab screens
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import CreditCardsScreen from '../screens/CreditCards/CreditCardsScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="CreditCards" component={CreditCardsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
