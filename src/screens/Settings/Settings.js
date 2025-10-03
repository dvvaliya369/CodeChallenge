import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utilities/Colors';

const Settings = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const settingsOptions = [
    {
      id: 'account',
      title: 'Account Settings',
      icon: 'person',
      onPress: () => Alert.alert('Account Settings', 'Account settings coming soon!'),
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: 'lock',
      onPress: () => Alert.alert('Privacy', 'Privacy settings coming soon!'),
    },
    {
      id: 'language',
      title: 'Language',
      icon: 'language',
      subtitle: 'English',
      onPress: () => Alert.alert('Language', 'Language selection coming soon!'),
    },
    {
      id: 'help',
      title: 'Help & Support',
      icon: 'help',
      onPress: () => Alert.alert('Help', 'Help center coming soon!'),
    },
    {
      id: 'about',
      title: 'About',
      icon: 'info',
      onPress: () => Alert.alert('About', 'CodeChallenge v1.0.0\nBuilt with React Native'),
    },
  ];

  const renderSettingItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingItem}
      onPress={item.onPress}
    >
      <View style={styles.settingItemLeft}>
        <Icon name={item.icon} size={24} color={Colors.themeYellowColor} />
        <View style={styles.settingTextContainer}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          {item.subtitle && (
            <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
          )}
        </View>
      </View>
      <Icon name="chevron-right" size={24} color={Colors.themeLightGrayTextColor} />
    </TouchableOpacity>
  );

  const renderToggleItem = (title, icon, value, onValueChange) => (
    <View key={title} style={styles.settingItem}>
      <View style={styles.settingItemLeft}>
        <Icon name={icon} size={24} color={Colors.themeYellowColor} />
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: Colors.themeLightGrayTextColor, true: Colors.themeYellowColor }}
        thumbColor={value ? Colors.white : Colors.themeLightGrayTextColor}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        {renderToggleItem(
          'Push Notifications',
          'notifications',
          notifications,
          setNotifications
        )}
        {renderToggleItem(
          'Dark Mode',
          'brightness-4',
          darkMode,
          setDarkMode
        )}
        {renderToggleItem(
          'Auto-play Videos',
          'play-circle',
          autoPlay,
          setAutoPlay
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        {settingsOptions.map(renderSettingItem)}
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Logout', style: 'destructive' },
          ])}
        >
          <Icon name="logout" size={24} color={Colors.white} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>CodeChallenge v1.0.0</Text>
        <Text style={styles.footerSubtext}>Made with ❤️ by Dharmendra Valiya</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 50,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.themeLightGrayColor,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.themeLightGrayColor,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
  },
  settingSubtitle: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.themeRedColor || '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: Colors.themeLightGrayTextColor,
    fontWeight: '500',
  },
  footerSubtext: {
    fontSize: 12,
    color: Colors.themeLightGrayTextColor,
    marginTop: 5,
  },
});

export default Settings;
