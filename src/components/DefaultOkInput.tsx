import { Text, TextInput, View } from "react-native";
import { Controller, Control } from "react-hook-form";

interface InputFieldProps {
  name: string; // Nome do campo no formulário
  control: Control<any>; // Controle do React Hook Form
  label: string; // Rótulo do campo
  placeholder: string; // Placeholder para o campo
  defaultValue?: string; // Valor padrão opcional
}

// Componente de entrada com valor padrão "Ok"
const DefaultOkInput: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  placeholder,
  defaultValue = "Ok", // Valor padrão configurável, "Ok" por padrão
}) => (
  <View className="mb-4">
    {/* Rótulo do campo */}
    <Text className="text-xl font-bold">{label}:</Text>

    {/* Campo controlado pelo React Hook Form */}
    <Controller
      control={control} // Controle do React Hook Form
      name={name} // Nome do campo
      defaultValue={defaultValue} // Define o valor padrão
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onChangeText={onChange} // Atualiza o valor no estado do formulário
          onBlur={onBlur} // Acionado ao perder o foco
          value={value} // Valor atual do campo
          placeholder={placeholder} // Texto exibido quando vazio
          placeholderTextColor="#A0AEC0" // Cor do texto placeholder (cinza claro)
          className="border border-gray-300 rounded p-2" // Estilo do campo de texto
        />
      )}
    />
  </View>
);

export default DefaultOkInput;


