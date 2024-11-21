import { View, Text, Image, Pressable } from 'react-native';
import logo from '../assets/images/logoSimple.png';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const primaryButtonStyle = "bg-pink-600 py-4 px-12 rounded-full w-11/12 max-w-xs mx-auto mb-6 shadow-sm";
  const secondaryButtonStyle = "bg-white border-2 border-pink-600 py-4 px-12 rounded-full w-11/12 max-w-xs mx-auto mb-6 shadow-sm";
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="flex items-center mb-16">
        <Text className="text-4xl font-bold text-gray-800 mb-2">FlyCheck</Text>
        <Text className="text-1xl text-gray-500">Gerenciado de Laudos de Parapente</Text>
        <Image
          source={logo}
          style={{ width: 160, height: 160, marginBottom: 24, }}
          resizeMode="contain"
        />
      </View>
      <Pressable onPress={() => router.push('/criar')} className={primaryButtonStyle} accessibilityLabel="Botão para criar novo item">
        <Text className="text-white text-center font-bold text-lg">Criar</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/salvos')} className={secondaryButtonStyle} accessibilityLabel="Botão para acessar itens salvos">
        <Text className="text-pink-600 text-center font-bold text-lg">Salvos</Text>
      </Pressable>
    </View>
  );
}

