/**
 * FYNP Dashboard Screen
 * Converted from Figma HTML/CSS export
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
import {spacing} from '../../theme';

// Import SVG Icons
import SearchIcon from '../../assets/homepage/icons/search.svg';
import NotificationIcon from '../../assets/homepage/icons/notification.svg';
import StarFynpIcon from '../../assets/homepage/icons/star-fynp.svg';
import VerificationIcon from '../../assets/homepage/icons/verification.svg';
import CreditScoreIcon from '../../assets/homepage/icons/credit-score.svg';
import CreditCardsIcon from '../../assets/homepage/icons/credit-cards.svg';
import PersonalLoansIcon from '../../assets/homepage/icons/personal-loans.svg';
import AdvisorIcon from '../../assets/homepage/icons/advisor.svg';

const DashboardScreen = ({navigation}) => {
  const userName = 'Arjun';

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#09090b" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userProfile}>
          <View style={styles.avatar}>
            <Image
              source={{uri: 'https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FSouth%20Asian%2F3'}}
              style={styles.avatarImage}
            />
          </View>
          <View>
            <Text style={styles.greeting}>{getGreeting()}</Text>
            <Text style={styles.username}>{userName}</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconBtn}>
            <SearchIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <NotificationIcon />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {/* FYNP Wealth Card */}
        <TouchableOpacity style={styles.wealthCard} activeOpacity={0.9}>
          <View style={styles.wealthTopRow}>
            <View style={styles.wealthLeft}>
              <View style={styles.wealthLabel}>
                <StarFynpIcon  />
                <Text style={styles.wealthLabelText}>FYNP WEALTH</Text>
              </View>
              <Text style={styles.wealthValue}>Sandbox mode</Text>
              <Text style={styles.wealthSub}>
                Play with sample data until you link accounts.
              </Text>
            </View>
            <View style={styles.wealthPill}>
              <VerificationIcon />
              <Text style={styles.wealthPillText}>100% secure</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.wealthAction}>
            <Text style={styles.wealthActionText}>Link accounts to see real net worth</Text>
            <Text style={styles.wealthActionArrow}>→</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Product Grid */}
        <View style={styles.productGrid}>
          {/* Credit Score */}
          <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
            <View style={[styles.tag, styles.tagFree]}>
              <Text style={styles.tagText}>FREE</Text>
            </View>
            <View style={[styles.productIcon, {backgroundColor: 'rgba(59, 130, 246, 0.1)'}]}>
              <CreditScoreIcon  />
            </View>
            <View>
              <Text style={styles.productTitle}>Credit score</Text>
              <Text style={styles.productDesc}>Check score &amp; report in 2 taps.</Text>
            </View>
          </TouchableOpacity>

          {/* Credit Cards */}
          <TouchableOpacity
            style={styles.productCard}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('CreditCards')}>
            <View style={[styles.tag, styles.tagNew]}>
              <Text style={styles.tagText}>OFFERS</Text>
            </View>
            <View style={[styles.productIcon, {backgroundColor: 'rgba(168, 85, 247, 0.1)'}]}>
              <CreditCardsIcon />
            </View>
            <View>
              <Text style={styles.productTitle}>Credit cards</Text>
              <Text style={styles.productDesc}>Best cards picked for you.</Text>
            </View>
          </TouchableOpacity>

          {/* Personal Loans */}
          <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
            <View style={[styles.tag, styles.tagHot]}>
              <Text style={styles.tagText}>FAST</Text>
            </View>
            <View style={[styles.productIcon, {backgroundColor: 'rgba(245, 158, 11, 0.1)'}]}>
              <PersonalLoansIcon />
            </View>
            <View>
              <Text style={styles.productTitle}>Personal loans</Text>
              <Text style={styles.productDesc}>Compare offers in one place.</Text>
            </View>
          </TouchableOpacity>

          {/* FYNP Advisor */}
          <TouchableOpacity style={[styles.productCard, styles.productCardPremium]} activeOpacity={0.9}>
            <View style={[styles.tag, styles.tagPremium]}>
              <Text style={styles.tagTextPremium}>PREMIUM</Text>
            </View>
            <View style={[styles.productIcon, {backgroundColor: 'rgba(255, 255, 255, 0.12)'}]}>
              <AdvisorIcon />
            </View>
            <View>
              <Text style={styles.productTitle}>FYNP advisor</Text>
              <Text style={styles.productDesc}>Upgrade for a dedicated expert.</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Financial Goals */}
        <View style={styles.cardSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Financial goals</Text>
            <TouchableOpacity>
              <Text style={styles.sectionLink}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.goalsRow}>
            {/* Dream Home */}
            <TouchableOpacity style={styles.goalCard} activeOpacity={0.9}>
              <View style={styles.goalIconPill}>
                <Text style={styles.goalIconText}>🏠</Text>
              </View>
              <View>
                <Text style={styles.goalTitle}>Dream home</Text>
                <Text style={styles.goalMeta}>Target: 2028</Text>
              </View>
            </TouchableOpacity>

            {/* Education */}
            <TouchableOpacity style={styles.goalCard} activeOpacity={0.9}>
              <View style={styles.goalIconPill}>
                <Text style={styles.goalIconText}>🎓</Text>
              </View>
              <View>
                <Text style={styles.goalTitle}>Education</Text>
                <Text style={styles.goalMeta}>Target: 2035</Text>
              </View>
            </TouchableOpacity>

            {/* Travel */}
            <TouchableOpacity style={styles.goalCard} activeOpacity={0.9}>
              <View style={styles.goalIconPill}>
                <Text style={styles.goalIconText}>✈️</Text>
              </View>
              <View>
                <Text style={styles.goalTitle}>Travel</Text>
                <Text style={styles.goalMeta}>Target: 2026</Text>
              </View>
            </TouchableOpacity>

            {/* Car */}
            <TouchableOpacity style={styles.goalCard} activeOpacity={0.9}>
              <View style={styles.goalIconPill}>
                <Text style={styles.goalIconText}>🚗</Text>
              </View>
              <View>
                <Text style={styles.goalTitle}>First car</Text>
                <Text style={styles.goalMeta}>Target: 2027</Text>
              </View>
            </TouchableOpacity>

            {/* Wedding */}
            <TouchableOpacity style={styles.goalCard} activeOpacity={0.9}>
              <View style={styles.goalIconPill}>
                <Text style={styles.goalIconText}>💍</Text>
              </View>
              <View>
                <Text style={styles.goalTitle}>Wedding</Text>
                <Text style={styles.goalMeta}>Target: 2030</Text>
              </View>
            </TouchableOpacity>

            {/* Emergency Fund */}
            <TouchableOpacity style={styles.goalCard} activeOpacity={0.9}>
              <View style={styles.goalIconPill}>
                <Text style={styles.goalIconText}>💵</Text>
              </View>
              <View>
                <Text style={styles.goalTitle}>Emergency fund</Text>
                <Text style={styles.goalMeta}>3–6 months cushion</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Complete Your Setup */}
        <View style={styles.cardSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Complete your setup</Text>
            <Text style={styles.setupProgress}>1 / 4 done</Text>
          </View>
          <View style={styles.setupList}>
            {/* Create Account - Completed */}
            <TouchableOpacity style={styles.setupItem} activeOpacity={0.9}>
              <View style={[styles.setupCheck, styles.setupCheckDone]}>
                <Text style={styles.setupCheckIcon}>✓</Text>
              </View>
              <View style={styles.setupContent}>
                <Text style={[styles.setupLabel, styles.setupLabelDone]}>
                  Create FYNP account
                </Text>
              </View>
            </TouchableOpacity>

            {/* Verify PAN */}
            <TouchableOpacity style={styles.setupItem} activeOpacity={0.9}>
              <View style={styles.setupCheck}>
                <Text style={styles.setupCheckIconPlus}>+</Text>
              </View>
              <View style={styles.setupContent}>
                <Text style={styles.setupLabel}>Verify PAN card</Text>
                <Text style={styles.setupSub}>Needed for investments &amp; credit.</Text>
              </View>
              <Text style={styles.setupChevron}>›</Text>
            </TouchableOpacity>

            {/* Link Bank */}
            <TouchableOpacity style={styles.setupItem} activeOpacity={0.9}>
              <View style={styles.setupCheck}>
                <Text style={styles.setupCheckIconPlus}>+</Text>
              </View>
              <View style={styles.setupContent}>
                <Text style={styles.setupLabel}>Link bank account</Text>
                <Text style={styles.setupSub}>To track income, EMIs &amp; spends.</Text>
              </View>
              <Text style={styles.setupChevron}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Trust Badge */}
        <View style={styles.trustBadge}>
          <View style={styles.trustText}>
            <Text style={styles.trustIcon}>🛡️</Text>
            <Text style={styles.trustTextContent}>100% security • Encrypted by default</Text>
          </View>
          <Text style={styles.trustSubtext}>iOS 2007 verified ad fintech</Text>
        </View>

        <View style={{height: 20}} />
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(9, 9, 11, 0.9)',
  },

  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#27272a',
  },

  avatarImage: {
    width: '100%',
    height: '100%',
  },

  greeting: {
    fontSize: 14,
    color: '#a1a1aa',
  },

  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },

  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#27272a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    fontSize: 20,
  },

  // Content
  content: {
    padding: 20,
    gap: 24,
    paddingBottom: 24,
  },

  // Wealth Card
  wealthCard: {
    backgroundColor: '#1e1b4b',
    borderRadius: 12,
    padding: 20,
    minHeight: 152,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    overflow: 'hidden',
  },

  wealthTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },

  wealthLeft: {
    flex: 1,
  },

  wealthLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },

  wealthLabelIcon: {
    fontSize: 14,
  },

  wealthLabelText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.7)',
  },

  wealthValue: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },

  wealthSub: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
  },

  wealthPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  wealthPillIcon: {
    fontSize: 11,
  },

  wealthPillText: {
    fontSize: 11,
    color: 'rgba(226, 232, 240, 0.9)',
  },

  wealthAction: {
    marginTop: 16,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wealthActionText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 13,
  },

  wealthActionArrow: {
    fontSize: 18,
    color: '#fff',
  },

  // Product Grid
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },

  productCard: {
    width: '48%',
    backgroundColor: '#141417',
    borderRadius: 16,
    padding: 14,
    gap: 8,
    position: 'relative',
  },

  productCardPremium: {
    background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
    backgroundColor: '#18181b',
  },

  productIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  productIconText: {
    fontSize: 20,
  },

  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },

  productDesc: {
    fontSize: 12,
    color: '#71717a',
  },

  tag: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 9,
    fontWeight: '700',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 999,
    textTransform: 'uppercase',
  },

  tagFree: {
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
  },

  tagNew: {
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
  },

  tagHot: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
  },

  tagPremium: {
    backgroundColor: '#ffffff',
  },

  tagText: {
    color: '#60a5fa',
    fontSize: 9,
    fontWeight: '700',
  },

  tagTextPremium: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '700',
  },

  // Card Section
  cardSection: {
    backgroundColor: '#141417',
    borderRadius: 16,
    padding: 16,
    paddingTop: 18,
    paddingBottom: 14,
    borderWidth: 1,
    borderColor: '#27272a',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },

  sectionLink: {
    fontSize: 12,
    color: '#8b5cf6',
    fontWeight: '500',
  },

  // Goals
  goalsRow: {
    gap: 12,
    paddingRight: 12,
  },

  goalCard: {
    width: 140,
    backgroundColor: '#050509',
    borderRadius: 16,
    padding: 12,
    gap: 10,
  },

  goalIconPill: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },

  goalIconText: {
    fontSize: 18,
  },

  goalTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
  },

  goalMeta: {
    fontSize: 11,
    color: '#71717a',
  },

  // Setup
  setupProgress: {
    fontSize: 12,
    color: '#8b5cf6',
    fontWeight: '500',
  },

  setupList: {
    gap: 10,
    marginTop: 6,
  },

  setupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
  },

  setupCheck: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#71717a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  setupCheckDone: {
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
  },

  setupCheckIcon: {
    fontSize: 13,
    color: '#ffffff',
  },

  setupCheckIconPlus: {
    fontSize: 13,
    color: '#71717a',
  },

  setupContent: {
    flex: 1,
  },

  setupLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#ffffff',
  },

  setupLabelDone: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },

  setupSub: {
    fontSize: 11,
    color: '#71717a',
  },

  setupChevron: {
    fontSize: 18,
    color: '#71717a',
  },

  // Trust Badge
  trustBadge: {
    alignItems: 'center',
    marginTop: 12,
    opacity: 0.7,
  },

  trustText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 4,
  },

  trustIcon: {
    fontSize: 14,
  },

  trustTextContent: {
    fontSize: 11,
    color: '#71717a',
  },

  trustSubtext: {
    fontSize: 10,
    color: '#71717a',
    opacity: 0.8,
  },
});

export default DashboardScreen;
