import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function laudoForm() {
const { control, handleSubmit, formState: { errors } } = useForm ({})
function handleCreate(data: object){
console.log(data);
}

  return (
<View className="flex-1 justify-center items-center bg-white">
  
  <Text className="text-5xl font-bold">Laudo novo:</Text>

  <Text className="text-3xl">Cabeçalho:</Text>

<Text className="text-1xl">Data:</Text>
  <Controller
  control={control}
  name="data"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Data"
      />
    )}
  />

<Text className="text-1xl">Proprietário:</Text>
  <Controller
  control={control}
  name="proprietario"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Proprietário"
      />
    )}
  />

<Text className="text-1xl">Telefone:</Text>
  <Controller
  control={control}
  name="Telefone"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Telefone"
      />
    )}
  />

<Text className="text-1xl">Cidade:</Text>
  <Controller
  control={control}
  name="Cidade"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Cidade"
      />
    )}
  />

<Text className="text-1xl">Estado:</Text>
  <Controller
  control={control}
  name="Estado"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Estado"
      />
    )}
  />

<Text className="text-3xl">Equipamento:</Text>

<Text className="text-1xl">Fabrica:</Text>
  <Controller
  control={control}
  name="Fabrica"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Fabrica"
      />
    )}
  />

  <Text className="text-1xl">Modelo:</Text>
  <Controller
  control={control}
  name="Modelo"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Modelo"
      />
    )}
  />

  <Text className="text-1xl">Serial:</Text>
  <Controller
  control={control}
  name="Serial"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Serial"
      />
    )}
  />

  <Text className="text-1xl">Data de fabricação:</Text>
  <Controller
  control={control}
  name="Data de fabricação"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Data de fabricação"
      />
    )}
  />

  <Text className="text-1xl">Cor Bordo:</Text>
  <Controller
  control={control}
  name="Cor Bordo"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Cor Bordo"
      />
    )}
  />

  <Text className="text-1xl">Cor Extra:</Text>
  <Controller
  control={control}
  name="Cor Extra"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Cor Extra"
      />
    )}
  />

  <Text className="text-1xl">Cor Intra:</Text>
  <Controller
  control={control}
  name="Cor Intra"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Cor Intra"
      />
    )}
  /> 

  <Text className="text-3xl">Checagem de Linhas:</Text>

  <Text className="text-1xl">Check Tirantes:</Text>
  <Controller
  control={control}
  name="Check Tirantes"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Check Tirantes"
      />
    )}
  />

  <Text className="text-1xl">Batoques e Argolas:</Text>
  <Controller
  control={control}
  name="Batoques e Argolas"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Batoques e Argolas"
      />
    )}
  />

  <Text className="text-1xl">Argolas:</Text>
  <Controller
  control={control}
  name="Argolas"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Argolas"
      />
    )}
  />

  <Text className="text-1xl">Distorcedor:</Text>
  <Controller
  control={control}
  name="Distorcedor"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Distorcedor"
      />
    )}
  />

  <Text className="text-1xl">Roldanas:</Text>
  <Controller
  control={control}
  name="Roldanas"
  render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Roldanas"
      />
    )}
  />

  <TouchableOpacity className="bg-pink-600 py-3 px-10 rounded-full w-full max-w-xs mx-auto mb-4"
    onPress={handleSubmit(handleCreate)} >
    <Text className="text-white text-center">Criar</Text>
  </TouchableOpacity>
</View>
);
}