/**
 * FYNP Tab Navigator
 * Bottom tab navigation for main app screens
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeStackNavigator from './HomeStackNavigator';
import PortfolioScreen from '../screens/Portfolio/PortfolioScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import OffersScreen from '../screens/Offers/OffersScreen';
import BottomTabBar from '../components/BottomTabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => {
        const routeName = getFocusedRouteNameFromRoute(props.state.routes[props.state.index]);

        // Hide tab bar on these screens
        const hideTabBarScreens = ['CreditCardDetails', 'CreditCardApplication', 'ApplicationStatus', 'AddressDetails', 'KYCVerification', 'AadhaarInput', 'AadhaarOTP', 'KYCSuccess', 'CardTracking'];
        if (hideTabBarScreens.includes(routeName)) {
          return null;
        }

        return <BottomTabBar {...props} />;
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'Portfolio',
        }}
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarLabel: 'Offers',
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
