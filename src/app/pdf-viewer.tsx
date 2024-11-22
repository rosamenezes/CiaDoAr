import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";

export default function PDFViewer() {
  const { uri } = useLocalSearchParams(); // Recupera o URI do PDF passado como parâmetro

  if (!uri) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erro: Nenhum PDF encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: uri as string }} // Garante que o URI seja uma string
        style={styles.webView}
        onError={(error) => console.error("Erro ao carregar o PDF:", error)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
