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
    <View>
        <Text>{label}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}>
            <Text>{selectedValue ? selectedValue : 'Selecione uma opção'}</Text>
        </TouchableOpacity>

        <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
            >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 300, backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                <FlatList
                    data={options}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item.value)} style={{ padding: 10 }}>
                    <Text>{item.label}</Text>
                    </TouchableOpacity>
                )}
                />
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>Fechar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
        </View>
    );
};

export default CustomSelect;



