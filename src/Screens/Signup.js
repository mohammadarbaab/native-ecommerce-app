
// Screens/Signup.js
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomTextInput from '../comman/CustomTextInput';
import CommanButton from '../comman/CommanButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Signup() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [mobile, setMobile] = useState('');
    const [badMobile, setBadMobile] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);

    const validate = async () => {
        let isValid = true;
        
        if (name == '') {
            setBadName(true);
            isValid = false;
        } else {
            setBadName(false);
        }
        
        if (email == '') {
            setBadEmail(true);
            isValid = false;
        } else {
            setBadEmail(false);
        }
        
        if (mobile == '' || mobile.length < 10) {
            setBadMobile(true);
            isValid = false;
        } else {
            setBadMobile(false);
        }
        
        if (password == '') {
            setBadPassword(true);
            isValid = false;
        } else {
            setBadPassword(false);
        }
        
        if (confirmPassword == '' || password !== confirmPassword) {
            setBadConfirmPassword(true);
            isValid = false;
        } else {
            setBadConfirmPassword(false);
        }
        
        if (isValid) {
            await saveData();
            navigation.navigate('Login');
        }
    };

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('NAME', name);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('MOBILE', mobile);
            await AsyncStorage.setItem('PASSWORD', password);
            console.log('Data saved successfully');
        } catch (error) {
            console.log('Error saving data', error);
        }
    };

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
                    Create new Account
                </Text>

                <CustomTextInput 
                    placeholder={'Enter name'} 
                    value={name} 
                    onChangeText={(txt) => setName(txt)} 
                    icon={require('../images/user.png')} 
                />
                {badName && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Name
                    </Text>
                )}

                <CustomTextInput 
                    placeholder={'Enter email id'} 
                    icon={require('../images/mail.png')} 
                    value={email} 
                    onChangeText={(txt) => setEmail(txt)} 
                />
                {badEmail && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Email Id
                    </Text>
                )}

                <CustomTextInput 
                    placeholder={'Enter mobile number'} 
                    icon={require('../images/cell-phone.png')} 
                    value={mobile} 
                    onChangeText={(txt) => setMobile(txt)} 
                    keyboardType={'number-pad'} 
                />
                {badMobile && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Valid Mobile Number
                    </Text>
                )}

                <CustomTextInput 
                    placeholder={'Enter password'} 
                    icon={require('../images/padlock.png')} 
                    value={password} 
                    onChangeText={(txt) => setPassword(txt)} 
                    type={'password'}
                />
                {badPassword && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Password
                    </Text>
                )}

                <CustomTextInput 
                    type={'password'} 
                    placeholder={'Confirm password'} 
                    icon={require('../images/padlock.png')} 
                    value={confirmPassword} 
                    onChangeText={(txt) => setConfirmPassword(txt)} 
                />
                {badConfirmPassword && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Passwords do not match
                    </Text>
                )}

                <CommanButton 
                    title={'Sign up'} 
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
                        textDecorationLine: 'underline', 
                        marginBottom: 50 
                    }} 
                    onPress={() => navigation.navigate('Login')}
                >
                    Already have an account?
                </Text>
            </View>
        </ScrollView>
    );
}

export default Signup;