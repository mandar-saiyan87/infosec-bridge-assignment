import { Text, View, Pressable } from 'react-native'
import Button from '../components/Button'
import React from 'react'


const WelcomeScreen = ({ navigation }) => {
  return (
    <View className='flex-1 bg-[#F7F8F9] px-5 justify-end mb-7'>
      <View className='mb-6'>
        <Text className='mb-2 font-Rubik-Medium text-2xl text-[#1D2226] opacity-100'>Welcome to PopX</Text>
        <Text className='w-[65%] leading-5 font-Rubik text-base opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
      </View>

      {/* Button imported from components */}
      <Button bgColor={'bg-[#6C25FF]'} textColor={'text-[#FFFFFF]'} title={'Create Account'} onPress={() => navigation.push('Register')} styles={'my-1'} />
      <Button bgColor={'bg-[#6C25FF4B]'} textColor={'#1D2226'} title={'Already Registered? Login'} onPress={() => navigation.push('SignIn')} styles={'my-1'} />
    </View>
  )
}

export default WelcomeScreen
