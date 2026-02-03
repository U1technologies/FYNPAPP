/**
 * FYNP Aadhaar Input Screen
 * User enters their Aadhaar number for verification
 */

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';

const AadhaarInputScreen = ({route, navigation}) => {
  const {card, fullName} = route.params || {};
  const [aadhaarNumber, setAadhaarNumber] = useState('');

  const formatAadhaar = (text) => {
    // Remove all non-numeric characters
    const cleaned = text.replace(/\D/g, '');
    // Add spaces every 4 digits
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted.substring(0, 14); // Max 12 digits + 2 spaces
  };

  const handleAadhaarChange = (text) => {
    const formatted = formatAadhaar(text);
    setAadhaarNumber(formatted);
  };

  const handleGetOTP = () => {
    navigation.navigate('AadhaarOTP', {card, fullName, aadhaarNumber});
  };

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
          <View style={[styles.progressFill, {width: '60%'}]} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>📊</Text>
        </View>

        {/* Headline */}
        <Text style={styles.headline}>Enter Aadhaar Number</Text>
        <Text style={styles.subtext}>
          We will send an OTP to the mobile number linked with your Aadhaar.
        </Text>

        {/* Digilocker Badge */}
        <View style={styles.digilockerBadge}>
          <Text style={styles.badgeIcon}>☁️</Text>
          <Text style={styles.badgeText}>Secured by Digilocker</Text>
        </View>

        {/* Aadhaar Input */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.aadhaarInput}
            value={aadhaarNumber}
            onChangeText={handleAadhaarChange}
            placeholder="XXXX XXXX XXXX"
            placeholderTextColor="#a1a1aa"
            keyboardType="numeric"
            maxLength={14}
          />
        </View>

        <View style={{height: 100}} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.verifyBtn, !aadhaarNumber && styles.verifyBtnDisabled]}
          onPress={handleGetOTP}
          disabled={!aadhaarNumber}>
          <Text style={styles.verifyBtnText}>Get OTP</Text>
        </TouchableOpacity>
        <View style={styles.trustText}>
          <Text style={styles.trustIcon}>✓</Text>
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
    backgroundColor: '#8b5cf6',
  },

  // Content
  content: {
    padding: 32,
    paddingTop: 32,
    alignItems: 'center',
  },

  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },

  iconText: {
    fontSize: 32,
  },

  headline: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },

  subtext: {
    fontSize: 15,
    color: '#a1a1aa',
    lineHeight: 22.5,
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 280,
  },

  digilockerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 100,
    marginBottom: 24,
  },

  badgeIcon: {
    fontSize: 16,
  },

  badgeText: {
    fontSize: 13,
    color: '#a1a1aa',
  },

  inputGroup: {
    width: '100%',
    marginBottom: 24,
  },

  aadhaarInput: {
    width: '100%',
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 12,
    padding: 18,
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '500',
    letterSpacing: 2,
    textAlign: 'center',
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingBottom: 34,
    backgroundColor: '#09090b',
  },

  verifyBtn: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#8b5cf6',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },

  verifyBtnDisabled: {
    opacity: 0.5,
  },

  verifyBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },

  trustText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  trustIcon: {
    fontSize: 12,
    color: '#a1a1aa',
  },

  trustTextContent: {
    fontSize: 11,
    color: '#a1a1aa',
    opacity: 0.7,
  },
});

export default AadhaarInputScreen;
