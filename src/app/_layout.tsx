import '../styles/global.css';
import { Stack } from "expo-router";

const RootLayout = () => {
  return ( 
    <Stack>
      <Stack.Screen name="index" options={{ title:"Home" }} />
      <Stack.Screen name="criar" options={{ title:"Criar" }} />
      <Stack.Screen name="salvos" options={{ title:"Salvos" }} />
      <Stack.Screen name="pdf-viewer" options={{ title:"PDF Viewer" }} />
    </Stack>
  );
}

export default RootLayout
