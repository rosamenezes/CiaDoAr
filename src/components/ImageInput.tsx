import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';

interface ImageInputFieldProps {
  name: string; // Nome do campo controlado pelo React Hook Form
  control: Control<any>; // Controle do React Hook Form
  label: string; // Rótulo exibido no componente
  onImageSelect?: (uri: string) => void; // Callback opcional ao selecionar a imagem
}

const ImageInputField: React.FC<ImageInputFieldProps> = ({ name, control, label, onImageSelect }) => {
  // Função para abrir o seletor de imagem
  const handleImagePicker = async (onChange: (uri: string) => void) => {
    // Solicita permissão para acessar a câmera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permissão necessária", "É necessário dar permissão para acessar a câmera!");
      return;
    }

    // Exibe opções para o usuário (Câmera ou Galeria)
    Alert.alert(
      "Selecionar Imagem",
      "Escolha uma opção:",
      [
        {
          text: "Câmera",
          onPress: async () => {
            const cameraResult = await ImagePicker.launchCameraAsync({
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!cameraResult.canceled) {
              const uri = cameraResult.assets[0].uri;
              onChange(uri); // Atualiza o estado controlado
              if (onImageSelect) onImageSelect(uri); // Callback opcional
            }
          },
        },
        {
          text: "Galeria",
          onPress: async () => {
            const libraryResult = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!libraryResult.canceled) {
              const uri = libraryResult.assets[0].uri;
              onChange(uri); // Atualiza o estado controlado
              if (onImageSelect) onImageSelect(uri); // Callback opcional
            }
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View className="mb-6">
      {/* Rótulo do campo */}
      <Text className="text-xl font-bold mb-2 text-gray-800">{label}:</Text>

      {/* Componente controlado pelo React Hook Form */}
      <Controller
        control={control} // Controle do formulário
        name={name} // Nome do campo
        render={({ field: { onChange, value } }) => (
          <View className="items-center">
            {/* Exibe a imagem selecionada */}
            {value && (
              <Image
                source={{ uri: value }}
                className="w-48 h-48 rounded-lg mb-4 border border-gray-300"
              />
            )}

            {/* Botão para selecionar a imagem */}
            <TouchableOpacity
              onPress={() => handleImagePicker(onChange)} // Abre o seletor
              className="bg-blue-500 px-4 py-3 rounded-full shadow-sm active:bg-blue-600"
            >
              <Text className="text-white font-semibold text-center">Selecionar Imagem</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ImageInputField;
