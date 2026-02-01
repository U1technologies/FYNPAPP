/**
 * FYNP Credit Card Details Screen
 * Shows detailed information about a selected credit card
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const CreditCardDetailsScreen = ({route, navigation}) => {
  // Get card data from navigation params
  const {card} = route.params || {};

  // Default card data if none provided
  const cardData = card || {
    name: 'FYNP Millennia',
    bank: 'HDFC Bank',
    image: 'https://app.banani.co/image-fallback.png',
    joiningFee: {original: '₹999', discounted: '₹0'},
    annualFee: {original: '₹999', discounted: '₹0'},
    isLifetimeFree: true,
    benefits: [
      {
        icon: '%',
        title: '5% Cashback',
        description: 'On Amazon, Flipkart, Myntra & more. No capping on rewards.',
      },
      {
        icon: '✈',
        title: 'Airport Lounge Access',
        description: '8 complimentary domestic lounge visits per year across India.',
      },
      {
        icon: '⛽',
        title: 'Fuel Surcharge Waiver',
        description: '1% waiver on fuel transactions across all stations in India.',
      },
      {
        icon: '🛡',
        title: 'Zero Liability',
        description: 'You are not liable for any fraudulent transactions on lost card.',
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#09090b" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.navIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Card Details</Text>
        <TouchableOpacity style={styles.navBtn}>
          <Text style={styles.navIcon}>⤴</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* Hero Section */}
        <View style={styles.heroWrapper}>
          <View style={styles.cardVisual}>
            <Image
              source={{uri: cardData.image}}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>

          {cardData.isLifetimeFree && (
            <View style={styles.ltfBadge}>
              <Text style={styles.ltfIcon}>✓</Text>
              <Text style={styles.ltfText}>Lifetime Free Offer</Text>
            </View>
          )}

          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>{cardData.name}</Text>
            <Text style={styles.cardBank}>In partnership with {cardData.bank}</Text>
          </View>
        </View>

        {/* Fees Grid */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Joining Fee</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.strikeText}>{cardData.joiningFee.original}</Text>
              <Text style={styles.statValue}>{cardData.joiningFee.discounted}</Text>
            </View>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Annual Fee</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.strikeText}>{cardData.annualFee.original}</Text>
              <Text style={styles.statValue}>{cardData.annualFee.discounted}</Text>
            </View>
          </View>
        </View>

        {/* Benefits Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Key Benefits</Text>

          {cardData.benefits.map((benefit, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.fIcon}>
                <Text style={styles.fIconText}>{benefit.icon}</Text>
              </View>
              <View style={styles.fContent}>
                <Text style={styles.fTitle}>{benefit.title}</Text>
                <Text style={styles.fDescription}>{benefit.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{height: 100}} />
      </ScrollView>

      {/* Sticky Footer */}
      <View style={styles.stickyFooter}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerLabel}>Limited period offer</Text>
          <Text style={styles.footerVal}>Lifetime Free</Text>
        </View>
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyBtnText}>Apply Now</Text>
          <Text style={styles.applyBtnIcon}>→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090b',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'rgba(9, 9, 11, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },

  navBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 20,
    color: '#ffffff',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },

  // Content
  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 120,
  },

  // Hero Section
  heroWrapper: {
    alignItems: 'center',
    marginBottom: 32,
  },

  cardVisual: {
    width: '100%',
    aspectRatio: 1.58,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 10,
    marginBottom: 24,
  },

  cardImage: {
    width: '100%',
    height: '100%',
  },

  ltfBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },

  ltfIcon: {
    fontSize: 14,
    color: '#34d399',
  },

  ltfText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#34d399',
  },

  cardInfo: {
    alignItems: 'center',
  },

  cardName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },

  cardBank: {
    fontSize: 14,
    color: '#a1a1aa',
    textAlign: 'center',
  },

  // Stats Row
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },

  statBox: {
    flex: 1,
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },

  statLabel: {
    fontSize: 12,
    color: '#a1a1aa',
    marginBottom: 8,
  },

  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  strikeText: {
    fontSize: 14,
    color: '#a1a1aa',
    textDecorationLine: 'line-through',
  },

  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34d399',
  },

  // Features Section
  featuresSection: {
    marginBottom: 32,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 16,
  },

  featureItem: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },

  fIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fIconText: {
    fontSize: 20,
    color: '#8b5cf6',
  },

  fContent: {
    flex: 1,
  },

  fTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },

  fDescription: {
    fontSize: 13,
    color: '#a1a1aa',
    lineHeight: 19.5,
  },

  // Sticky Footer
  stickyFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(9, 9, 11, 0.95)',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 34,
    borderTopWidth: 1,
    borderTopColor: '#27272a',
  },

  footerInfo: {
    flex: 1,
  },

  footerLabel: {
    fontSize: 12,
    color: '#a1a1aa',
    marginBottom: 4,
  },

  footerVal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#34d399',
  },

  applyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },

  applyBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },

  applyBtnIcon: {
    fontSize: 16,
    color: '#000000',
  },
});

export default CreditCardDetailsScreen;
