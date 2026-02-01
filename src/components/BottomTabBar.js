/**
 * FYNP Bottom Tab Bar
 * Reusable bottom navigation component
 */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {spacing, typography} from '../theme';

// Import Tab Icons
import HomeActive from '../assets/homepage/icons/home-active.svg';
import HomeInactive from '../assets/homepage/icons/home-inactive.svg';
import PortfolioActive from '../assets/homepage/icons/portfolio-active.svg';
import PortfolioInactive from '../assets/homepage/icons/portfolio-inactive.svg';
import AccountActive from '../assets/homepage/icons/account-active.svg';
import AccountInactive from '../assets/homepage/icons/account-inactive.svg';
import OffersActive from '../assets/homepage/icons/offers-active.svg';
import OffersInactive from '../assets/homepage/icons/offers-inactive.svg';

const BottomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Icon component based on route name
        const getIconComponent = () => {
          const iconSize = 24;
          switch (route.name) {
            case 'Home':
              return isFocused ?
                <HomeActive width={iconSize} height={iconSize} /> :
                <HomeInactive width={iconSize} height={iconSize} />;
            case 'Portfolio':
              return isFocused ?
                <PortfolioActive width={iconSize} height={iconSize} /> :
                <PortfolioInactive width={iconSize} height={iconSize} />;
            case 'Account':
              return isFocused ?
                <AccountActive width={iconSize} height={iconSize} /> :
                <AccountInactive width={iconSize} height={iconSize} />;
            case 'Offers':
              return isFocused ?
                <OffersActive width={iconSize} height={iconSize} /> :
                <OffersInactive width={iconSize} height={iconSize} />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            <View style={styles.iconContainer}>
              {getIconComponent()}
            </View>
            <Text
              style={[
                styles.label,
                isFocused && styles.labelActive,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(9, 9, 11, 0.95)',
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    paddingBottom: 16,
    paddingTop: 12,
    height: 80,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 11,
    color: '#8E8A98',
    fontWeight: '500',
  },

  labelActive: {
    color: '#FF914D',
    fontWeight: '500',
  },
});

export default BottomTabBar;
