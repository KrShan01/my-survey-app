import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SURVEY NOW</Text>
          <Text style={styles.logoSubtitle}>ONLINE SURVEY</Text>
        </View>
        <View style={[styles.loginContainer, isDarkMode ? styles.darkMode : styles.lightMode]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onFocus={(e) => e.target.setNativeProps({ placeholderTextColor: "white" })}
            onBlur={(e) => e.target.setNativeProps({ placeholderTextColor: "#888" })}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onFocus={(e) => e.target.setNativeProps({ placeholderTextColor: "white" })}
            onBlur={(e) => e.target.setNativeProps({ placeholderTextColor: "#888" })}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6600',
  },
  logoSubtitle: {
    fontSize: 18,
    color: '#FF6600',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 20,
    borderRadius: 120,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#FF6600',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
  },
  darkMode: {
    backgroundColor: '#02111B',
  },
  lightMode: {
    backgroundColor: '#FFFED1',
  },
});

export default App;