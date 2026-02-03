/**
 * FYNP Card Tracking Screen
 * Shows real-time delivery tracking with timeline
 */

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

const CardTrackingScreen = ({route, navigation}) => {
  const {card, fullName} = route.params || {};

  const trackingSteps = [
    {
      id: 1,
      title: 'Out for Delivery',
      description: 'Agent is on the way to your address.',
      time: 'Today, 09:45 AM',
      status: 'active',
      icon: '📍',
    },
    {
      id: 2,
      title: 'Arrived at Delivery Hub',
      description: 'Bangalore South Hub',
      time: 'Today, 06:30 AM',
      status: 'completed',
      icon: '✓',
    },
    {
      id: 3,
      title: 'In Transit',
      description: 'Dispatched from Mumbai Central',
      time: 'Yesterday, 08:15 PM',
      status: 'completed',
      icon: '✓',
    },
    {
      id: 4,
      title: 'Card Printed & Packed',
      description: 'Your FYNP card is ready.',
      time: 'Yesterday, 10:00 AM',
      status: 'completed',
      icon: '✓',
    },
  ];

  const handleGoHome = () => {
    navigation.navigate('Dashboard');
  };

  const handleCallSupport = () => {
    console.log('Call support');
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
        <Text style={styles.headerTitle}>Track Delivery</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Map Container */}
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapIcon}>🗺️</Text>
            <Text style={styles.mapText}>Delivery Route Map</Text>
          </View>
          <View style={styles.mapOverlay} />
        </View>

        {/* Tracking Content */}
        <View style={styles.trackingContent}>
          <View style={styles.statusCard}>
            {/* Delivery Estimate */}
            <View style={styles.deliveryEstimate}>
              <View style={styles.estimateLeft}>
                <Text style={styles.estimateLabel}>Estimated Delivery</Text>
                <Text style={styles.estimateDate}>Arriving Tomorrow</Text>
              </View>
              <View style={styles.courierBadge}>
                <Text style={styles.courierIcon}>🚚</Text>
                <Text style={styles.courierLogo}>BlueDart</Text>
              </View>
            </View>

            {/* Timeline */}
            <View style={styles.timeline}>
              {trackingSteps.map((step, index) => (
                <View key={step.id} style={styles.timelineItem}>
                  {/* Timeline Line */}
                  {index < trackingSteps.length - 1 && (
                    <View style={styles.timelineLine} />
                  )}

                  {/* Timeline Marker */}
                  <View
                    style={[
                      styles.timelineMarker,
                      step.status === 'active' && styles.timelineMarkerActive,
                      step.status === 'completed' && styles.timelineMarkerCompleted,
                    ]}>
                    <Text
                      style={[
                        styles.timelineMarkerIcon,
                        (step.status === 'active' || step.status === 'completed') &&
                          styles.timelineMarkerIconActive,
                      ]}>
                      {step.icon}
                    </Text>
                  </View>

                  {/* Timeline Info */}
                  <View style={styles.timelineInfo}>
                    <Text style={styles.timelineTitle}>{step.title}</Text>
                    <Text style={styles.timelineDesc}>{step.description}</Text>
                    <Text style={styles.timelineTime}>{step.time}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={{height: 120}} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerActions}>
          <TouchableOpacity
            style={styles.primaryFooterBtn}
            onPress={handleGoHome}>
            <Text style={styles.primaryFooterBtnIcon}>🏠</Text>
            <Text style={styles.primaryFooterBtnText}>Go to Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpBtn} onPress={handleCallSupport}>
            <Text style={styles.helpBtnIcon}>📞</Text>
            <Text style={styles.helpBtnText}>Call Support</Text>
          </TouchableOpacity>
        </View>
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

  // Map Container
  mapContainer: {
    width: '100%',
    height: 240,
    position: 'relative',
    backgroundColor: '#27272a',
    overflow: 'hidden',
  },

  mapPlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },

  mapIcon: {
    fontSize: 48,
    marginBottom: 8,
  },

  mapText: {
    fontSize: 14,
    color: '#a1a1aa',
  },

  mapOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    background: 'linear-gradient(to top, #09090b, transparent)',
  },

  // Tracking Content
  trackingContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginTop: -40,
    position: 'relative',
    zIndex: 10,
  },

  statusCard: {
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 10,
  },

  // Delivery Estimate
  deliveryEstimate: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  estimateLeft: {
    flex: 1,
  },

  estimateLabel: {
    fontSize: 13,
    color: '#a1a1aa',
    marginBottom: 4,
  },

  estimateDate: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },

  courierBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },

  courierIcon: {
    fontSize: 14,
  },

  courierLogo: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8b5cf6',
  },

  // Timeline
  timeline: {
    position: 'relative',
  },

  timelineItem: {
    flexDirection: 'row',
    gap: 16,
    position: 'relative',
    paddingBottom: 24,
  },

  timelineLine: {
    position: 'absolute',
    left: 11,
    top: 34,
    bottom: 0,
    width: 2,
    backgroundColor: '#27272a',
    zIndex: 0,
  },

  timelineMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#18181b',
    borderWidth: 2,
    borderColor: '#27272a',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  timelineMarkerActive: {
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
    shadowColor: '#8b5cf6',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },

  timelineMarkerCompleted: {
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
  },

  timelineMarkerIcon: {
    fontSize: 12,
    color: '#a1a1aa',
  },

  timelineMarkerIconActive: {
    color: '#ffffff',
  },

  timelineInfo: {
    flex: 1,
  },

  timelineTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },

  timelineDesc: {
    fontSize: 13,
    color: '#a1a1aa',
    marginBottom: 4,
  },

  timelineTime: {
    fontSize: 11,
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
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    backgroundColor: '#09090b',
  },

  footerActions: {
    gap: 8,
  },

  primaryFooterBtn: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: '#8b5cf6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  primaryFooterBtnIcon: {
    fontSize: 16,
  },

  primaryFooterBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },

  helpBtn: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: '#27272a',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  helpBtnIcon: {
    fontSize: 16,
  },

  helpBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },

  trustText: {
    marginTop: 16,
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

export default CardTrackingScreen;
