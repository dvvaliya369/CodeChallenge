import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Switch,
    Alert,
    Image,
    SafeAreaView,
    Dimensions
} from 'react-native';
import Colors from '../../utilities/Colors';
import Style from '../../styles/Style';

const { width, height } = Dimensions.get('window');

const Settings = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [autoPlayEnabled, setAutoPlayEnabled] = useState(false);
    const [locationEnabled, setLocationEnabled] = useState(true);

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    style: 'destructive',
                    onPress: () => {
                        // Handle logout logic here
                        Alert.alert('Logged out', 'You have been successfully logged out.');
                    },
                },
            ]
        );
    };

    const handleDeleteAccount = () => {
        Alert.alert(
            'Delete Account',
            'This action cannot be undone. Are you sure you want to delete your account?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        Alert.alert('Account Deleted', 'Your account has been deleted.');
                    },
                },
            ]
        );
    };

    const SettingRow = ({ title, subtitle, onPress, rightComponent, showArrow = false }) => (
        <TouchableOpacity
            style={styles.settingRow}
            onPress={onPress}
            disabled={!onPress && !showArrow}
        >
            <View style={styles.settingLeft}>
                <Text style={styles.settingTitle}>{title}</Text>
                {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
            </View>
            <View style={styles.settingRight}>
                {rightComponent}
                {showArrow && (
                    <Text style={styles.arrow}>›</Text>
                )}
            </View>
        </TouchableOpacity>
    );

    const SectionHeader = ({ title }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Settings</Text>
                    <Text style={styles.headerSubtitle}>Customize your app experience</Text>
                </View>

                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
                        }}
                        style={styles.profileImage}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>John Doe</Text>
                        <Text style={styles.profileEmail}>john.doe@example.com</Text>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                </View>

                {/* App Settings */}
                <SectionHeader title="App Settings" />
                <View style={styles.settingsGroup}>
                    <SettingRow
                        title="Push Notifications"
                        subtitle="Receive recipe updates and likes"
                        rightComponent={
                            <Switch
                                value={notificationsEnabled}
                                onValueChange={setNotificationsEnabled}
                                trackColor={{ false: '#E5E5E5', true: Colors.themeYellowColor }}
                                thumbColor={notificationsEnabled ? '#FFF' : '#FFF'}
                            />
                        }
                    />
                    
                    <SettingRow
                        title="Dark Mode"
                        subtitle="Switch to dark theme"
                        rightComponent={
                            <Switch
                                value={darkModeEnabled}
                                onValueChange={setDarkModeEnabled}
                                trackColor={{ false: '#E5E5E5', true: Colors.themeYellowColor }}
                                thumbColor={darkModeEnabled ? '#FFF' : '#FFF'}
                            />
                        }
                    />
                    
                    <SettingRow
                        title="Auto-play Videos"
                        subtitle="Automatically play recipe videos"
                        rightComponent={
                            <Switch
                                value={autoPlayEnabled}
                                onValueChange={setAutoPlayEnabled}
                                trackColor={{ false: '#E5E5E5', true: Colors.themeYellowColor }}
                                thumbColor={autoPlayEnabled ? '#FFF' : '#FFF'}
                            />
                        }
                    />
                    
                    <SettingRow
                        title="Location Services"
                        subtitle="Find recipes near you"
                        rightComponent={
                            <Switch
                                value={locationEnabled}
                                onValueChange={setLocationEnabled}
                                trackColor={{ false: '#E5E5E5', true: Colors.themeYellowColor }}
                                thumbColor={locationEnabled ? '#FFF' : '#FFF'}
                            />
                        }
                    />
                </View>

                {/* Content Settings */}
                <SectionHeader title="Content" />
                <View style={styles.settingsGroup}>
                    <SettingRow
                        title="Dietary Preferences"
                        subtitle="Vegetarian, Vegan, Gluten-free"
                        showArrow={true}
                        onPress={() => Alert.alert('Dietary Preferences', 'Feature coming soon!')}
                    />
                    
                    <SettingRow
                        title="Recipe Difficulty"
                        subtitle="Beginner, Intermediate, Advanced"
                        showArrow={true}
                        onPress={() => Alert.alert('Recipe Difficulty', 'Feature coming soon!')}
                    />
                    
                    <SettingRow
                        title="Cooking Time Preference"
                        subtitle="Quick meals, Standard, Slow cooking"
                        showArrow={true}
                        onPress={() => Alert.alert('Cooking Time', 'Feature coming soon!')}
                    />
                </View>

                {/* Privacy & Security */}
                <SectionHeader title="Privacy & Security" />
                <View style={styles.settingsGroup}>
                    <SettingRow
                        title="Privacy Settings"
                        subtitle="Control who can see your recipes"
                        showArrow={true}
                        onPress={() => Alert.alert('Privacy Settings', 'Feature coming soon!')}
                    />
                    
                    <SettingRow
                        title="Blocked Users"
                        subtitle="Manage blocked accounts"
                        showArrow={true}
                        onPress={() => Alert.alert('Blocked Users', 'Feature coming soon!')}
                    />
                    
                    <SettingRow
                        title="Data Usage"
                        subtitle="Download on Wi-Fi only"
                        showArrow={true}
                        onPress={() => Alert.alert('Data Usage', 'Feature coming soon!')}
                    />
                </View>

                {/* Support */}
                <SectionHeader title="Support" />
                <View style={styles.settingsGroup}>
                    <SettingRow
                        title="Help Center"
                        subtitle="Get help with the app"
                        showArrow={true}
                        onPress={() => Alert.alert('Help Center', 'Feature coming soon!')}
                    />
                    
                    <SettingRow
                        title="Report a Problem"
                        subtitle="Let us know about issues"
                        showArrow={true}
                        onPress={() => Alert.alert('Report Problem', 'Feature coming soon!')}
                    />
                    
                    <SettingRow
                        title="Rate the App"
                        subtitle="Share your feedback"
                        showArrow={true}
                        onPress={() => Alert.alert('Rate App', 'Thank you for your support!')}
                    />
                </View>

                {/* Account Actions */}
                <SectionHeader title="Account" />
                <View style={styles.settingsGroup}>
                    <SettingRow
                        title="Logout"
                        onPress={handleLogout}
                        rightComponent={<Text style={styles.logoutText}>Logout</Text>}
                    />
                    
                    <SettingRow
                        title="Delete Account"
                        subtitle="Permanently delete your account"
                        onPress={handleDeleteAccount}
                        rightComponent={<Text style={styles.deleteText}>Delete</Text>}
                    />
                </View>

                {/* App Info */}
                <View style={styles.appInfo}>
                    <Text style={styles.appVersion}>Recipe App v1.0.0</Text>
                    <Text style={styles.appBuild}>Build 2024.10.03</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    scrollContainer: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 3,
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
    },
    editButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: Colors.themeYellowColor || '#FFB800',
        borderRadius: 20,
    },
    editButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#F8F9FA',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    settingsGroup: {
        backgroundColor: 'white',
        marginBottom: 10,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        minHeight: 60,
    },
    settingLeft: {
        flex: 1,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1a1a1a',
        marginBottom: 2,
    },
    settingSubtitle: {
        fontSize: 13,
        color: '#666',
    },
    settingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrow: {
        fontSize: 20,
        color: '#C7C7CC',
        marginLeft: 10,
    },
    logoutText: {
        color: '#007AFF',
        fontWeight: '500',
        fontSize: 16,
    },
    deleteText: {
        color: '#FF3B30',
        fontWeight: '500',
        fontSize: 16,
    },
    appInfo: {
        alignItems: 'center',
        paddingVertical: 30,
        paddingBottom: 50,
    },
    appVersion: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    appBuild: {
        fontSize: 12,
        color: '#999',
    },
};

export default Settings;
