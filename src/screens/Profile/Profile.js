import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from '../../styles/Style';
import Colors from '../../utilities/Colors';

const Profile = ({ navigation }) => {
  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={Style.searchView}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20
      }}>
        <Text style={[Style.searchText, { fontSize: 24, fontWeight: 'bold' }]}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={handleSettingsPress}
          style={{
            padding: 8,
            borderRadius: 20,
            backgroundColor: Colors.categoryTypeLightGreyColor
          }}
        >
          <Icon name="settings" size={24} color={Colors.themePoloBlueColor} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={Style.searchText}>Profile content coming soon!</Text>
        <Text style={[Style.searchText, { marginTop: 10, fontSize: 14 }]}>
          Tap the settings icon to access app settings
        </Text>
      </View>
    </View>
  );
};

export default Profile;