import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Style from '../../styles/Style';
import Colors from '../../utilities/Colors';

const Profile = ({ navigation }) => {
    return(
        <View style={Style.searchView}>
            <Text style={Style.searchText}>Profile screen</Text>
            
            {/* Settings Button */}
            <TouchableOpacity 
                style={styles.settingsButton}
                onPress={() => navigation.navigate('Settings')}
            >
                <Icon name="settings" size={24} color="#FFFFFF" />
                <Text style={styles.settingsButtonText}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    settingsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.themeYellowColor,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 25,
        marginTop: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    settingsButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
};

export default Profile;