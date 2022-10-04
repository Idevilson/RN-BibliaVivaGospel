import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { DrawerNavigation } from './src/routes/index.routes';

export default function App() {
  return(
    <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <DrawerNavigation />
        </GestureHandlerRootView>
    </NavigationContainer>
  )
}
