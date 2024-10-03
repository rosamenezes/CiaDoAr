import { Text, TextInput, View } from "react-native";
import { Controller, Control } from "react-hook-form";

interface InputFieldProps {
    name: string;
    control: Control<any>; // Pode-se tipar adequadamente conforme a estrutura do formulário
    label: string;
    placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, control, label, placeholder }) => (
    <View className="mb-4">
        <Text className="text-1xl">{label}:</Text>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder}
                    className="border border-gray-300 rounded p-2"
                />
            )}
        />
    </View>
);

export default InputField;
