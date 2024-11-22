import { Text, TextInput, View } from "react-native";
import { Controller, Control } from "react-hook-form";

interface InputFieldProps {
    name: string;
    control: Control<any>; // Pode-se tipar adequadamente conforme a estrutura do formulário
    label: string;
    placeholder: string;
    defaultValue?: string; // Novo valor padrão
}

const DefaultOkInput: React.FC<InputFieldProps> = ({ name, control, label, placeholder, defaultValue = "Ok" }) => (
    <View className="mb-4">
        <Text className="text-xl font-bold">{label}:</Text>
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue} // Define o valor padrão no Controller
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#A0AEC0" // Cinza claro
                    className="border border-gray-300 rounded p-2"
                />
            )}
        />
    </View>
);

export default DefaultOkInput;
