import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Style from '../../styles/Style';

const Profile = ({ navigation }) => {
return(
    <View style={Style.searchView}>
        <Text style={Style.searchText}>Profile screen</Text>
        
        {/* Settings Button */}
        <TouchableOpacity 
            style={{
                position: 'absolute',
                top: 50,
                right: 20,
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 25,
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}
            onPress={() => navigation.navigate('Settings')}
        >
            <Icon name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
    </View>
)
}

export default Profile;