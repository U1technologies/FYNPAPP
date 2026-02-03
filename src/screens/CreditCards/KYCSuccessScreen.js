/**
 * FYNP KYC Success Screen
 * Shows successful KYC completion and card delivery information
 */

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const KYCSuccessScreen = ({route, navigation}) => {
  const {card, fullName} = route.params || {};

  const handleGoHome = () => {
    // Navigate back to Dashboard (root of Home stack)
    navigation.navigate('Dashboard');
  };

  const handleTrackDelivery = () => {
    navigation.navigate('CardTracking', {card, fullName});
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#09090b" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>KYC Completed</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* Success Header */}
        <View style={styles.successHeader}>
          <View style={styles.successIconWrapper}>
            <Text style={styles.successIcon}>✓</Text>
          </View>
          <View style={styles.pillBadge}>
            <Text style={styles.pillBadgeText}>KYC verified successfully</Text>
          </View>
          <Text style={styles.successTitle}>You're all set 🎉</Text>
          <Text style={styles.successSubtitle}>
            Your identity is verified. Your{' '}
            <Text style={styles.highlightText}>FYNP Credit Card</Text> will be
            packed and shipped to your address next.
          </Text>
        </View>

        {/* Card Section */}
        <View style={styles.cardSection}>
          {/* Delivery Address */}
          <View style={styles.infoCard}>
            <View style={styles.infoCardHeader}>
              <View style={styles.infoCardHeaderLeft}>
                <Text style={styles.infoTitle}>Delivery address</Text>
                <Text style={styles.infoSubtitle}>Your card will be sent here</Text>
              </View>
              <View style={styles.statusChip}>
                <Text style={styles.statusChipText}>Arriving in 5–7 days</Text>
              </View>
            </View>
            <Text style={styles.addressLines}>
              Flat 302, Sunrise Heights{'\n'}
              HSR Layout, Bengaluru – 560102{'\n'}
              Karnataka, India
            </Text>
          </View>

          {/* What Happens Next */}
          <View style={styles.infoCard}>
            <View style={styles.infoCardHeader}>
              <View style={styles.infoCardHeaderLeft}>
                <Text style={styles.infoTitle}>What happens next?</Text>
                <Text style={styles.infoSubtitle}>
                  FYNP keeps you updated at every step
                </Text>
              </View>
            </View>
            <View style={styles.timelineList}>
              <View style={styles.timelineItem}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  Card is{' '}
                  <Text style={styles.highlightText}>printed & packed</Text> by
                  the bank partner.
                </Text>
              </View>
              <View style={styles.timelineItem}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  Courier partner picks up your card for{' '}
                  <Text style={styles.highlightText}>secure delivery</Text>.
                </Text>
              </View>
              <View style={styles.timelineItem}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  You receive SMS & app alerts to{' '}
                  <Text style={styles.highlightText}>track real-time status</Text>.
                </Text>
              </View>
            </View>
          </View>

          {/* Card Summary */}
          <View style={styles.cardSummary}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>💳</Text>
            </View>
            <View style={styles.cardDetails}>
              <Text style={styles.cardLabel}>FYNP Credit Card</Text>
              <Text style={styles.cardNumber}>•••• 8291</Text>
              <Text style={styles.cardStatus}>
                Status:{' '}
                <Text style={styles.highlightText}>
                  KYC done · Preparing for dispatch
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={{height: 120}} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryCta} onPress={handleGoHome}>
          <Text style={styles.primaryCtaText}>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryCta} onPress={handleTrackDelivery}>
          <Text style={styles.secondaryCtaText}>Track card delivery</Text>
        </TouchableOpacity>
        <View style={styles.trustText}>
          <Text style={styles.trustIcon}>🔒</Text>
          <Text style={styles.trustTextContent}>
            100% security • iOS 2007 verified ad fintech
          </Text>
        </View>
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
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'rgba(9, 9, 11, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#27272a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
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
    padding: 24,
    paddingBottom: 140,
  },

  // Success Header
  successHeader: {
    marginBottom: 24,
  },

  successIconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(22, 163, 74, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  successIcon: {
    fontSize: 32,
    color: '#22c55e',
  },

  pillBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    marginBottom: 12,
  },

  pillBadgeText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#22c55e',
  },

  successTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },

  successSubtitle: {
    fontSize: 15,
    color: '#a1a1aa',
    lineHeight: 22.5,
  },

  highlightText: {
    color: '#fafafa',
    fontWeight: '500',
  },

  // Card Section
  cardSection: {
    gap: 16,
  },

  infoCard: {
    backgroundColor: '#18181b',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#27272a',
    gap: 12,
  },

  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },

  infoCardHeaderLeft: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },

  infoSubtitle: {
    fontSize: 13,
    color: '#a1a1aa',
  },

  statusChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
  },

  statusChipText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#60a5fa',
  },

  addressLines: {
    fontSize: 13,
    color: '#fafafa',
    lineHeight: 19.5,
  },

  // Timeline
  timelineList: {
    gap: 10,
    marginTop: 4,
  },

  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },

  timelineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#8b5cf6',
    marginTop: 6,
  },

  timelineText: {
    flex: 1,
    fontSize: 13,
    color: '#a1a1aa',
    lineHeight: 19.5,
  },

  // Card Summary
  cardSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(139, 92, 246, 0.18)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.4)',
  },

  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8b5cf6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIconText: {
    fontSize: 20,
  },

  cardDetails: {
    flex: 1,
  },

  cardLabel: {
    fontSize: 12,
    color: '#a1a1aa',
    marginBottom: 2,
  },

  cardNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },

  cardStatus: {
    fontSize: 13,
    color: '#a1a1aa',
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 24,
    backgroundColor: '#09090b',
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    gap: 8,
  },

  primaryCta: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: '#8b5cf6',
    borderRadius: 12,
    alignItems: 'center',
  },

  primaryCtaText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },

  secondaryCta: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#27272a',
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryCtaText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },

  trustText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    opacity: 0.8,
  },

  trustIcon: {
    fontSize: 12,
  },

  trustTextContent: {
    fontSize: 11,
    color: '#a1a1aa',
  },
});

export default KYCSuccessScreen;
