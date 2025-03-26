



// Screens/Splash.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

function Splash() {
    const navigation = useNavigation();
    
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const email = await AsyncStorage.getItem('EMAIL');
                const password = await AsyncStorage.getItem('PASSWORD');
                
                setTimeout(() => {
                    if (email && password) {
                        navigation.navigate('Home');
                    } else {
                        navigation.navigate('Login');
                    }
                }, 3000);
            } catch (error) {
                console.log('Error checking login status', error);
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 3000);
            }
        };
        
        checkLoginStatus();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Image 
                source={require('../images/logo.png')}
                style={{
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    resizeMode: 'center'
                }} 
            /> */}
        </View>
    );
}

export default Splash;