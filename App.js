import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navigations from './src/screens/Navigations';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Rubik': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-black': require('./assets/fonts/Rubik-Black.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
    'Rubik-ExtraBold': require('./assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Black': require('./assets/fonts/Rubik-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} className='flex-1'>
      <Navigations></Navigations>
    </SafeAreaView>
  );
}


