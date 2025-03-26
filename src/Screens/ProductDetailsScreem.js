import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params || {};
  const rating = product?.rating || { rate: 0, count: 0 };

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: product?.image }} 
        style={styles.image} 
        // defaultSource={require('')} 
      />
      <View style={styles.details}>
        <Text style={styles.title}>{product?.title || 'No Title'}</Text>
        <Text style={styles.price}>${product?.price?.toFixed(2) || '0.00'}</Text>
        <Text style={styles.description}>{product?.description || 'No description available'}</Text>
        <Text style={styles.category}>Category: {product?.category || 'Unknown'}</Text>
        <Text style={styles.rating}>
          Rating: {rating.rate} ({rating.count} reviews)
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#f5f5f5',
  },
  details: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#666',
  },
  category: {
    fontSize: 16,
    color: '#2196F3',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#FF9800',
  },
});

export default ProductDetail;