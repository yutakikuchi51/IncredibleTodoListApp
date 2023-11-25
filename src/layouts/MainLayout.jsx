import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;