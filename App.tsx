import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/navigation';

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider config={nativeBaseConfig}>
        <Navigation />
        <StatusBar />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
