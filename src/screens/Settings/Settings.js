import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utilities/Colors';
import Style from '../../styles/Style';

const Settings = ({navigation}) => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  const settingsOptions = [
    {
      id: 1,
      title: 'Account Settings',
      icon: 'person',
      action: () => {
        Alert.alert('Account Settings', 'Account settings coming soon!');
      },
    },
    {
      id: 2,
      title: 'Privacy & Security',
      icon: 'lock',
      action: () => {
        Alert.alert('Privacy & Security', 'Privacy settings coming soon!');
      },
    },
    {
      id: 3,
      title: 'Recipe Preferences',
      icon: 'restaurant',
      action: () => {
        Alert.alert('Recipe Preferences', 'Recipe preferences coming soon!');
      },
    },
    {
      id: 4,
      title: 'Help & Support',
      icon: 'help',
      action: () => {
        Alert.alert('Help & Support', 'Contact support at help@codechallenge.com');
      },
    },
    {
      id: 5,
      title: 'About',
      icon: 'info',
      action: () => {
        Alert.alert(
          'About CodeChallenge',
          'Version 1.0.0\nA recipe sharing social app\n\nDeveloped by Dharmendra Valiya',
        );
      },
    },
  ];

  const renderSettingItem = item => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingItem}
      onPress={item.action}>
      <View style={styles.settingItemLeft}>
        <Icon name={item.icon} size={24} color={Colors.themeYellowColor} />
        <Text style={styles.settingItemText}>{item.title}</Text>
      </View>
      <Icon name="chevron-right" size={24} color={Colors.themeLightGrayTextColor} />
    </TouchableOpacity>
  );

  const renderToggleItem = (title, value, onValueChange, description) => (
    <View style={styles.toggleItem}>
      <View style={styles.toggleItemLeft}>
        <Text style={styles.settingItemText}>{title}</Text>
        {description && (
          <Text style={styles.settingItemDescription}>{description}</Text>
        )}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: Colors.themeLightGrayTextColor,
          true: Colors.themeYellowColor,
        }}
        thumbColor={value ? Colors.themeYellowColor : Colors.themeLightGrayTextColor}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          {renderToggleItem(
            'Push Notifications',
            pushNotifications,
            setPushNotifications,
            'Receive notifications for likes, comments, and new followers',
          )}
          {renderToggleItem(
            'Email Notifications',
            emailNotifications,
            setEmailNotifications,
            'Receive recipe recommendations and app updates via email',
          )}
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          {renderToggleItem(
            'Dark Mode',
            darkMode,
            setDarkMode,
            'Enable dark theme for better viewing in low light',
          )}
        </View>

        {/* App Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Preferences</Text>
          {renderToggleItem(
            'Auto-save Drafts',
            autoSave,
            setAutoSave,
            'Automatically save recipe drafts while typing',
          )}
        </View>

        {/* General Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          {settingsOptions.map(renderSettingItem)}
        </View>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>CodeChallenge v1.0.0</Text>
          <Text style={styles.versionSubText}>Built with React Native 0.73.8</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Inter-Bold',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.themeYellowColor,
    marginBottom: 15,
    fontFamily: 'Inter-SemiBold',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingItemText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 15,
    fontFamily: 'Inter-Medium',
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  toggleItemLeft: {
    flex: 1,
  },
  settingItemDescription: {
    fontSize: 12,
    color: Colors.themeLightGrayTextColor,
    marginTop: 5,
    fontFamily: 'Inter-Regular',
  },
  versionContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: 20,
  },
  versionText: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
    fontFamily: 'Inter-Medium',
  },
  versionSubText: {
    fontSize: 12,
    color: Colors.themeLightGrayTextColor,
    marginTop: 5,
    fontFamily: 'Inter-Regular',
  },
});

export default Settings;
