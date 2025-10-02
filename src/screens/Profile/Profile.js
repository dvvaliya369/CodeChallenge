import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Style from '../../styles/Style';
import Colors from '../../utilities/Colors';

const Profile = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Profile</Text>
                <TouchableOpacity 
                    style={styles.settingsButton}
                    onPress={() => navigation.navigate('Settings')}>
                    <Icon name="settings" size={24} color={Colors.themeYellowColor} />
                </TouchableOpacity>
            </View>
            <View style={Style.searchView}>
                <Text style={Style.searchText}>Profile screen</Text>
                <Text style={styles.subtitle}>Tap the settings icon to access app settings</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Inter-Bold',
    },
    settingsButton: {
        padding: 5,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.themeLightGrayTextColor,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Inter-Regular',
    },
});

export default Profile;