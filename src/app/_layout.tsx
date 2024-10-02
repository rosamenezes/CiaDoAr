import '../styles/global.css';
import { Stack } from "expo-router";

const RootLayout = () => {
  return ( 
    <Stack>
      <Stack.Screen name="index" options={{ title:"Home" }} />
      <Stack.Screen name="criar" options={{ title:"Criar" }} />
      <Stack.Screen name="salvos" options={{ title:"Salvos" }} />
    </Stack>
  );
}

export default RootLayout
