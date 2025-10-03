import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Switch,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../utilities/Colors';
import Style from '../../styles/Style';

const Settings = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [locationEnabled, setLocationEnabled] = useState(true);
    const [autoSaveEnabled, setAutoSaveEnabled] = useState(false);

    const settingsSections = [
        {
            title: 'Account',
            items: [
                {
                    id: 'profile',
                    title: 'Edit Profile',
                    icon: 'person-outline',
                    onPress: () => navigation.navigate('Profile')
                },
                {
                    id: 'privacy',
                    title: 'Privacy Settings',
                    icon: 'lock-closed-outline',
                    onPress: () => Alert.alert('Coming Soon', 'Privacy settings will be available in future updates.')
                },
                {
                    id: 'security',
                    title: 'Security',
                    icon: 'shield-outline',
                    onPress: () => Alert.alert('Coming Soon', 'Security settings will be available in future updates.')
                }
            ]
        },
        {
            title: 'Preferences',
            items: [
                {
                    id: 'notifications',
                    title: 'Push Notifications',
                    icon: 'notifications-outline',
                    type: 'switch',
                    value: notificationsEnabled,
                    onToggle: setNotificationsEnabled
                },
                {
                    id: 'darkMode',
                    title: 'Dark Mode',
                    icon: 'moon-outline',
                    type: 'switch',
                    value: darkModeEnabled,
                    onToggle: setDarkModeEnabled
                },
                {
                    id: 'location',
                    title: 'Location Services',
                    icon: 'location-outline',
                    type: 'switch',
                    value: locationEnabled,
                    onToggle: setLocationEnabled
                },
                {
                    id: 'autoSave',
                    title: 'Auto-save Recipes',
                    icon: 'save-outline',
                    type: 'switch',
                    value: autoSaveEnabled,
                    onToggle: setAutoSaveEnabled
                }
            ]
        },
        {
            title: 'Support',
            items: [
                {
                    id: 'help',
                    title: 'Help Center',
                    icon: 'help-circle-outline',
                    onPress: () => Alert.alert('Help Center', 'Visit our help center for FAQs and troubleshooting guides.')
                },
                {
                    id: 'contact',
                    title: 'Contact Us',
                    icon: 'mail-outline',
                    onPress: () => Alert.alert('Contact Us', 'Send us an email at support@codechallenge.com')
                },
                {
                    id: 'feedback',
                    title: 'Send Feedback',
                    icon: 'chatbubble-outline',
                    onPress: () => Alert.alert('Feedback', 'Thank you for your interest in providing feedback!')
                }
            ]
        },
        {
            title: 'About',
            items: [
                {
                    id: 'version',
                    title: 'App Version',
                    icon: 'information-circle-outline',
                    subtitle: '1.0.0',
                    onPress: () => Alert.alert('App Version', 'CodeChallenge v1.0.0\n\nBuilt with React Native 0.73.2')
                },
                {
                    id: 'terms',
                    title: 'Terms of Service',
                    icon: 'document-text-outline',
                    onPress: () => Alert.alert('Coming Soon', 'Terms of service will be available soon.')
                },
                {
                    id: 'privacy-policy',
                    title: 'Privacy Policy',
                    icon: 'shield-checkmark-outline',
                    onPress: () => Alert.alert('Coming Soon', 'Privacy policy will be available soon.')
                }
            ]
        }
    ];

    const renderSettingItem = (item) => (
        <TouchableOpacity
            key={item.id}
            style={styles.settingItem}
            onPress={item.onPress}
            disabled={item.type === 'switch'}
        >
            <View style={styles.settingItemLeft}>
                <Icon 
                    name={item.icon} 
                    size={24} 
                    color={Colors.themeYellowColor} 
                    style={styles.settingIcon}
                />
                <View style={styles.settingTextContainer}>
                    <Text style={styles.settingTitle}>{item.title}</Text>
                    {item.subtitle && (
                        <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                    )}
                </View>
            </View>
            <View style={styles.settingItemRight}>
                {item.type === 'switch' ? (
                    <Switch
                        value={item.value}
                        onValueChange={item.onToggle}
                        trackColor={{ 
                            false: Colors.themeLightGrayTextColor, 
                            true: Colors.themeYellowColor 
                        }}
                        thumbColor={item.value ? '#fff' : '#f4f3f4'}
                    />
                ) : (
                    <Icon 
                        name="chevron-forward" 
                        size={20} 
                        color={Colors.themeLightGrayTextColor} 
                    />
                )}
            </View>
        </TouchableOpacity>
    );

    const renderSection = (section) => (
        <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
                {section.items.map(renderSettingItem)}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()} 
                    style={styles.backButton}
                >
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={styles.placeholder} />
            </View>

            {/* Content */}
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {settingsSections.map(renderSection)}
                
                {/* Sign Out Button */}
                <TouchableOpacity 
                    style={styles.signOutButton}
                    onPress={() => Alert.alert(
                        'Sign Out',
                        'Are you sure you want to sign out?',
                        [
                            { text: 'Cancel', style: 'cancel' },
                            { text: 'Sign Out', style: 'destructive', onPress: () => {
                                Alert.alert('Signed Out', 'You have been signed out successfully.');
                            }}
                        ]
                    )}
                >
                    <Icon name="log-out-outline" size={24} color="#FF6B6B" />
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>
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
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    placeholder: {
        width: 34, // Same width as back button for centering
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 30,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.themeLightGrayTextColor,
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    sectionContent: {
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f3f4',
    },
    settingItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingIcon: {
        marginRight: 15,
    },
    settingTextContainer: {
        flex: 1,
    },
    settingTitle: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },
    settingSubtitle: {
        fontSize: 14,
        color: Colors.themeLightGrayTextColor,
        marginTop: 2,
    },
    settingItemRight: {
        marginLeft: 10,
    },
    signOutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    signOutText: {
        fontSize: 16,
        color: '#FF6B6B',
        fontWeight: '600',
        marginLeft: 10,
    },
});

export default Settings;
