import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import SigninInputField from '../components/SigninInputField'


const SignInScreen = () => {

  const [text, setText] = useState("");

  return (
    <View className='flex-1 bg-[#F7F8F9] px-5 pt-7'>
      <Text className='w-[60%] font-Rubik-Medium text-[#1D2226] text-2xl'>Signin to your PopX account</Text>
      <Text className='w-[65%] leading-5 font-Rubik text-base opacity-60 mt-3 mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>

      <SigninInputField placeholder={'Enter email address'} label={'Email Address'} styles={'mb-5'} />

      <SigninInputField placeholder={'Enter Password'} label={'Password'} styles={'mb-3'} />

      <Button bgColor={'bg-[#CBCBCB]'} textColor={'text-[#FFFFFF]'} title={'Login'} />

    </View>
  )
}

export default SignInScreen


