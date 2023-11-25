import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  return (
    <MainLayout>
      <View>
        <Text>Incredible Todo List</Text>
        <Text>Yuta Kikuchi</Text>
        <Text>{new Date().toLocaleDateString()}</Text>
      </View>
    </MainLayout>
  );
}

export default AboutScreen;

