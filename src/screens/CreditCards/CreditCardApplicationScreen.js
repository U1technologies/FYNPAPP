/**
 * FYNP Credit Card Application Screen
 * Collects user details for card application
 */

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';

const CreditCardApplicationScreen = ({route, navigation}) => {
  const {card} = route.params || {};
  const [employmentType, setEmploymentType] = useState('salaried');

  // Form state
  const [fullName, setFullName] = useState('Aniket Sharma');
  const [panNumber, setPanNumber] = useState('ABCDE1234F');
  const [dob, setDob] = useState('24 / 08 / 1995');
  const [monthlyIncome, setMonthlyIncome] = useState('₹ 85,000');

  // Self-employed fields
  const [businessName, setBusinessName] = useState('');
  const [profession, setProfession] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [showProfessionModal, setShowProfessionModal] = useState(false);

  const professionOptions = [
    'Software Developer / IT Professional',
    'Doctor / Healthcare',
    'Chartered Accountant',
    'Lawyer / Advocate',
    'Architect',
    'Consultant',
    'Freelancer / Creative Professional',
    'Retail Business Owner',
    'Restaurant / Cafe Owner',
    'Manufacturing Business',
    'Trading / Import-Export',
    'Real Estate Developer',
    'Other',
  ];

  const handleCheckEligibility = () => {
    navigation.navigate('ApplicationStatus', {card, fullName});
  };

  const handleProfessionSelect = (selectedProfession) => {
    setProfession(selectedProfession);
    setShowProfessionModal(false);
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
        <Text style={styles.headerTitle}>Application Details</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: '33%'}]} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* Intro Section */}
        <View style={styles.introSection}>
          <Text style={styles.headline}>Quick Eligibility Check</Text>
          <Text style={styles.subtext}>
            We need a few details to approve your {card?.name || 'credit card'} instantly.
          </Text>
          <View style={styles.offerTag}>
            <Text style={styles.offerIcon}>✓</Text>
            <Text style={styles.offerText}>Lifetime Free Offer Applied</Text>
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.formGroup}>
          {/* Full Name */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Full Name (as per PAN)</Text>
            <TextInput
              style={styles.inputField}
              value={fullName}
              onChangeText={setFullName}
              placeholderTextColor="#a1a1aa"
            />
          </View>

          {/* PAN Number */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>PAN Number</Text>
            <TextInput
              style={[styles.inputField, {textTransform: 'uppercase'}]}
              value={panNumber}
              onChangeText={setPanNumber}
              maxLength={10}
              autoCapitalize="characters"
              placeholderTextColor="#a1a1aa"
            />
          </View>

          {/* Date of Birth */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.inputField}
              value={dob}
              onChangeText={setDob}
              placeholder="DD / MM / YYYY"
              placeholderTextColor="#a1a1aa"
            />
          </View>

          {/* Employment Type */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Employment Type</Text>
            <View style={styles.pillGroup}>
              <TouchableOpacity
                style={[
                  styles.pill,
                  employmentType === 'salaried' && styles.pillActive,
                ]}
                onPress={() => setEmploymentType('salaried')}>
                <Text
                  style={[
                    styles.pillText,
                    employmentType === 'salaried' && styles.pillTextActive,
                  ]}>
                  Salaried
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.pill,
                  employmentType === 'self-employed' && styles.pillActive,
                ]}
                onPress={() => setEmploymentType('self-employed')}>
                <Text
                  style={[
                    styles.pillText,
                    employmentType === 'self-employed' && styles.pillTextActive,
                  ]}>
                  Self-Employed
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Conditional Fields Based on Employment Type */}
          {employmentType === 'salaried' ? (
            /* Monthly Income for Salaried */
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Monthly Income</Text>
              <TextInput
                style={styles.inputField}
                value={monthlyIncome}
                onChangeText={setMonthlyIncome}
                keyboardType="numeric"
                placeholderTextColor="#a1a1aa"
              />
            </View>
          ) : (
            /* Fields for Self-Employed */
            <>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Business / Company Name</Text>
                <TextInput
                  style={styles.inputField}
                  value={businessName}
                  onChangeText={setBusinessName}
                  placeholder="e.g. Acme Traders Pvt Ltd"
                  placeholderTextColor="#a1a1aa"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Profession / Business Type</Text>
                <TouchableOpacity
                  style={styles.inputField}
                  onPress={() => setShowProfessionModal(true)}>
                  <Text style={profession ? styles.dropdownTextSelected : styles.dropdownText}>
                    {profession || 'Select profession'}
                  </Text>
                  <Text style={styles.dropdownIcon}>▼</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Annual Income (As per ITR)</Text>
                <TextInput
                  style={styles.inputField}
                  value={annualIncome}
                  onChangeText={setAnnualIncome}
                  placeholder="₹ 0"
                  keyboardType="numeric"
                  placeholderTextColor="#a1a1aa"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Work Email (Optional)</Text>
                <TextInput
                  style={styles.inputField}
                  value={workEmail}
                  onChangeText={setWorkEmail}
                  placeholder="name@business.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#a1a1aa"
                />
              </View>
            </>
          )}
        </View>

        {/* Secure Note */}
        <View style={styles.secureNote}>
          <Text style={styles.secureIcon}>🛡️</Text>
          <Text style={styles.secureText}>
            Your data is encrypted & sent securely to {card?.bank || 'HDFC Bank'}
          </Text>
        </View>

        <View style={{height: 100}} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitBtn} onPress={handleCheckEligibility}>
          <Text style={styles.submitBtnText}>Check Eligibility</Text>
          <Text style={styles.submitBtnIcon}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Profession Modal */}
      <Modal
        visible={showProfessionModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowProfessionModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Profession</Text>
              <TouchableOpacity
                style={styles.modalCloseBtn}
                onPress={() => setShowProfessionModal(false)}>
                <Text style={styles.modalCloseIcon}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.modalScroll}>
              {professionOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.modalOption,
                    profession === option && styles.modalOptionActive,
                  ]}
                  onPress={() => handleProfessionSelect(option)}>
                  <Text
                    style={[
                      styles.modalOptionText,
                      profession === option && styles.modalOptionTextActive,
                    ]}>
                    {option}
                  </Text>
                  {profession === option && (
                    <Text style={styles.modalCheckIcon}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#8b5cf6',
  },

  // Content
  content: {
    padding: 24,
    paddingBottom: 120,
  },

  introSection: {
    marginBottom: 32,
  },

  headline: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },

  subtext: {
    fontSize: 14,
    color: '#a1a1aa',
    lineHeight: 21,
  },

  offerTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 12,
  },

  offerIcon: {
    fontSize: 12,
    color: '#10b981',
  },

  offerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10b981',
  },

  // Form
  formGroup: {
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

  dropdownText: {
    color: '#a1a1aa',
    fontSize: 16,
  },

  dropdownTextSelected: {
    color: '#ffffff',
    fontSize: 16,
  },

  dropdownIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    color: '#a1a1aa',
  },

  pillGroup: {
    flexDirection: 'row',
    gap: 12,
  },

  pill: {
    flex: 1,
    padding: 14,
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 12,
    alignItems: 'center',
  },

  pillActive: {
    backgroundColor: '#2e1065',
    borderColor: '#8b5cf6',
  },

  pillText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#a1a1aa',
  },

  pillTextActive: {
    color: '#ffffff',
  },

  secureNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },

  secureIcon: {
    fontSize: 14,
  },

  secureText: {
    fontSize: 12,
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

  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 12,
  },

  submitBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },

  submitBtnIcon: {
    fontSize: 16,
    color: '#000000',
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },

  modalContent: {
    backgroundColor: '#18181b',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '80%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#27272a',
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },

  modalCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#27272a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalCloseIcon: {
    fontSize: 18,
    color: '#a1a1aa',
  },

  modalScroll: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  },

  modalOptionActive: {
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    borderWidth: 1,
    borderColor: '#8b5cf6',
  },

  modalOptionText: {
    fontSize: 15,
    color: '#a1a1aa',
    flex: 1,
  },

  modalOptionTextActive: {
    color: '#ffffff',
    fontWeight: '500',
  },

  modalCheckIcon: {
    fontSize: 16,
    color: '#8b5cf6',
    marginLeft: 12,
  },
});

export default CreditCardApplicationScreen;
