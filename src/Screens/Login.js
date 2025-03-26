// Screens/Login.js
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomTextInput from '../comman/CustomTextInput';
import CommanButton from '../comman/CommanButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const validate = async () => {
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password == '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }

    if (email && password) {
      // Check if credentials match with stored data
      try {
        const storedEmail = await AsyncStorage.getItem('EMAIL');
        const storedPassword = await AsyncStorage.getItem('PASSWORD');
        
        if (email === storedEmail && password === storedPassword) {
          navigation.navigate('Home');
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.log('Error retrieving data', error);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image 
        source={require('../images/logo.png')}
        style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 100 }} 
      />
      <Text style={{
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: "#000"
      }}>
        Login
      </Text>
      <CustomTextInput 
        placeholder={'Enter email id'} 
        icon={require('../images/mail.png')} 
        value={email} 
        onChangeText={(txt) => setEmail(txt)} 
      />
      {badEmail === true && (
        <Text style={{marginTop:10, marginLeft:30, color:'red'}}>
          Please Enter Email Id
        </Text>
      )}
      <CustomTextInput 
        type={'password'} 
        placeholder={'Enter password'} 
        icon={require('../images/padlock.png')} 
        value={password} 
        onChangeText={(txt) => setPassword(txt)} 
      />
      {badPassword === true && (
        <Text style={{marginTop:10, marginLeft:30, color:'red'}}>
          Please Enter password
        </Text>
      )}
      <CommanButton 
        title={'Login'} 
        bgColor={'#000'} 
        textColor={'#fff'} 
        onPress={validate} 
      />

      <Text 
        style={{ 
          fontSize: 18, 
          fontWeight: '800', 
          alignSelf: 'center', 
          marginTop: 20, 
          textDecorationLine: 'underline' 
        }} 
        onPress={() => navigation.navigate('Signup')}
      >
        Create a account
      </Text>
    </View>
  );
}

export default Login;