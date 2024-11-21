import React from 'react';
import { View, Text, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';

interface ImageInputFieldProps {
    name: string;
    control: Control<any>;
    label: string;
    onImageSelect?: (uri: string) => void;
}

const ImageInputField: React.FC<ImageInputFieldProps> = ({ name, control, label, onImageSelect }) => {
    const handleImagePicker = async (onChange: (uri: string) => void) => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert("Permissão necessária", "É necessário dar permissão para acessar a câmera!");
            return;
        }

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
                            onChange(cameraResult.assets[0].uri);
                            if (onImageSelect) {
                                onImageSelect(cameraResult.assets[0].uri);
                            }
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
                            onChange(libraryResult.assets[0].uri);
                            if (onImageSelect) {
                                onImageSelect(libraryResult.assets[0].uri);
                            }
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
            <Text className="text-xl font-bold mb-2 text-gray-800">{label}:</Text>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <View className="items-center">
                        {value && (
                            <Image
                                source={{ uri: value }}
                                className="w-48 h-48 rounded-lg mb-4 border border-gray-300"
                            />
                        )}
                        <TouchableOpacity
                            onPress={() => handleImagePicker(onChange)}
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
