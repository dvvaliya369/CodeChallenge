import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Style from '../../styles/Style';

const Profile = () => {
    const navigation = useNavigation();
    
    return(
        <View style={Style.searchView}>
            <Text style={Style.searchText}>Profile screen</Text>
            <TouchableOpacity 
                style={{
                    backgroundColor: '#007AFF',
                    padding: 15,
                    borderRadius: 8,
                    marginTop: 20,
                    marginHorizontal: 20,
                }}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: '600'
                }}>
                    Go to Settings
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;