import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AtBookProvider } from "./src/hooks/BibleContext";
import { BibleVersionProvider } from "./src/hooks/BibleVersionContext";
import { DrawerNavigation } from './src/routes/index.routes';

export default function App() {
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
            <BibleVersionProvider>
                <AtBookProvider>
                    <DrawerNavigation />
                </ AtBookProvider>
            </BibleVersionProvider>
        </NavigationContainer>
    </GestureHandlerRootView>
  )
}
