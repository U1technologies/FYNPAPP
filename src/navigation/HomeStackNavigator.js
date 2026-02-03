/**
 * FYNP Home Stack Navigator
 * Stack navigation for Home tab screens
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import CreditCardsScreen from '../screens/CreditCards/CreditCardsScreen';
import CreditCardDetailsScreen from '../screens/CreditCards/CreditCardDetailsScreen';
import CreditCardApplicationScreen from '../screens/CreditCards/CreditCardApplicationScreen';
import ApplicationStatusScreen from '../screens/CreditCards/ApplicationStatusScreen';
import AddressDetailsScreen from '../screens/CreditCards/AddressDetailsScreen';
import KYCVerificationScreen from '../screens/CreditCards/KYCVerificationScreen';
import AadhaarInputScreen from '../screens/CreditCards/AadhaarInputScreen';
import AadhaarOTPScreen from '../screens/CreditCards/AadhaarOTPScreen';
import KYCSuccessScreen from '../screens/CreditCards/KYCSuccessScreen';
import CardTrackingScreen from '../screens/CreditCards/CardTrackingScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="CreditCards" component={CreditCardsScreen} />
      <Stack.Screen name="CreditCardDetails" component={CreditCardDetailsScreen} />
      <Stack.Screen name="CreditCardApplication" component={CreditCardApplicationScreen} />
      <Stack.Screen name="ApplicationStatus" component={ApplicationStatusScreen} />
      <Stack.Screen name="AddressDetails" component={AddressDetailsScreen} />
      <Stack.Screen name="KYCVerification" component={KYCVerificationScreen} />
      <Stack.Screen name="AadhaarInput" component={AadhaarInputScreen} />
      <Stack.Screen name="AadhaarOTP" component={AadhaarOTPScreen} />
      <Stack.Screen name="KYCSuccess" component={KYCSuccessScreen} />
      <Stack.Screen name="CardTracking" component={CardTrackingScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
