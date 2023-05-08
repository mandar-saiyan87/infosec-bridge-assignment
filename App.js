import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


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
    <View className='flex-1 items-center justify-center' onLayout={onLayoutRootView}>
      <Text className='text-blue-400'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


