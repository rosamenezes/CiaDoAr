import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';

interface CustomSelectProps {
  options: { label: string; value: string }[];
  label: string;
  onSelect: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label, onSelect }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        onSelect(value);
        setModalVisible(false);
    };

    return (
        <View className="mb-6">
            <Text className="font-bold text-lg mb-2 text-gray-800">{label}</Text>
            <TouchableOpacity 
                onPress={() => setModalVisible(true)} 
                className="bg-white py-4 px-6 rounded-lg shadow-sm border border-gray-300"
            >
                <Text className={`text-gray-600 ${selectedValue ? 'text-black' : 'text-gray-400'}`}>
                    {selectedValue ? selectedValue : 'Selecione uma opção'}
                </Text>
            </TouchableOpacity>

            <Modal
    transparent={true}
    visible={modalVisible}
    animationType="slide"
    onRequestClose={() => setModalVisible(false)}
>
    <View className="flex-1 justify-center items-center">
        <View className="w-11/12 bg-white p-6 rounded-lg shadow-lg">
            <Text className="text-xl font-bold mb-4 text-center text-gray-800">Selecione uma opção</Text>
            <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => handleSelect(item.value)} 
                        className="py-3 border-b border-gray-200"
                    >
                        <Text className="text-lg text-gray-800">{item.label}</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} className="mt-4">
                <Text className="text-red-600 text-center font-bold text-lg">Fechar</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>

        </View>
    );
};

export default CustomSelect;
