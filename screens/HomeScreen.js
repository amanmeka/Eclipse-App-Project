import { Image, Text, View, TextInput} from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { SearchBar } from 'react-native-screens';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
    });
  }, [])

    return (  
      <SafeAreaView>
        <Text className="text-red-500">

          {/* Header */}
          <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
              source={{
                uri: 'https://links.papareact.com/wru'
              }}
              className='h-7 w-7 bg-gray-300 p-4 rounded-full'  
            />
            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
              <Text className="font-bold text-xl">Current Location
                <ChevronDownIcon size={20} color="#00CCBB"/>
              </Text>
            </View>

            <UserIcon size={35} color="#00CCBB"/>
          </View>

          {/* Search */}

          <View>

            <View className="flexrow space-x-2 flex-1 bg-gray-200 p-3">
              <SearchBar/>
              <TextInput placeholder="Restaraunts and cuisines"
              keyboardType="default"
              />
            </View>

            
            <AdjustmentsVerticalIcon color="#00CCBB"/>
          </View>
              

          

        </Text>
      </SafeAreaView>
    )
    };

export default HomeScreen;