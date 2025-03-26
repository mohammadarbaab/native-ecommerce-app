import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import ProductDetail from './Screens/ProductDetailsScreem';
import Cart from './Screens/Cart';
import ProductSlider from './Screens/ProductSlider';  
import { Image, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                // style={styles.cartButton}
                onPress={() => navigation.navigate('Cart')}
              >
                {/* <Image
                  source={require('./images/logo.png')} 
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    resizeMode: 'center'
                }} 
                /> */}
              </TouchableOpacity>
            ),
            headerTitle: () => <ProductSlider />, // Use ProductSlider as the header title
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: 'Product Details' }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: 'Your Cart' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default AppNavigator;