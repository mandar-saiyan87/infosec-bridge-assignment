import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import profile from '../../assets/images/profile/profile.png'
import Group from '../../assets/images/group.svg'




const ProfileScreen = () => {


  return (
    <View className='flex-1 bg-[#F7F8F9]'>
      <View className=' px-5 pt-7 mb-6'>
        <View className='flex-row gap-5 mb-5'>
          <View className=''>
            <Image source={profile} className='w-[76px] h-[76px]' />
            <View className='absolute -right-1 bottom-0'>
              <Group width={23} height={23} />
            </View>
          </View>
          <View>
            <Text className='font-Rubik-Medium text-sm text-[#1D2226]'>Marry Doe</Text>
            <Text className='font-Rubik text-sm text-[#1D2226]'>Marry@Gmail.Com</Text>
          </View>
        </View>
        <Text className='text-left font-Rubik text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente libero mollitia eum placeat. Dicta, quisquam culpa. Modi, enim esse?</Text>
      </View>
      <View className='border-t-[#CBCBCB] border-t-[1px] border-b-[#CBCBCB] border-b-[1px] border-dashed h-[63%]'></View>
    </View>
  )
}

export default ProfileScreen


