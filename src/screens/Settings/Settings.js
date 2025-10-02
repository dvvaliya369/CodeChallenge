import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Switch,
    Alert,
    Platform,
} from 'react-native';
import { Card, Divider, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utilities/Colors';
import Style from '../../styles/Style';

const Settings = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [locationEnabled, setLocationEnabled] = useState(false);

    const handleAbout = () => {
        Alert.alert(
            'About CodeChallenge',
            'Recipe sharing app built with React Native\nVersion 1.0.0\n\nDeveloped by: Dharmendra Valiya',
            [{ text: 'OK', style: 'default' }]
        );
    };

    const handleSupport = () => {
        Alert.alert(
            'Support',
            'Need help? Contact us at:\nsupport@codechallenge.com',
            [{ text: 'OK', style: 'default' }]
        );
    };

    const handlePrivacy = () => {
        Alert.alert(
            'Privacy Policy',
            'Your privacy is important to us. We collect and use your information in accordance with our privacy policy.',
            [{ text: 'OK', style: 'default' }]
        );
    };

    const SettingsItem = ({ 
        title, 
        subtitle, 
        icon, 
        onPress, 
        hasSwitch = false, 
        switchValue = false, 
        onSwitchChange 
    }) => (
        <TouchableOpacity 
            style={styles.settingsItem} 
            onPress={onPress}
            disabled={hasSwitch}
        >
            <View style={styles.settingsItemLeft}>
                <Icon 
                    name={icon} 
                    size={24} 
                    color={Colors.themeYellowColor} 
                    style={styles.settingsIcon}
                />
                <View>
                    <Text style={styles.settingsTitle}>{title}</Text>
                    {subtitle && <Text style={styles.settingsSubtitle}>{subtitle}</Text>}
                </View>
            </View>
            {hasSwitch ? (
                <Switch
                    value={switchValue}
                    onValueChange={onSwitchChange}
                    trackColor={{ false: '#E0E0E0', true: Colors.themeYellowColor }}
                    thumbColor={switchValue ? '#FFFFFF' : '#f4f3f4'}
                />
            ) : (
                <Icon 
                    name="chevron-right" 
                    size={24} 
                    color={Colors.themeLightGrayTextColor}
                />
            )}
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Profile Section */}
            <Card style={styles.profileCard}>
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <Icon name="person" size={40} color="#FFFFFF" />
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>John Doe</Text>
                        <Text style={styles.profileEmail}>john.doe@example.com</Text>
                    </View>
                    <TouchableOpacity style={styles.editProfileButton}>
                        <Icon name="edit" size={20} color={Colors.themeYellowColor} />
                    </TouchableOpacity>
                </View>
            </Card>

            {/* Preferences Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Preferences</Text>
                <Card style={styles.settingsCard}>
                    <SettingsItem
                        title="Push Notifications"
                        subtitle="Receive notifications for new recipes and updates"
                        icon="notifications"
                        hasSwitch={true}
                        switchValue={notificationsEnabled}
                        onSwitchChange={setNotificationsEnabled}
                    />
                    <Divider />
                    <SettingsItem
                        title="Dark Mode"
                        subtitle="Switch to dark theme"
                        icon="dark-mode"
                        hasSwitch={true}
                        switchValue={darkModeEnabled}
                        onSwitchChange={setDarkModeEnabled}
                    />
                    <Divider />
                    <SettingsItem
                        title="Location Services"
                        subtitle="Find recipes near you"
                        icon="location-on"
                        hasSwitch={true}
                        switchValue={locationEnabled}
                        onSwitchChange={setLocationEnabled}
                    />
                </Card>
            </View>

            {/* Account Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account</Text>
                <Card style={styles.settingsCard}>
                    <SettingsItem
                        title="My Recipes"
                        subtitle="View and manage your recipes"
                        icon="restaurant-menu"
                        onPress={() => Alert.alert('My Recipes', 'Navigate to My Recipes screen')}
                    />
                    <Divider />
                    <SettingsItem
                        title="Saved Recipes"
                        subtitle="Your favorite recipes"
                        icon="favorite"
                        onPress={() => Alert.alert('Saved Recipes', 'Navigate to Saved Recipes screen')}
                    />
                    <Divider />
                    <SettingsItem
                        title="Recipe History"
                        subtitle="Recently viewed recipes"
                        icon="history"
                        onPress={() => Alert.alert('Recipe History', 'Navigate to Recipe History screen')}
                    />
                </Card>
            </View>

            {/* Support Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Support</Text>
                <Card style={styles.settingsCard}>
                    <SettingsItem
                        title="Help & FAQ"
                        subtitle="Get help with common questions"
                        icon="help"
                        onPress={handleSupport}
                    />
                    <Divider />
                    <SettingsItem
                        title="Privacy Policy"
                        subtitle="Learn how we protect your data"
                        icon="privacy-tip"
                        onPress={handlePrivacy}
                    />
                    <Divider />
                    <SettingsItem
                        title="About"
                        subtitle="App version and information"
                        icon="info"
                        onPress={handleAbout}
                    />
                </Card>
            </View>

            {/* Sign Out Button */}
            <TouchableOpacity 
                style={styles.signOutButton}
                onPress={() => Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Sign Out', style: 'destructive' }
                ])}
            >
                <Icon name="logout" size={20} color="#FFFFFF" />
                <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>

            <View style={styles.bottomSpacer} />
        </ScrollView>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    profileCard: {
        margin: 16,
        elevation: 2,
        borderRadius: 12,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.themeYellowColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileInfo: {
        flex: 1,
        marginLeft: 16,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    profileEmail: {
        fontSize: 14,
        color: Colors.themeLightGrayTextColor,
        marginTop: 2,
    },
    editProfileButton: {
        padding: 8,
    },
    section: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        marginLeft: 4,
    },
    settingsCard: {
        elevation: 2,
        borderRadius: 12,
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    settingsItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingsIcon: {
        marginRight: 16,
    },
    settingsTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    settingsSubtitle: {
        fontSize: 12,
        color: Colors.themeLightGrayTextColor,
        marginTop: 2,
    },
    signOutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E74C3C',
        marginHorizontal: 16,
        marginTop: 16,
        paddingVertical: 14,
        borderRadius: 12,
        elevation: 2,
    },
    signOutText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    bottomSpacer: {
        height: 20,
    },
};

export default Settings;
