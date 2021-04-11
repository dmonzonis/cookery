import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './screens/Navigation';

export default function App(): React.ReactElement {
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    );
}
