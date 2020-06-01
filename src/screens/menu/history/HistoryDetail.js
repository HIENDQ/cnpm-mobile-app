import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
export const HistoryDetail = () => {
  return (
    <View style = {styles.container}>
      <Text> History Detail Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});