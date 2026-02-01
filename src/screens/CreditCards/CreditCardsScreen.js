/**
 * FYNP Credit Cards Screen
 * Converted from Figma HTML/CSS export
 */

import React, {useState} from 'react';
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

const CreditCardsScreen = ({navigation}) => {
  const [selectedFilter, setSelectedFilter] = useState('All Cards');

  const filters = ['All Cards', 'Lifetime Free', 'Travel', 'Shopping', 'Fuel'];

  const creditCards = [
    {
      id: 1,
      name: 'Magnus Metal',
      bank: 'Axis Bank',
      tag: 'Premium',
      tagColor: 'rgba(139, 92, 246, 0.15)',
      tagTextColor: '#8b5cf6',
      image: 'https://app.banani.co/image-fallback.png',
      features: [
        {text: '5X Rewards', highlight: true, detail: 'on Travel'},
        {text: 'Unlimited Lounge', highlight: false},
        {text: 'No Forex Markup', highlight: false},
        {text: 'Metal Form Factor', highlight: false},
      ],
      annualFee: '₹10,000 + GST',
      feeCondition: null,
      // Details page data
      joiningFee: {original: '₹10,000', discounted: '₹5,000'},
      annualFeeDetails: {original: '₹10,000', discounted: '₹10,000'},
      isLifetimeFree: false,
      benefits: [
        {
          icon: '⭐',
          title: '5X Rewards on Travel',
          description: 'Earn 5X Edge Reward Points on travel bookings via Axis Travel Edge.',
        },
        {
          icon: '✈',
          title: 'Unlimited Lounge Access',
          description: 'Complimentary domestic and international lounge access for you and guests.',
        },
        {
          icon: '💱',
          title: 'No Forex Markup',
          description: 'Zero markup on foreign currency transactions across all international spends.',
        },
        {
          icon: '🎯',
          title: 'Metal Form Factor',
          description: 'Premium metal card with exclusive benefits and priority customer service.',
        },
      ],
    },
    {
      id: 2,
      name: 'FYNP Millennia',
      bank: 'HDFC Bank',
      tag: 'Cashback',
      tagColor: 'rgba(34, 197, 94, 0.15)',
      tagTextColor: '#22c55e',
      image: 'https://app.banani.co/image-fallback.png',
      features: [
        {text: '5% Cashback', highlight: true, detail: 'on Amazon'},
        {text: '1% Fuel Surcharge Waiver', highlight: false},
        {text: '8 Lounge Access/Yr', highlight: false},
        {text: 'Welcome Benefit ₹1000', highlight: false},
      ],
      annualFee: 'Free',
      feeCondition: '(Cond.)',
      // Details page data
      joiningFee: {original: '₹999', discounted: '₹0'},
      annualFeeDetails: {original: '₹999', discounted: '₹0'},
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
    },
    {
      id: 3,
      name: 'SimplyCLICK',
      bank: 'SBI Card',
      tag: 'Online',
      tagColor: 'rgba(249, 115, 22, 0.15)',
      tagTextColor: '#f97316',
      image: 'https://app.banani.co/image-fallback.png',
      features: [
        {text: '10X Points', highlight: true, detail: 'Online'},
        {text: 'BookMyShow Offers', highlight: false},
      ],
      annualFee: '₹499 + GST',
      feeCondition: null,
      // Details page data
      joiningFee: {original: '₹499', discounted: '₹0'},
      annualFeeDetails: {original: '₹999', discounted: '₹499'},
      isLifetimeFree: false,
      benefits: [
        {
          icon: '🎯',
          title: '10X Reward Points',
          description: 'Earn 10X reward points on online spends across all merchants.',
        },
        {
          icon: '🎬',
          title: 'BookMyShow Offers',
          description: 'Exclusive discounts and cashback on BookMyShow movie ticket bookings.',
        },
        {
          icon: '⛽',
          title: 'Fuel Surcharge Waiver',
          description: '1% fuel surcharge waiver on transactions between ₹500 to ₹3,000.',
        },
        {
          icon: '🎁',
          title: 'Welcome Benefits',
          description: 'Get Amazon vouchers worth ₹500 on card activation and first transaction.',
        },
      ],
    },
  ];

  const renderCreditCard = (card) => (
    <TouchableOpacity
      key={card.id}
      style={styles.ccItem}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('CreditCardDetails', {card})}>
      {/* Card Image Preview */}
      <View style={styles.ccPreview}>
        <Image
          source={{uri: card.image}}
          style={styles.ccImage}
          resizeMode="cover"
        />
      </View>

      {/* Card Content */}
      <View style={styles.ccContent}>
        {/* Header */}
        <View style={styles.ccHeader}>
          <View>
            <Text style={styles.ccName}>{card.name}</Text>
            <Text style={styles.ccBank}>{card.bank}</Text>
          </View>
          <View
            style={[
              styles.ccTag,
              {backgroundColor: card.tagColor},
            ]}>
            <Text style={[styles.ccTagText, {color: card.tagTextColor}]}>
              {card.tag}
            </Text>
          </View>
        </View>

        {/* Features Grid */}
        <View style={styles.ccFeatures}>
          {card.features.map((feature, index) => (
            <View key={index} style={styles.featItem}>
              <Text style={styles.featIcon}>✓</Text>
              <Text style={styles.featText}>
                {feature.highlight ? (
                  <>
                    <Text style={styles.featHl}>{feature.text}</Text>
                    {feature.detail && ` ${feature.detail}`}
                  </>
                ) : (
                  feature.text
                )}
              </Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.ccFooter}>
          <View style={styles.ccFee}>
            <Text style={styles.feeLabel}>Annual Fee</Text>
            <Text style={styles.feeVal}>
              {card.annualFee}{' '}
              {card.feeCondition && (
                <Text style={styles.feeCondition}>{card.feeCondition}</Text>
              )}
            </Text>
          </View>
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyBtnText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Credit Cards</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Eligibility Banner */}
        <TouchableOpacity style={styles.eligibilityBanner} activeOpacity={0.9}>
          <View style={styles.ebText}>
            <Text style={styles.ebTitle}>Excellent Approval Odds</Text>
            <Text style={styles.ebSubtitle}>
              Based on your credit score of 785
            </Text>
          </View>
          <View style={styles.scoreBadge}>
            <Text style={styles.scoreText}>785</Text>
          </View>
        </TouchableOpacity>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterPill,
                selectedFilter === filter && styles.filterPillActive,
              ]}
              onPress={() => setSelectedFilter(filter)}>
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.filterTextActive,
                ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Cards List */}
        <View style={styles.cardList}>
          {creditCards.map((card) => renderCreditCard(card))}
        </View>

        <View style={{height: 20}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#151516',
    borderWidth: 1,
    borderColor: '#27272a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    fontSize: 20,
    color: '#ffffff',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },

  // Eligibility Banner
  eligibilityBanner: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#1e1b4b',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },

  ebText: {
    flex: 1,
  },

  ebTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },

  ebSubtitle: {
    fontSize: 12,
    color: '#c7d2fe',
  },

  scoreBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },

  scoreText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#818cf8',
  },

  // Filters
  filters: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
  },

  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#151516',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 20,
  },

  filterPillActive: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },

  filterText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#a1a1aa',
  },

  filterTextActive: {
    color: '#000000',
  },

  // Cards List
  cardList: {
    paddingHorizontal: 20,
    gap: 16,
  },

  ccItem: {
    backgroundColor: '#151516',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },

  ccPreview: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ccImage: {
    width: 200,
    height: 120,
    borderRadius: 12,
    transform: [{rotate: '-2deg'}],
  },

  ccContent: {
    padding: 20,
    paddingTop: 16,
  },

  ccHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  ccName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },

  ccBank: {
    fontSize: 12,
    color: '#a1a1aa',
  },

  ccTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },

  ccTagText: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  ccFeatures: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
  },

  featItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },

  featIcon: {
    color: '#22c55e',
    fontSize: 14,
    marginTop: 1,
  },

  featText: {
    fontSize: 12,
    color: '#a1a1aa',
    lineHeight: 16,
    flex: 1,
  },

  featHl: {
    color: '#ffffff',
    fontWeight: '500',
  },

  ccFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ccFee: {
    flex: 1,
  },

  feeLabel: {
    fontSize: 11,
    color: '#a1a1aa',
    marginBottom: 2,
  },

  feeVal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },

  feeCondition: {
    fontWeight: '400',
    color: '#a1a1aa',
    fontSize: 11,
  },

  applyBtn: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
  },

  applyBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
  },
});

export default CreditCardsScreen;
