import '../styles/global.css';
import { Stack } from "expo-router";

export default function RootLayout() {
  return ( 
    <Stack>
      <Stack.Screen name="index" options={{ title:"Home" }} />
      <Stack.Screen name="criar" options={{ title:"criar" }} />
      <Stack.Screen name="salvos" options={{ title:"salvos" }} />
    </Stack>
  );
}
