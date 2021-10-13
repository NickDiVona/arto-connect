import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
//
import Navigation from './src/navigation';
import { ConfigureStore } from 'redux/configureStore';
//

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
};

const reduxStore = ConfigureStore();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={reduxStore}>
        <NativeBaseProvider config={nativeBaseConfig}>
          <Navigation />
          <StatusBar />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
