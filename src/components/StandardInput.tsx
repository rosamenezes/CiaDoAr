import React from "react";
import { Text, TextInput, View } from "react-native";
import { Controller, Control } from "react-hook-form";

interface InputFieldProps {
  name: string; // Nome do campo no formulário
  control: Control<any>; // Controle do react-hook-form
  label: string; // Rótulo do campo
  placeholder: string; // Placeholder do input
}

const InputField: React.FC<InputFieldProps> = ({ name, control, label, placeholder }) => {
  return (
    <View className="mb-4">
      {/* Rótulo do campo */}
      <Text className="text-xl font-bold mb-2 text-gray-800">{label}:</Text>

      {/* Componente Controlador do react-hook-form */}
      <Controller
        control={control} // Passa o controle
        name={name} // Nome do campo no formulário
        render={({ field: { onChange, onBlur, value } }) => (
          // Campo de entrada
          <TextInput
            onChangeText={onChange} // Atualiza o valor
            onBlur={onBlur} // Função chamada ao sair do campo
            value={value} // Valor atual do campo
            placeholder={placeholder} // Placeholder
            placeholderTextColor="#A0AEC0" // Cor do texto do placeholder
            className="border border-gray-300 rounded p-3 text-base text-gray-900"
          />
        )}
      />
    </View>
  );
};

export default InputField;

