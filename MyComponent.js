import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyComponent bài 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300, // Chỉnh chiều rộng
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MyComponent;
