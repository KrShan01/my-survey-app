import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

      const goToMyAccount = () => {
        navigation.navigate('MyAccount');
      };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 50, paddingHorizontal: 20, backgroundColor: '#FF6600',
       }}>
        <Text>Home</Text>
        <TouchableOpacity onPress={goToMyAccount}>
          <Text>My Account</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to your Home Screen!</Text>
      </View>
    </View>
  );
};

export default HomeScreen;