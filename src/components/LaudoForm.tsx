import { ScrollView, Text, TouchableOpacity, Alert, ActivityIndicator, View } from "react-native";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import StandardInput from "../components/StandardInput";
import ImageInput from "../components/ImageInput";
import DatePickerInput from "../components/DatePickerInput";
import { formFields } from "../assets/mocks/mocks";
import CustomSelect from "../components/SelectInput";
import { FormData, optionsCondicao } from "../assets/mocks/mocks";
import { generatePDF } from "./generatePDF";

const LaudoForm: React.FC = () => {
    const { control, handleSubmit, setValue } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState(false);

    const handleCreate: SubmitHandler<FormData> = (data) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (!data.image) {
                Alert.alert('Erro', 'Nenhuma foto foi inserida');
                return;
            }
            generatePDF(data);
            Alert.alert("Sucesso", "Laudo criado com sucesso!");
        }, 1000);
    };

    return (
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }} className="flex-1 bg-gray-100">
            <View className="bg-white p-6 rounded-lg shadow-md mx-4 mb-6">
                <Text className="text-3xl font-extrabold text-center color-gray-400 mb-6">Laudo Novo</Text>

                {/* Campo específico para a data */}
                <DatePickerInput
                    name={formFields[0].name}
                    control={control}
                    label={formFields[0].label}
                />

                {/* Mapeando outros campos, exceto o de data */}
                {formFields
                    .filter((field) => field.name !== formFields[0].name) // Filtra o campo de data
                    .map((field) => (
                        <StandardInput
                            key={field.name}
                            name={field.name}
                            control={control}
                            label={field.label}
                            placeholder={field.placeholder}
                        />
                    ))}

                <CustomSelect
                    label="Condição geral da vela"
                    options={optionsCondicao}
                    onSelect={(value) => setValue('condicaoVela', value)}
                />

                <ImageInput
                    name="image"
                    control={control}
                    label="Selecionar Imagem"
                    onImageSelect={(uri: string) => setValue('image', uri)}
                />
            </View>

            <View className="items-center">
                <TouchableOpacity
                    className={`bg-pink-600 py-4 px-10 rounded-full w-11/12 max-w-xs mx-auto my-8 ${isLoading ? 'opacity-50' : ''}`}
                    onPress={handleSubmit(handleCreate)}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text className="text-white text-lg font-semibold text-center">Criar Laudo</Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LaudoForm;
