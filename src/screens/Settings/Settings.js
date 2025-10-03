import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Colors from '../../utilities/Colors';
import Style from '../../styles/Style';

const Settings = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const [locationEnabled, setLocationEnabled] = React.useState(true);

  const settingsOptions = [
    {
      title: 'Account Settings',
      description: 'Manage your account information',
      onPress: () => console.log('Account Settings pressed'),
    },
    {
      title: 'Privacy',
      description: 'Control your privacy settings',
      onPress: () => console.log('Privacy pressed'),
    },
    {
      title: 'Help & Support',
      description: 'Get help and contact support',
      onPress: () => console.log('Help & Support pressed'),
    },
    {
      title: 'About',
      description: 'App information and version',
      onPress: () => console.log('About pressed'),
    },
  ];

  const renderSettingItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.settingItem}
      onPress={item.onPress}
    >
      <View style={styles.settingTextContainer}>
        <Text style={styles.settingTitle}>{item.title}</Text>
        <Text style={styles.settingDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSwitchItem = (title, description, value, onValueChange) => (
    <View style={styles.settingItem}>
      <View style={styles.settingTextContainer}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: Colors.themeLightGrayTextColor, true: Colors.themeYellowColor }}
        thumbColor={value ? '#ffffff' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          {renderSwitchItem(
            'Push Notifications',
            'Receive notifications for new recipes and updates',
            notificationsEnabled,
            setNotificationsEnabled
          )}
          
          {renderSwitchItem(
            'Dark Mode',
            'Switch to dark theme for better night viewing',
            darkModeEnabled,
            setDarkModeEnabled
          )}
          
          {renderSwitchItem(
            'Location Services',
            'Allow app to access your location for better recommendations',
            locationEnabled,
            setLocationEnabled
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          {settingsOptions.map((item, index) => renderSettingItem(item, index))}
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Settings;
