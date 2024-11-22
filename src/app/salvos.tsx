import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";

export default function Salvos() {
  const [pdfFiles, setPdfFiles] = useState<string[]>([]); // Estado para armazenar os PDFs encontrados
  const router = useRouter(); // Hook para navegação entre telas

  // Função para listar os PDFs na pasta definida
  const listPDFFiles = async () => {
    try {
      const folderUri = `${FileSystem.documentDirectory}pdfs/`; // Define a pasta onde os PDFs são salvos
      await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true }); // Cria a pasta caso ela não exista
      const files = await FileSystem.readDirectoryAsync(folderUri); // Lê os arquivos dentro da pasta
      const pdfs = files.filter((file) => file.endsWith(".pdf")); // Filtra apenas arquivos com extensão .pdf
      setPdfFiles(pdfs.map((file) => `${folderUri}${file}`)); // Atualiza o estado com o caminho completo dos PDFs
    } catch (error) {
      Alert.alert("Erro", "Não foi possível acessar os arquivos."); // Mostra erro em caso de falha
    }
  };

  // Carrega os PDFs ao abrir a tela
  useEffect(() => {
    listPDFFiles();
  }, []);

  // Função para abrir um PDF em uma nova tela
  const openPDF = (uri: string) => {
    router.push({
      pathname: "/pdf-viewer", // Caminho da tela de visualização
      params: { uri }, // Passa o URI do PDF como parâmetro
    });
  };

  return (
    <View className="flex-1 bg-white p-4">
      {/* Título da tela */}
      <Text className="text-2xl font-bold mb-4">Laudos Salvos:</Text>

      {/* Verifica se há arquivos para exibir */}
      {pdfFiles.length === 0 ? (
        <Text className="text-gray-500 mt-4">Nenhum arquivo salvo ainda.</Text>
      ) : (
        <FlatList
          data={pdfFiles} // Dados para a lista
          keyExtractor={(item, index) => `${item}-${index}`} // Chave única para cada item
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => openPDF(item)} // Ação ao tocar no item
              className="border border-gray-300 rounded-md p-4 mt-4 bg-gray-100"
            >
              {/* Exibe o nome do arquivo */}
              <Text className="text-lg font-medium">
                {item.split("/").pop()}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
