import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import RegistrationInputField from '../components/RegistrationInputField'
import { RadioButton } from 'react-native-paper';


const RegistrationScreen = () => {

  const [text, setText] = useState("");

  const [checked, setChecked] = useState('yes');

  return (
    <View className='flex-1 bg-[#F7F8F9] px-5 pt-7'>
      <Text className='w-[60%] font-Rubik-Medium text-[#1D2226] text-2xl mb-6'>Create your PopX account</Text>

      <RegistrationInputField placeholder={'Enter full name'} label={'Full Name'} styles={'mb-5'} />
      <RegistrationInputField placeholder={'Enter phone number'} label={'Phone Number'} styles={'mb-5'} />
      <RegistrationInputField placeholder={'Enter email address'} label={'Email Address'} styles={'mb-5'} />
      <RegistrationInputField placeholder={'Enter password'} label={'Password'} styles={'mb-5'} />
      <RegistrationInputField placeholder={'Enter company name'} label={'Company Name'} styles={'mb-3'} />
      <Text className='ml-1'>Are you an Agency?</Text>
      <View className='flex-row'>
        <View className='flex-row items-center'>
          <RadioButton
            value="yes"
            status={checked === 'yes' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('yes')}
          />
          <Text className='font-Rubik text-sm'>Yes</Text>
        </View>
        <View className='flex-row items-center ml-3'>
          <RadioButton
            value="no"
            status={checked === 'no' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('no')}
          />
          <Text className='font-Rubik text-sm'>No</Text>
        </View>
      </View>

      <Button bgColor={'bg-[#6C25FF]'} textColor={'text-[#FFFFFF]'} title={'Create Account'} styles={'my-1 absolute bottom-5 self-center w-full'} />
    </View>
  )
}

export default RegistrationScreen


