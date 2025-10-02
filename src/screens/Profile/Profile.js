import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Style from '../../styles/Style';

const Profile = ({ navigation }) => {
return(
    <View style={Style.searchView}>
        <Text style={Style.searchText}>Profile screen</Text>
        
        <TouchableOpacity 
            style={{
                backgroundColor: '#FFD700',
                padding: 15,
                borderRadius: 8,
                margin: 20,
                alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Recipes')}
        >
            <Text style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
            }}>
                View My Recipes
            </Text>
        </TouchableOpacity>
    </View>
)
}

export default Profile;