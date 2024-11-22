import { View, Text, Image, Pressable } from 'react-native';
import logo from '../assets/images/logoSimple.png'; // Importação do logo
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(); // Hook para navegação entre telas

  // Estilos para os botões
  const primaryButtonStyle =
    "bg-pink-600 py-4 px-12 rounded-full w-11/12 max-w-xs mx-auto mb-6 shadow-sm";
  const secondaryButtonStyle =
    "bg-white border-2 border-pink-600 py-4 px-12 rounded-full w-11/12 max-w-xs mx-auto mb-6 shadow-sm";

  return (
    <View className="flex-1 bg-white">
      {/* Cabeçalho fixo no topo */}
      <View className="absolute top-10 left-0 right-0 items-center">
        <Text className="text-4xl font-bold text-gray-800 mb-2">FlyCheck</Text>
        <Text className="text-xl text-gray-500">
          Gerenciador de Laudos de Parapente
        </Text>
      </View>

      {/* Conteúdo principal */}
      <View className="flex-1 justify-center items-center mt-40">
        {/* Logo centralizado */}
        <Image
          source={logo}
          style={{ width: 160, height: 160, marginBottom: 24 }}
          resizeMode="contain"
        />

        {/* Botão para criar novo laudo */}
        <Pressable
          onPress={() => router.push('/criar')} // Navega para a tela "criar"
          className={primaryButtonStyle}
          accessibilityLabel="Botão para criar novo laudo"
        >
          <Text className="text-white text-center font-bold text-lg">Criar</Text>
        </Pressable>

        {/* Botão para acessar laudos salvos */}
        <Pressable
          onPress={() => router.push('/salvos')} // Navega para a tela "salvos"
          className={secondaryButtonStyle}
          accessibilityLabel="Botão para acessar laudos salvos"
        >
          <Text className="text-pink-600 text-center font-bold text-lg">
            Salvos
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

