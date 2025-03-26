import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

const { width } = Dimensions.get('window');

const ProductSlider = () => {
    const images = [
        require('../images/logo.png'),
        require('../images/logo.png'),
        require('../images/logo.png'),
    ];

    return (
        <PagerView
            style={styles.pagerView}
            initialPage={0}
            autoplay={true}
            autoplayInterval={3000} // Change image every 3 seconds
        >
            {images.map((image, index) => (
                <View key={index} style={{ width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                    {/* <Image source={image} style={{
                        width: 30,
                        height: 30,
                        borderRadius: 50,
                        resizeMode: 'center'
                    }} resizeMode="contain" /> */}
                    <Text style={{fontSize:20}}>Ecommerce App</Text>
                </View>
            ))}
        </PagerView>
    );
};

const styles = StyleSheet.create({
    pagerView: {
        width: width * 5, // Adjust width as needed
        height: 50, // Adjust height as needed
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ProductSlider;