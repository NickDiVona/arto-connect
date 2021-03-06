import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
//
import Navigation from './src/navigation';
import { ConfigureStore } from './src/redux/configureStore';
// import { PersistGate } from 'redux-persist/integration/react';
//

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
};

// const { persistor, store } = ConfigureStore();
const store = ConfigureStore();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <NativeBaseProvider config={nativeBaseConfig}>
          <Navigation />
          <StatusBar />
        </NativeBaseProvider>
        {/* </PersistGate> */}
      </Provider>
    </SafeAreaProvider>
  );
}
