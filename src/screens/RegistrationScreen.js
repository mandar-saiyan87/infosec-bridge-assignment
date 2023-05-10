import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import TextInputField from '../components/TextInputField'
import { RadioButton } from 'react-native-paper';


const RegistrationScreen = () => {

  const [text, setText] = useState("");

  const [checked, setChecked] = useState('yes');

  return (

    <View className='flex-1 bg-[#F7F8F9] px-5'>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View className='pt-5'>
          <Text className='w-[60%] font-Rubik-Medium text-[#1D2226] text-2xl mb-6'>Create your PopX account</Text>

          <TextInputField placeholder={'Enter full name'} label={'Full Name'} label2={'*'} styles={'mb-5'} />
          <TextInputField placeholder={'Enter phone number'} label={'Phone Number'} label2={'*'} styles={'mb-5'} />
          <TextInputField placeholder={'Enter email address'} label={'Email Address'} label2={'*'} styles={'mb-5'} />
          <TextInputField placeholder={'Enter password'} label={'Password'} label2={'*'} styles={'mb-5'} />
          <TextInputField placeholder={'Enter company name'} label={'Company Name'} label2={'*'} styles={'mb-5'} />
          <Text className='ml-1 font-Rubik'>Are you an Agency?</Text>
          <View className='flex-row mb-10'>
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
          <Button bgColor={'bg-[#6C25FF]'} textColor={'text-[#FFFFFF]'} title={'Create Account'} styles={'mt-5 mb-7 self-center w-full'} />
        </View>
      </ScrollView>
    </View>
  )
}

export default RegistrationScreen


