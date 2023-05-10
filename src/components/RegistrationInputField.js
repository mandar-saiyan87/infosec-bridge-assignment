import { View, Text, TextInput } from 'react-native'
import React from 'react'

const RegistrationInputField = ({ placeholder, label, styles, label2 }) => {
  return (
    <View className={`${styles || ""}`}>
      < View className='w-[30%] bg-[#F7F8F9] py-[2px] absolute -top-[10px] left-3 pl-[3px] z-40 flex-row' >
        <Text className='text-[#6C25FF] font-Rubik text-xs'>{label}
          <Text className='text-red-600 font-Rubik text-xs'>*</Text>
        </Text>
      </ View>
      <View className='border-[2px] border-[#CBCBCB] p-3 rounded-md'>
        <TextInput placeholder={placeholder} />
      </View>
    </View>
  )
}

export default RegistrationInputField