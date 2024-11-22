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
import DefaultOkInput from "./DefaultOkInput";

const LaudoForm: React.FC = () => {
  // Estado para controlar o carregamento do botão
  const [isLoading, setIsLoading] = useState(false);

  // Inicializa o React Hook Form
  const { control, handleSubmit, setValue } = useForm<FormData>();

  // Divide os campos do formulário em grupos
  const normalInputs = formFields.slice(0, 14); // Primeiros 14 campos
  const defaultInputs = formFields.slice(14, 26); // Campos com valor padrão "Ok"
  const otherNormalInputs = formFields.slice(26); // Campos restantes

  // Função chamada ao submeter o formulário
  const handleCreate: SubmitHandler<FormData> = (data) => {
    setIsLoading(true); // Ativa o carregamento do botão

    setTimeout(() => {
      setIsLoading(false); // Desativa o carregamento

      // Validação simples para verificar se a imagem foi inserida
      if (!data.image) {
        Alert.alert('Erro', 'Nenhuma foto foi inserida');
        return;
      }

      // Gera o PDF com os dados do formulário
      generatePDF(data);

      Alert.alert("Sucesso", "Laudo criado com sucesso!");
    }, 1000); // Simula um delay de 1 segundo
  };

  return (
    <ScrollView 
      contentContainerStyle={{ paddingVertical: 20 }} 
      className="flex-1 bg-gray-100"
    >
      <View className="bg-white p-6 rounded-lg shadow-md mx-4 mb-6">
        {/* Título do formulário */}
        <Text className="text-3xl font-extrabold text-center color-gray-400 mb-6">
          Laudo Novo
        </Text>

        {/* Campo para selecionar a data */}
        <DatePickerInput
          name={formFields[0].name}
          control={control}
          label={formFields[0].label}
        />

        {/* Campos regulares do formulário */}
        {normalInputs
          .filter((field) => field.name !== formFields[0].name) // Remove o campo de data
          .map((field) => (
            <StandardInput
              key={field.name}
              name={field.name}
              control={control}
              label={field.label}
              placeholder={field.placeholder}
            />
          ))}

        {/* Campos com valor padrão "Ok" */}
        {defaultInputs.map((field) => (
          <DefaultOkInput
            key={field.name}
            name={field.name}
            control={control}
            label={field.label}
            placeholder={field.placeholder}
            defaultValue="Ok"
          />
        ))}

        {/* Campos restantes do formulário */}
        {otherNormalInputs.map((field) => (
          <StandardInput
            key={field.name}
            name={field.name}
            control={control}
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}

        {/* Campo de seleção para a condição da vela */}
        <CustomSelect
          label="Condição geral da vela"
          options={optionsCondicao}
          onSelect={(value) => setValue('condicaoVela', value)}
        />

        {/* Campo para inserir imagem */}
        <ImageInput
          name="image"
          control={control}
          label="Selecionar Imagem"
          onImageSelect={(uri: string) => setValue('image', uri)}
        />
      </View>

      {/* Botão para criar o laudo */}
      <View className="items-center">
        <TouchableOpacity
          className={`bg-pink-600 py-4 px-10 rounded-full w-11/12 max-w-xs mx-auto my-8 ${isLoading ? 'opacity-50' : ''}`}
          onPress={handleSubmit(handleCreate)} // Lida com o envio do formulário
          disabled={isLoading} // Desativa o botão enquanto está carregando
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" /> // Exibe um indicador de carregamento
          ) : (
            <Text className="text-white text-lg font-semibold text-center">
              Criar Laudo
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LaudoForm;

