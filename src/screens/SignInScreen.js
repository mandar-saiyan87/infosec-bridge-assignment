import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import TextInputField from '../components/TextInputField'



const SignInScreen = ({ navigation }) => {

  const [creds, setCreds] = useState({
    email: "",
    password: ""
  })

  const [button, setButton] = useState(false)

  const getData = (key, text) => {
    setCreds(prevState => {
      return {
        ...prevState,
        [key]: text
      }

    })
  }

  useEffect(() => {
    const buttonActive = () => {
      if (creds.email !== "" && creds.password !== "") {
        setButton(true)
      }
    }
    buttonActive()
  }, [creds.email, creds.password])




  return (
    <View className='flex-1 bg-[#F7F8F9] px-5 pt-5'>
      <Text className='w-[60%] font-Rubik-Medium text-[#1D2226] text-2xl'>Signin to your PopX account</Text>
      <Text className='w-[65%] leading-5 font-Rubik text-base opacity-60 mt-3 mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>

      <TextInputField placeholder={'Enter email address'} label={'Email Address'} styles={'mb-5'} getData={getData} name={'email'} />

      <TextInputField placeholder={'Enter Password'} label={'Password'} styles={'mb-3'} getData={getData} name={'password'} secureText={true} />

      <Button bgColor={button ? 'bg-[#6C25FF]' : 'bg-[#CBCBCB]'} textColor={'text-[#FFFFFF]'} title={'Login'} onPress={() => navigation.replace('Profile')} disable={button ? false : true} styles={'my-1'} />

    </View>
  )
}

export default SignInScreen


