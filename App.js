import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/screens/Main'; 

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
