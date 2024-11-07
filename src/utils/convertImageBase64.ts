import * as FileSystem from 'expo-file-system';
export default async function convertFileUriToBase64(uri: string): Promise<string> {
  try {
  const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
  });
  return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
  console.error('Erro ao converter URI para base64: ', error);
  throw error;
  }
}