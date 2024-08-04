import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();

  const userName = "Shantanu Kumar"; // Replace with dynamic user name

  const goToProfile = () => {
    // Navigate to Profile screen
    // Example: navigation.navigate('Profile');
    // Replace 'Profile' with your actual screen name
  };

  const goToMySurveys = () => {
    // Navigate to My Surveys screen
    // Example: navigation.navigate('MySurveys');
    // Replace 'MySurveys' with your actual screen name
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.name}>{userName}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={goToProfile} style={styles.optionItem}>
          <Text style={styles.optionText}>Profile</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={goToMySurveys} style={styles.optionItem}>
          <Text style={styles.optionText}>My Surveys</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333333',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#333333',
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
  logoutButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default AccountScreen;
