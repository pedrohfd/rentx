import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Onboard } from '../pages/Onboard'
import { useFonts } from 'expo-font'

import * as SplashScreen from 'expo-splash-screen'
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'
import {
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'
import { colors } from '../styles/colors'
import { View } from 'react-native'
import { Home } from '../pages/Home'

SplashScreen.preventAutoHideAsync()

export const Routes = () => {
  const Stack = createStackNavigator()

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Archivo_500Medium,
    Archivo_600SemiBold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.black }}></View>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Onboard' component={Onboard} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
