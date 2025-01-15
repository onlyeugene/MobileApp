// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
// import 'react-native-reanimated';
import { Appearance } from 'react-native';

import { Colors } from '@/constants/Colors';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const colorScheme = Appearance.getColorScheme()

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <Stack screenOptions={{ headerStyle: {backgroundColor: theme.headerBackground}, headerTintColor: theme.text, headerShadowVisible: false}}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name='index' options={{title:'Home', headerShown:false }}/>
        <Stack.Screen name='contact' options={{title:'Contact', headerShown: true, headerTitle: 'Contact Us'}} />
        <Stack.Screen name='menu' options={{title:'Menu', headerShown: true, headerTitle: 'Coffee Shop Menu'}} />
        <Stack.Screen name='explore' options={{title:'Explore Here'}} />
        <Stack.Screen name="+not-found" options={{headerShown: false}}/>
        <StatusBar style="auto" />
      </Stack>
    //  </ThemeProvider>
  );
}
