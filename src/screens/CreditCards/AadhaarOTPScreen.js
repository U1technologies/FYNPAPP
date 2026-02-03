/**
 * FYNP Aadhaar OTP Verification Screen
 * User enters 6-digit OTP sent to their Aadhaar-linked mobile
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
import {useState, useRef, useEffect} from 'react';

const AadhaarOTPScreen = ({route, navigation}) => {
  const {card, fullName} = route.params || {};
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(28);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (text, index) => {
    // Only allow single digit
    if (text.length > 1) {
      text = text[text.length - 1];
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Move to previous input on backspace if current is empty
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    console.log('OTP:', otpValue);
    navigation.navigate('KYCSuccess', {card, fullName});
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
          <View style={[styles.progressFill, {width: '80%'}]} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>💬</Text>
        </View>

        {/* Headline */}
        <Text style={styles.headline}>Enter Aadhaar OTP</Text>
        <Text style={styles.subtext}>
          We've sent a 6-digit OTP to the mobile number linked with your Aadhaar.
        </Text>

        {/* Digilocker Badge */}
        <View style={styles.digilockerBadge}>
          <Text style={styles.badgeIcon}>✓</Text>
          <Text style={styles.badgeText}>Secured by Digilocker</Text>
        </View>

        {/* OTP Input */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[styles.otpInput, digit && styles.otpInputFilled]}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              placeholder="-"
              placeholderTextColor="#a1a1aa"
            />
          ))}
        </View>

        {/* Timer */}
        <View style={styles.timer}>
          <Text style={styles.timerText}>
            Resend OTP in{' '}
            <Text style={styles.timerValue}>{formatTime(timer)}</Text>
          </Text>
        </View>

        <View style={{height: 100}} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.verifyBtn,
            otp.join('').length < 6 && styles.verifyBtnDisabled,
          ]}
          onPress={handleVerify}
          disabled={otp.join('').length < 6}>
          <Text style={styles.verifyBtnText}>Verify & Proceed</Text>
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
    maxWidth: 300,
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
    color: '#a1a1aa',
  },

  badgeText: {
    fontSize: 13,
    color: '#a1a1aa',
  },

  // OTP Input
  otpContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    justifyContent: 'center',
  },

  otpInput: {
    width: 48,
    height: 56,
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 12,
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },

  otpInputFilled: {
    borderColor: '#8b5cf6',
    transform: [{translateY: -2}],
  },

  // Timer
  timer: {
    marginBottom: 32,
  },

  timerText: {
    fontSize: 14,
    color: '#a1a1aa',
  },

  timerValue: {
    color: '#8b5cf6',
    fontWeight: '500',
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
  },

  trustTextContent: {
    fontSize: 11,
    color: '#a1a1aa',
    opacity: 0.7,
  },
});

export default AadhaarOTPScreen;
