import React from 'react';
import { Link } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import RNButton from '../components/Button';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={require('../assets/images/logo.jpeg')}
        className="w-80 h-80 mb-12"
        resizeMode="contain"
      />
      <Link href="/criar" asChild>
        <TouchableOpacity className="bg-pink-600 py-3 px-10 rounded-full w-full max-w-xs mx-auto mb-4" >
          <Text className="text-white text-center font-bold">Criar</Text>
          </TouchableOpacity>
      </Link>
      <Link href="/salvos" asChild>
        <TouchableOpacity className="bg-pink-600 py-3 px-10 rounded-full w-full max-w-xs mx-auto mb-4" >
          <Text className="text-white text-center font-bold">Salvos</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

