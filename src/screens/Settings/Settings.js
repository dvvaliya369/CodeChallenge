import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    Switch,
} from 'react-native';
import Colors from '../../utilities/Colors';
import Style from '../../styles/Style';

const Settings = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

    const SettingsItem = ({ title, onPress, showArrow = true, children }) => (
        <TouchableOpacity 
            style={styles.settingsItem} 
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.settingsItemContent}>
                <Text style={styles.settingsItemTitle}>{title}</Text>
                {children}
                {showArrow && !children && (
                    <Text style={styles.arrow}>→</Text>
                )}
            </View>
        </TouchableOpacity>
    );

    const SettingsSection = ({ title, children }) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView style={styles.content}>
                <SettingsSection title="Account">
                    <SettingsItem 
                        title="Edit Profile"
                        onPress={() => {
                            // Navigate to edit profile
                            console.log('Navigate to edit profile');
                        }}
                    />
                    <SettingsItem 
                        title="Change Password"
                        onPress={() => {
                            console.log('Navigate to change password');
                        }}
                    />
                    <SettingsItem 
                        title="Privacy Settings"
                        onPress={() => {
                            console.log('Navigate to privacy settings');
                        }}
                    />
                </SettingsSection>

                <SettingsSection title="Preferences">
                    <SettingsItem 
                        title="Notifications"
                        showArrow={false}
                    >
                        <Switch
                            trackColor={{ false: Colors.themeLightGrayTextColor, true: Colors.themeYellowColor }}
                            thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor={Colors.themeLightGrayTextColor}
                            onValueChange={setNotificationsEnabled}
                            value={notificationsEnabled}
                        />
                    </SettingsItem>
                    
                    <SettingsItem 
                        title="Dark Mode"
                        showArrow={false}
                    >
                        <Switch
                            trackColor={{ false: Colors.themeLightGrayTextColor, true: Colors.themeYellowColor }}
                            thumbColor={darkModeEnabled ? '#fff' : '#f4f3f4'}
                            ios_backgroundColor={Colors.themeLightGrayTextColor}
                            onValueChange={setDarkModeEnabled}
                            value={darkModeEnabled}
                        />
                    </SettingsItem>

                    <SettingsItem 
                        title="Language"
                        onPress={() => {
                            console.log('Navigate to language settings');
                        }}
                    />
                </SettingsSection>

                <SettingsSection title="Support">
                    <SettingsItem 
                        title="Help Center"
                        onPress={() => {
                            console.log('Navigate to help center');
                        }}
                    />
                    <SettingsItem 
                        title="Contact Us"
                        onPress={() => {
                            console.log('Navigate to contact us');
                        }}
                    />
                    <SettingsItem 
                        title="Report a Problem"
                        onPress={() => {
                            console.log('Navigate to report problem');
                        }}
                    />
                </SettingsSection>

                <SettingsSection title="About">
                    <SettingsItem 
                        title="Terms of Service"
                        onPress={() => {
                            console.log('Navigate to terms of service');
                        }}
                    />
                    <SettingsItem 
                        title="Privacy Policy"
                        onPress={() => {
                            console.log('Navigate to privacy policy');
                        }}
                    />
                    <SettingsItem 
                        title="App Version"
                        showArrow={false}
                    >
                        <Text style={styles.versionText}>1.0.0</Text>
                    </SettingsItem>
                </SettingsSection>

                <View style={styles.logoutContainer}>
                    <TouchableOpacity 
                        style={styles.logoutButton}
                        onPress={() => {
                            console.log('Logout pressed');
                        }}
                    >
                        <Text style={styles.logoutButtonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    backButton: {
        padding: 5,
    },
    backButtonText: {
        fontSize: 16,
        color: Colors.themeYellowColor,
        fontWeight: '500',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    placeholder: {
        width: 50,
    },
    content: {
        flex: 1,
        paddingTop: 10,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.themeLightGrayTextColor,
        marginBottom: 10,
        marginLeft: 20,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    settingsItem: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f0f0f0',
    },
    settingsItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    settingsItemTitle: {
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
    arrow: {
        fontSize: 18,
        color: Colors.themeLightGrayTextColor,
        marginLeft: 10,
    },
    versionText: {
        fontSize: 14,
        color: Colors.themeLightGrayTextColor,
    },
    logoutContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    logoutButton: {
        backgroundColor: '#ff4444',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Settings;
