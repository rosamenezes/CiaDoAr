import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import RNButton from '../components/Button';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={require('../assets/images/logo.jpeg')}
        className="w-80 h-80 mb-12"
        resizeMode="contain"
      />
      <Link href="/criar" asChild>
        <RNButton name="Novo laudo" />
      </Link>
      <Link href="/criar" asChild>
        <RNButton name="Salvos" />
      </Link>

    </View>
  );
}

