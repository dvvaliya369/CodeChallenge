import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Style from '../../styles/Style';

const Profile = ({ navigation }) => {
return(
    <View style={Style.searchView}>
        <Text style={Style.searchText}>Profile screen</Text>
        <TouchableOpacity 
            style={{
                backgroundColor: '#FFC107',
                padding: 15,
                borderRadius: 8,
                marginTop: 20,
                marginHorizontal: 20,
                alignItems: 'center'
            }}
            onPress={() => navigation.navigate('About')}
        >
            <Text style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold'
            }}>
                About App
            </Text>
        </TouchableOpacity>
    </View>
)
}

export default Profile;