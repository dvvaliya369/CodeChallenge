import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Colors from '../../utilities/Colors';
import Images from '../../utilities/Images';

const About = () => {
  const appInfo = {
    version: '1.0.0',
    buildNumber: '1',
    developer: 'Dharmendra Valiya',
    description: 'A comprehensive recipe sharing and cooking companion app',
    features: [
      'Browse and share recipes',
      'Post cooking photos and videos',
      'Search for specific dishes',
      'Get cooking notifications',
      'Manage your cooking profile',
    ],
  };

  const techStack = [
    { name: 'React Native', version: '0.81.4' },
    { name: 'React Navigation', version: '6.x' },
    { name: 'React Native Paper', version: '5.x' },
    { name: 'React Native Camera', version: '4.x' },
    { name: 'React Native Vector Icons', version: '10.x' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Image 
            source={Images.homeTabIcon} 
            style={styles.appIcon} 
            resizeMode="contain"
          />
          <Text style={styles.appName}>CodeChallenge</Text>
          <Text style={styles.appSubtitle}>Recipe Sharing App</Text>
        </View>

        {/* App Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Version:</Text>
            <Text style={styles.infoValue}>{appInfo.version}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Build:</Text>
            <Text style={styles.infoValue}>{appInfo.buildNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Developer:</Text>
            <Text style={styles.infoValue}>{appInfo.developer}</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{appInfo.description}</Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          {appInfo.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        {/* Tech Stack */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technology Stack</Text>
          {techStack.map((tech, index) => (
            <View key={index} style={styles.techItem}>
              <Text style={styles.techName}>{tech.name}</Text>
              <Text style={styles.techVersion}>{tech.version}</Text>
            </View>
          ))}
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>GitHub Repository</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Report an Issue</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 {appInfo.developer}. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  appIcon: {
    width: 80,
    height: 80,
    tintColor: Colors.themeYellowColor,
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  appSubtitle: {
    fontSize: 16,
    color: Colors.themeLightGrayTextColor,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: Colors.themeYellowColor,
    paddingBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 5,
  },
  infoLabel: {
    fontSize: 16,
    color: Colors.themeLightGrayTextColor,
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    color: Colors.themeYellowColor,
    marginRight: 10,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  techItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  techName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  techVersion: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  contactButton: {
    backgroundColor: Colors.themeYellowColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
    textAlign: 'center',
  },
});

export default About;
