import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './WelcomeScreen'
import SignInScreen from './SignInScreen'
import RegistrationScreen from './RegistrationScreen'
import ProfileScreen from './ProfileScreen'


const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={WelcomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name='SignIn' component={SignInScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Register' component={RegistrationScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{
          headerTitle: 'Account Settings',
          headerTitleAlign: 'left',
          headerBackVisible: false,
          headerTitleStyle: {
            fontFamily: 'Rubik',
            fontSize: 18
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations