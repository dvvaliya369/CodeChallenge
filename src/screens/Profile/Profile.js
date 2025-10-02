import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Style from '../../styles/Style';

const Profile = ({ navigation }) => {
return(
    <View style={Style.searchView}>
        <Text style={Style.searchText}>Profile screen</Text>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Settings')}
            style={{
                marginTop: 20,
                backgroundColor: '#FFB800',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 8,
            }}
        >
            <Text style={{ color: 'white', fontWeight: '600' }}>Go to Settings</Text>
        </TouchableOpacity>
    </View>
)
}

export default Profile;