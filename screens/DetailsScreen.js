import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// +++ Access route prop to get params.
export default function DetailsScreen({route, navigation}) {
  
  // +++ Destructure place and rating from route.params.
  const { place, rating } = route.params;

  return (
    <View style={styles.container}>
      {/* +++ Display the dynamic place name */}
      <Text style={styles.text}>Welcome to {place}</Text>
      
      <Text style={styles.subText}>Rating: {rating} Stars</Text>

      {/* +++ Conditional rendering based on rating (Challenge) */}
      {rating === 5 ? (
        <Text style={styles.goodReview}>Must Visit!</Text>
      ) : (
        <Text style={styles.normalReview}>Nice Place.</Text>
      )}

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subText: { fontSize: 18, marginBottom: 10 },
  goodReview: { color: 'green', fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
  normalReview: { color: 'orange', fontSize: 18, marginBottom: 20 },
});