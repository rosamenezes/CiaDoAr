import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Image, Pressable } from 'react-native';
import logo from '../assets/images/logo.jpeg';

export default function HomeScreen() {
  const buttonStyle = "bg-pink-600 py-3 px-10 rounded-full w-full max-w-xs mx-auto mb-4";
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={logo}
        className="w-80 h-80 mb-12"
        resizeMode="contain"
      />
      <Pressable onPress={() => router.push('/criar')} className={buttonStyle} accessibilityLabel="Botão para criar novo item">
        <Text className="text-white text-center font-bold">Criar</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/salvos')} className={buttonStyle} accessibilityLabel="Botão para acessar itens salvos">
        <Text className="text-white text-center font-bold">Salvos</Text>
      </Pressable>
    </View>
  );
}

