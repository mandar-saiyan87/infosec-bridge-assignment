import { View, Text, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

const TextInputField = ({ placeholder, label, styles, label2, getData, name, secureText }) => {


  const [text, setText] = useState("")

  useEffect(() => {
    getData?.(name, text)
  }, [text])


  return (
    <View className={`${styles || ""}`}>
      < View className='bg-[#F7F8F9] py-[2px] absolute -top-[10px] left-3 pl-[2px] pr-2 z-40 flex-row' >
        <Text className='text-[#6C25FF] font-Rubik text-xs'>{label}
          <Text className='text-red-600 text-xs'>{label2}</Text>
        </Text>
      </ View>
      <View className='border-[2px] border-[#CBCBCB] p-3 rounded-md'>
        <TextInput placeholder={placeholder} className='font-Rubik' onChangeText={setText} value={text} secureTextEntry={secureText} />
      </View>
    </View>
  )
}

export default TextInputField