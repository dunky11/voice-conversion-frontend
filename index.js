import React from "react";
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import App from './App';
import { NativeRouter } from 'react-router-native';

function RoutedApp() {
    return <NativeRouter><App/></NativeRouter>
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(RoutedApp);
