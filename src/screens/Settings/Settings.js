import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Alert
} from 'react-native';
import Colors from '../../utilities/Colors';

const Settings = ({ navigation }) => {
    const handleSettingPress = (setting) => {
        Alert.alert('Settings', `${setting} pressed`);
    };

    const settingsOptions = [
        { title: 'Account Settings', description: 'Manage your account preferences' },
        { title: 'Notifications', description: 'Configure notification settings' },
        { title: 'Privacy & Security', description: 'Privacy and security options' },
        { title: 'App Preferences', description: 'Customize app behavior' },
        { title: 'Help & Support', description: 'Get help and contact support' },
        { title: 'About', description: 'App information and version' },
    ];

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
            </View>
            
            <ScrollView style={styles.content}>
                <View style={styles.settingsContainer}>
                    {settingsOptions.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.settingItem}
                            onPress={() => handleSettingPress(option.title)}
                        >
                            <View style={styles.settingContent}>
                                <Text style={styles.settingTitle}>{option.title}</Text>
                                <Text style={styles.settingDescription}>{option.description}</Text>
                            </View>
                            <Text style={styles.settingArrow}>→</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                
                <View style={styles.appInfo}>
                    <Text style={styles.appInfoText}>CodeChallenge App</Text>
                    <Text style={styles.appVersionText}>Version 2.0.0</Text>
                    <Text style={styles.appVersionText}>React Native 0.81.4</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    backButton: {
        padding: 8,
    },
    backButtonText: {
        fontSize: 16,
        color: Colors.themeYellowColor || '#007AFF',
        fontWeight: '500',
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 50, // Balance the back button width
    },
    content: {
        flex: 1,
    },
    settingsContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        marginHorizontal: 16,
        overflow: 'hidden',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    settingContent: {
        flex: 1,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    settingDescription: {
        fontSize: 14,
        color: '#666',
    },
    settingArrow: {
        fontSize: 18,
        color: '#ccc',
        marginLeft: 8,
    },
    appInfo: {
        marginTop: 30,
        marginHorizontal: 16,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
    },
    appInfoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    appVersionText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
});

export default Settings;
