import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
export const HistoryChange = () => {
  return (
    <View style = {styles.container}>
      <Text> History Change Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#62B2D3',
  },
});