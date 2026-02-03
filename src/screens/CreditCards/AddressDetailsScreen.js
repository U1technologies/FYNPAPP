/**
 * FYNP Address Details Screen
 * Collects current and permanent address for card delivery
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

const AddressDetailsScreen = ({route, navigation}) => {
  const {card, fullName} = route.params || {};

  // Current Address
  const [currentPincode, setCurrentPincode] = useState('560034');
  const [currentHouseNo, setCurrentHouseNo] = useState('Flat 402, Sunshine Apts');
  const [currentRoadName, setCurrentRoadName] = useState('4th Cross, Koramangala');
  const [currentLandmark, setCurrentLandmark] = useState('');

  // Permanent Address
  const [permanentPincode, setPermanentPincode] = useState('');
  const [permanentHouseNo, setPermanentHouseNo] = useState('');
  const [permanentRoadName, setPermanentRoadName] = useState('');
  const [permanentLandmark, setPermanentLandmark] = useState('');

  // Checkbox state
  const [isSameAddress, setIsSameAddress] = useState(false);

  // Detected location from pincode
  const [detectedLocation, setDetectedLocation] = useState('Bengaluru, Karnataka');

  const handleContinue = () => {
    navigation.navigate('KYCVerification', {card, fullName});
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
        <Text style={styles.headerTitle}>Address Details</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: '90%'}]} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* Headline */}
        <View style={styles.headline}>
          <Text style={styles.headlineTitle}>Where do you live?</Text>
          <Text style={styles.headlineText}>
            Required for KYC verification and card delivery.
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          {/* Current Address */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput
              style={styles.inputField}
              value={currentPincode}
              onChangeText={setCurrentPincode}
              placeholder="000000"
              keyboardType="numeric"
              maxLength={6}
              placeholderTextColor="#a1a1aa"
            />
            {detectedLocation && (
              <View style={styles.detectedLocation}>
                <Text style={styles.detectedIcon}>✓</Text>
                <Text style={styles.detectedText}>{detectedLocation}</Text>
              </View>
            )}
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>House No, Building, Apartment</Text>
            <TextInput
              style={styles.inputField}
              value={currentHouseNo}
              onChangeText={setCurrentHouseNo}
              placeholder="e.g. Flat 402, Sunshine Apts"
              placeholderTextColor="#a1a1aa"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Road Name, Area, Colony</Text>
            <TextInput
              style={styles.inputField}
              value={currentRoadName}
              onChangeText={setCurrentRoadName}
              placeholder="e.g. 4th Cross, Koramangala"
              placeholderTextColor="#a1a1aa"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Landmark (Optional)</Text>
            <TextInput
              style={styles.inputField}
              value={currentLandmark}
              onChangeText={setCurrentLandmark}
              placeholder="e.g. Near Sony Signal"
              placeholderTextColor="#a1a1aa"
            />
          </View>

          {/* Checkbox */}
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => setIsSameAddress(!isSameAddress)}>
            <View style={[styles.checkbox, isSameAddress && styles.checkboxChecked]}>
              {isSameAddress && <Text style={styles.checkboxIcon}>✓</Text>}
            </View>
            <Text style={styles.checkboxText}>This is my permanent address</Text>
          </TouchableOpacity>

          {/* Permanent Address Section - Only show if checkbox is NOT checked */}
          {!isSameAddress && (
            <View style={styles.permanentAddressSection}>
              <Text style={styles.sectionTitle}>Permanent Address</Text>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Pincode</Text>
                <TextInput
                  style={styles.inputField}
                  value={permanentPincode}
                  onChangeText={setPermanentPincode}
                  placeholder="000000"
                  keyboardType="numeric"
                  maxLength={6}
                  placeholderTextColor="#a1a1aa"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>House No, Building, Apartment</Text>
                <TextInput
                  style={styles.inputField}
                  value={permanentHouseNo}
                  onChangeText={setPermanentHouseNo}
                  placeholder="e.g. House 12, Main Street"
                  placeholderTextColor="#a1a1aa"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Road Name, Area, Colony</Text>
                <TextInput
                  style={styles.inputField}
                  value={permanentRoadName}
                  onChangeText={setPermanentRoadName}
                  placeholder="e.g. Gandhi Nagar"
                  placeholderTextColor="#a1a1aa"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Landmark (Optional)</Text>
                <TextInput
                  style={styles.inputField}
                  value={permanentLandmark}
                  onChangeText={setPermanentLandmark}
                  placeholder="e.g. Opp. Post Office"
                  placeholderTextColor="#a1a1aa"
                />
              </View>
            </View>
          )}
        </View>

        <View style={{height: 100}} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={handleContinue}>
          <Text style={styles.btnText}>Video KYC</Text>
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
    padding: 24,
    paddingBottom: 120,
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

  // Form
  formSection: {
    gap: 20,
  },

  inputWrapper: {
    gap: 8,
  },

  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#a1a1aa',
  },

  inputField: {
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 12,
    padding: 16,
    color: '#ffffff',
    fontSize: 16,
  },

  detectedLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },

  detectedIcon: {
    fontSize: 12,
    color: '#4ade80',
  },

  detectedText: {
    fontSize: 13,
    color: '#4ade80',
  },

  // Checkbox
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#a1a1aa',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
  },

  checkboxIcon: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '700',
  },

  checkboxText: {
    fontSize: 14,
    color: '#ffffff',
  },

  // Permanent Address Section
  permanentAddressSection: {
    marginTop: 8,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    borderStyle: 'dashed',
    gap: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
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

export default AddressDetailsScreen;
