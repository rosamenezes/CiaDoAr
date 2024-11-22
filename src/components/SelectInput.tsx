import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';

interface CustomSelectProps {
  options: { label: string; value: string }[]; // Lista de opções para selecionar
  label: string; // Rótulo do componente
  onSelect: (value: string) => void; // Função chamada ao selecionar uma opção
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label, onSelect }) => {
  // Estado para armazenar o valor selecionado
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  // Estado para controlar a visibilidade do modal
  const [modalVisible, setModalVisible] = useState(false);

  // Função para manipular a seleção de uma opção
  const handleSelect = (value: string) => {
    setSelectedValue(value); // Atualiza o valor selecionado
    onSelect(value); // Chama a função de callback
    setModalVisible(false); // Fecha o modal
  };

  return (
    <View className="mb-6">
      {/* Rótulo do componente */}
      <Text className="font-bold text-lg mb-2 text-gray-800">{label}</Text>

      {/* Botão para abrir o modal */}
      <TouchableOpacity 
        onPress={() => setModalVisible(true)} 
        className="bg-white py-4 px-6 rounded-lg shadow-sm border border-gray-300"
      >
        <Text className={`text-gray-600 ${selectedValue ? 'text-black' : 'text-gray-400'}`}>
          {selectedValue ? selectedValue : 'Selecione uma opção'}
        </Text>
      </TouchableOpacity>

      {/* Modal para exibir as opções */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)} // Fecha o modal ao pressionar fora dele
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-11/12 bg-white p-6 rounded-lg shadow-lg">
            <Text className="text-xl font-bold mb-4 text-center text-gray-800">Selecione uma opção</Text>

            {/* Lista de opções */}
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

            {/* Botão para fechar o modal */}
            <TouchableOpacity 
              onPress={() => setModalVisible(false)} 
              className="mt-4"
            >
              <Text className="text-red-600 text-center font-bold text-lg">Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomSelect;

