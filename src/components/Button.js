import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({ bgColor, textColor, title, styles, onPress, disable }) => {
  return (
    <Pressable className={`items-center ${bgColor} py-3 rounded-md active:opacity-80 ${styles || ""}`} onPress={onPress} disabled={disable}>
      <Text className={`${textColor} opacity-100 font-Rubik-Medium text-sm`}>{title}</Text>
    </Pressable>
  )
}

export default Button