/**
 * FYNP Application Status Screen
 * Shows eligibility success and next steps
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

const ApplicationStatusScreen = ({route, navigation}) => {
  const {card, fullName} = route.params || {};

  const steps = [
    {
      id: 1,
      title: 'Eligibility Check',
      description: 'Completed successfully',
      status: 'done',
    },
    {
      id: 2,
      title: 'Address Confirmation',
      description: 'Confirm delivery address for your card',
      status: 'active',
    },
    {
      id: 3,
      title: 'Video KYC',
      description: 'Quick 2-min verification call',
      status: 'pending',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#09090b" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Application Status</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: '66%'}]} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* Success Icon */}
        <View style={styles.successIcon}>
          <Text style={styles.successIconText}>✓</Text>
        </View>

        {/* Headline */}
        <View style={styles.headline}>
          <Text style={styles.headlineTitle}>
            Great News, {fullName?.split(' ')[0] || 'Aniket'}!
          </Text>
          <Text style={styles.headlineText}>
            You are eligible for the {card?.name || 'HDFC Millennia Card'}.
          </Text>
        </View>

        {/* Offer Card */}
        <View style={styles.offerCard}>
          <View style={styles.offerCardTop} />
          <Text style={styles.limitLabel}>Approved Credit Limit</Text>
          <Text style={styles.limitValue}>₹ 1,50,000</Text>

          <View style={styles.cardPreview}>
            <View style={styles.cardImg}>
              <View style={styles.cardImgDot} />
            </View>
            <View style={styles.cardDetails}>
              <Text style={styles.cardName}>{card?.name || 'HDFC Millennia Credit Card'}</Text>
              <View style={styles.cardMeta}>
                <Text style={styles.cardMetaIcon}>⚡</Text>
                <Text style={styles.cardMetaText}>Lifetime Free applied</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Steps */}
        <View style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <View key={step.id} style={styles.stepItem}>
              {index < steps.length - 1 && <View style={styles.stepLine} />}
              <View
                style={[
                  styles.stepIcon,
                  step.status === 'done' && styles.stepIconDone,
                  step.status === 'active' && styles.stepIconActive,
                ]}>
                <Text
                  style={[
                    styles.stepIconText,
                    step.status === 'done' && styles.stepIconTextDone,
                    step.status === 'active' && styles.stepIconTextActive,
                  ]}>
                  {step.status === 'done' ? '✓' : step.id}
                </Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{height: 100}} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AddressDetails', {card, fullName})}>
          <Text style={styles.btnText}>Proceed to Address</Text>
          <Text style={styles.btnIcon}>→</Text>
        </TouchableOpacity>
        <View style={styles.trustFooter}>
          <Text style={styles.trustIcon}>🛡</Text>
          <Text style={styles.trustText}>
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
    backgroundColor: 'rgba(9, 9, 11, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
    position: 'relative',
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

  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#27272a',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#10b981',
  },

  // Content
  content: {
    padding: 24,
    paddingBottom: 120,
    alignItems: 'center',
  },

  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 24,
  },

  successIconText: {
    fontSize: 40,
    color: '#10b981',
  },

  // Headline
  headline: {
    alignItems: 'center',
    marginBottom: 24,
  },

  headlineTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },

  headlineText: {
    fontSize: 15,
    color: '#a1a1aa',
    textAlign: 'center',
    lineHeight: 22.5,
  },

  // Offer Card
  offerCard: {
    width: '100%',
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
  },

  offerCardTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#8b5cf6',
  },

  limitLabel: {
    fontSize: 13,
    color: '#a1a1aa',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },

  limitValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 24,
  },

  cardPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: 16,
    borderRadius: 16,
  },

  cardImg: {
    width: 60,
    height: 38,
    backgroundColor: '#0f172a',
    borderRadius: 6,
    position: 'relative',
  },

  cardImgDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
  },

  cardDetails: {
    flex: 1,
  },

  cardName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },

  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  cardMetaIcon: {
    fontSize: 14,
    color: '#10b981',
  },

  cardMetaText: {
    fontSize: 13,
    color: '#10b981',
  },

  // Steps
  stepsContainer: {
    width: '100%',
    marginTop: 8,
  },

  stepItem: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
    position: 'relative',
  },

  stepLine: {
    position: 'absolute',
    left: 12,
    top: 28,
    bottom: -20,
    width: 2,
    backgroundColor: '#27272a',
  },

  stepIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stepIconDone: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },

  stepIconActive: {
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
  },

  stepIconText: {
    fontSize: 12,
    color: '#a1a1aa',
    fontWeight: '600',
  },

  stepIconTextDone: {
    color: '#000000',
  },

  stepIconTextActive: {
    color: '#ffffff',
  },

  stepContent: {
    flex: 1,
  },

  stepTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },

  stepDescription: {
    fontSize: 13,
    color: '#a1a1aa',
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 34,
    backgroundColor: '#09090b',
    borderTopWidth: 1,
    borderTopColor: '#27272a',
  },

  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 12,
  },

  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },

  btnIcon: {
    fontSize: 16,
    color: '#000000',
  },

  trustFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
  },

  trustIcon: {
    fontSize: 12,
  },

  trustText: {
    fontSize: 11,
    color: '#a1a1aa',
    opacity: 0.7,
  },
});

export default ApplicationStatusScreen;
