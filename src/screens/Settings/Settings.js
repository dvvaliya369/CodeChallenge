import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utilities/Colors';

const Settings = () => {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoSyncEnabled, setAutoSyncEnabled] = useState(true);

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
    Alert.alert(
      'Notifications',
      `Notifications ${!notificationsEnabled ? 'enabled' : 'disabled'}`,
      [{ text: 'OK' }]
    );
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
    Alert.alert(
      'Theme',
      `Dark mode ${!darkModeEnabled ? 'enabled' : 'disabled'}`,
      [{ text: 'OK' }]
    );
  };

  const handleAutoSyncToggle = () => {
    setAutoSyncEnabled(!autoSyncEnabled);
    Alert.alert(
      'Auto Sync',
      `Auto sync ${!autoSyncEnabled ? 'enabled' : 'disabled'}`,
      [{ text: 'OK' }]
    );
  };

  const handleAbout = () => {
    Alert.alert(
      'About',
      'CodeChallenge App v1.0.0\n\nA React Native application showcasing modern mobile development practices.',
      [{ text: 'OK' }]
    );
  };

  const handlePrivacyPolicy = () => {
    Alert.alert(
      'Privacy Policy',
      'Your privacy is important to us. We collect and use your information responsibly.',
      [{ text: 'OK' }]
    );
  };

  const handleTermsOfService = () => {
    Alert.alert(
      'Terms of Service',
      'By using this app, you agree to our terms and conditions.',
      [{ text: 'OK' }]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => {
            // Add logout logic here
            Alert.alert('Logged out', 'You have been logged out successfully.');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Edit Profile</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Change Password</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Push Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleNotificationToggle}
            trackColor={{ false: '#767577', true: Colors.themeYellowColor }}
            thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={handleDarkModeToggle}
            trackColor={{ false: '#767577', true: Colors.themeYellowColor }}
            thumbColor={darkModeEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Auto Sync</Text>
          <Switch
            value={autoSyncEnabled}
            onValueChange={handleAutoSyncToggle}
            trackColor={{ false: '#767577', true: Colors.themeYellowColor }}
            thumbColor={autoSyncEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Storage Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storage</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Clear Cache</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Manage Storage</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Help Center</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Contact Us</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Report Bug</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Legal Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal</Text>
        
        <TouchableOpacity style={styles.settingItem} onPress={handlePrivacyPolicy}>
          <Text style={styles.settingText}>Privacy Policy</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem} onPress={handleTermsOfService}>
          <Text style={styles.settingText}>Terms of Service</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem} onPress={handleAbout}>
          <Text style={styles.settingText}>About</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Section */}
      <View style={styles.section}>
        <TouchableOpacity style={[styles.settingItem, styles.logoutItem]} onPress={handleLogout}>
          <Text style={[styles.settingText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: Colors.themeYellowColor,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  chevron: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: 'bold',
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#ff4444',
    fontWeight: 'bold',
  },
});

export default Settings;
