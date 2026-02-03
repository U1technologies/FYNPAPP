/**
 * FYNP KYC Verification Screen
 * Overview screen showing KYC verification steps
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

const KYCVerificationScreen = ({route, navigation}) => {
  const {card, fullName} = route.params || {};

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
        <Text style={styles.headerTitle}>KYC Verification</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: '80%'}]} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* Headline */}
        <View style={styles.headline}>
          <Text style={styles.headlineTitle}>Verify Identity</Text>
          <Text style={styles.headlineText}>
            Complete these simple steps to activate your limit.
          </Text>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>🛡</Text>
          <Text style={styles.infoText}>
            Your data is encrypted and shared only with regulated partners for KYC purposes.
          </Text>
        </View>

        {/* Step 1: Aadhaar Verification - Active */}
        <View style={[styles.kycStep, styles.kycStepActive]}>
          <View style={styles.stepHeader}>
            <View style={[styles.stepIcon, styles.stepIconActive]}>
              <Text style={styles.stepIconText}>🔐</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Aadhaar Verification</Text>
              <Text style={styles.stepDesc}>
                Paperless verification via Digilocker. OTP required.
              </Text>
              <View style={styles.stepTag}>
                <Text style={styles.stepTagText}>FASTEST • 30 SEC</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => navigation.navigate('AadhaarInput', {card, fullName})}>
            <Text style={styles.actionBtnText}>Verify via Digilocker</Text>
          </TouchableOpacity>
        </View>

        {/* Step 2: Selfie - Locked */}
        <View style={[styles.kycStep, styles.kycStepLocked]}>
          <View style={styles.stepHeader}>
            <View style={styles.stepIcon}>
              <Text style={styles.stepIconText}>📷</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Take a Selfie</Text>
              <Text style={styles.stepDesc}>
                Match your face with your ID proof.
              </Text>
            </View>
          </View>
        </View>

        <View style={{height: 40}} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
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
    backgroundColor: 'rgba(9, 9, 11, 0.95)',
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
    backgroundColor: '#FF914D',
  },

  // Content
  content: {
    padding: 24,
    paddingBottom: 100,
  },

  headline: {
    marginBottom: 24,
  },

  headlineTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },

  headlineText: {
    fontSize: 15,
    color: '#a1a1aa',
    lineHeight: 22.5,
  },

  // Info Card
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },

  infoIcon: {
    fontSize: 18,
    marginTop: 2,
  },

  infoText: {
    flex: 1,
    fontSize: 13,
    color: '#ffffff',
    lineHeight: 19.5,
    opacity: 0.9,
  },

  // KYC Steps
  kycStep: {
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },

  kycStepActive: {
    borderColor: '#FF914D',
    backgroundColor: 'rgba(139, 92, 246, 0.05)',
  },

  kycStepLocked: {
    opacity: 0.6,
  },

  stepHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 12,
  },

  stepIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#27272a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stepIconActive: {
    backgroundColor: '#FF914D',
  },

  stepIconText: {
    fontSize: 20,
  },

  stepContent: {
    flex: 1,
  },

  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },

  stepDesc: {
    fontSize: 13,
    color: '#a1a1aa',
    lineHeight: 18.2,
  },

  stepTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(241, 157, 104, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 8,
  },

  stepTagText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FF914D',
  },

  actionBtn: {
    backgroundColor: '#FF914D',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  actionBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
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

  trustFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
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

export default KYCVerificationScreen;
