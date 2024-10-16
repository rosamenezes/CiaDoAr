import { ScrollView, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import StandardInput from "../components/StandardInput";
import ImageInput from "../components/ImageInput";
import DatePickerInput from "../components/DatePickerInput";
import { formFields } from "../assets/mocks/mocks";
import CustomSelect from "../components/SelectInput";
import { FormData, optionsCondicao } from "../assets/mocks/mocks";
import { generatePDF } from "../utils/generatePDF";

const LaudoForm: React.FC = () => {
    const { control, handleSubmit, setValue } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState(false);

    const handleCreate: SubmitHandler<FormData> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
    setIsLoading(false);
    generatePDF(data);
    Alert.alert("Sucesso", "Laudo criado com sucesso!");
    }, 1000);
};

return (
    <ScrollView contentContainerStyle={{ padding: 16 }} className="flex-1 bg-white">
    <Text className="text-3xl font-extrabold text-center text-gray-800 mb-6">Laudo novo:</Text>
    
    {formFields.map((field) => (
        <StandardInput
            key={field.name}
            name={field.name}
            control={control}
            label={field.label}
            placeholder={field.placeholder}
        />
    ))}

    <CustomSelect
        label="Condição geral da vela:"
        options={optionsCondicao}
        onSelect={(value) => setValue('condicaoVela', value)}
    />

    <ImageInput
        name="image"
        control={control}
        label="Selecionar Imagem"
        onImageSelect={(uri: string) => setValue('image', uri)}
    />

    <DatePickerInput name="data" control={control} label="Data" />

    <TouchableOpacity
        className="bg-pink-600 py-3 px-10 rounded-full w-full max-w-xs mx-auto my-8"
        onPress={handleSubmit(handleCreate)}
        disabled={isLoading}
    >
        {isLoading ? (
            <ActivityIndicator color="#fff" />
        ) : (
        <Text className="text-white text-center">Criar</Text>
        )}
    </TouchableOpacity>

    </ScrollView>
  );
};

export default LaudoForm;