import React from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';

interface ImageInputFieldProps {
    name: string;
    control: Control<any>;
    label: string;
    onImageSelect?: (uri: string) => void;  // Adicionando a propriedade onImageSelect
}

const ImageInputField: React.FC<ImageInputFieldProps> = ({ name, control, label, onImageSelect }) => {
    const handleImagePicker = async (onChange: (uri: string) => void) => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert("Permissão necessária", "É necessário dar permissão para acessar a câmera!");
            return;
        }

        const options = await Alert.alert(
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

        if (options === undefined) {
            console.log("Nenhuma opção escolhida.");
        }
    };

    return (
        <View className="mb-4">
            <Text className="text-xl">{label}:</Text>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <View>
                        {value && <Image source={{ uri: value }} style={{ width: 200, height: 200 }} />}
                        <Button title="Selecionar Imagem" onPress={() => handleImagePicker(onChange)} />
                    </View>
                )}
            />
        </View>
    );
};

export default ImageInputField;


