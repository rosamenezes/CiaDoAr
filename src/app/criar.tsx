import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useForm, SubmitHandler } from "react-hook-form";
import StandardInput from "../components/StandardInput";
import ImageInput from "../components/ImageInput";
import { formFields, FormData } from "../assets/mocks/mocks";

const LaudoForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const handleCreate: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-3xl font-extrabold text-center text-gray-800 mb-6">Laudo novo:</Text>
    
      {formFields.map((field) => (
        <StandardInput
          key={field.name}
          name={field.name}
          control={control}
          label={field.label}
          placeholder={field.placeholder}
        />
      ))}

      <ImageInput
        name="image"
        control={control}
        label="Selecionar Imagem"
      />

      <TouchableOpacity
        className="bg-pink-600 py-3 px-10 rounded-full w-full max-w-xs mx-auto mb-4"
        onPress={handleSubmit(handleCreate)}
      >
        <Text className="text-white text-center">Criar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LaudoForm;

// import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
// import { useForm, Controller } from "react-hook-form";

// export default function laudoForm() {
// const { control, handleSubmit, formState: { errors } } = useForm ({})
// function handleCreate(data: object){
// console.log(data);
// }

//   return (
// <ScrollView className="flex-1 bg-white">
  
//   <Text className="text-5xl font-bold">Laudo novo:</Text>

//   <Text className="text-3xl">Cabeçalho:</Text>

// <Text className="text-1xl">Data:</Text>
//   <Controller
//   control={control}
//   name="data"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Data"
//       />
//     )}
//   />

// <Text className="text-1xl">Proprietário:</Text>
//   <Controller
//   control={control}
//   name="proprietario"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Proprietário"
//       />
//     )}
//   />

// <Text className="text-1xl">Telefone:</Text>
//   <Controller
//   control={control}
//   name="Telefone"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Telefone"
//       />
//     )}
//   />

// <Text className="text-1xl">Cidade:</Text>
//   <Controller
//   control={control}
//   name="Cidade"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Cidade"
//       />
//     )}
//   />

// <Text className="text-1xl">Estado:</Text>
//   <Controller
//   control={control}
//   name="Estado"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Estado"
//       />
//     )}
//   />

// <Text className="text-3xl">Equipamento:</Text>

// <Text className="text-1xl">Fabrica:</Text>
//   <Controller
//   control={control}
//   name="Fabrica"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Fabrica"
//       />
//     )}
//   />

//   <Text className="text-1xl">Modelo:</Text>
//   <Controller
//   control={control}
//   name="Modelo"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Modelo"
//       />
//     )}
//   />

//   <Text className="text-1xl">Serial:</Text>
//   <Controller
//   control={control}
//   name="Serial"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Serial"
//       />
//     )}
//   />

//   <Text className="text-1xl">Data de fabricação:</Text>
//   <Controller
//   control={control}
//   name="Data de fabricação"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Data de fabricação"
//       />
//     )}
//   />

//   <Text className="text-1xl">Cor Bordo:</Text>
//   <Controller
//   control={control}
//   name="Cor Bordo"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Cor Bordo"
//       />
//     )}
//   />

//   <Text className="text-1xl">Cor Extra:</Text>
//   <Controller
//   control={control}
//   name="Cor Extra"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Cor Extra"
//       />
//     )}
//   />

//   <Text className="text-1xl">Cor Intra:</Text>
//   <Controller
//   control={control}
//   name="Cor Intra"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Cor Intra"
//       />
//     )}
//   /> 

//   <Text className="text-3xl">Checagem de Linhas:</Text>

//   <Text className="text-1xl">Check Tirantes:</Text>
//   <Controller
//   control={control}
//   name="Check Tirantes"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Check Tirantes"
//       />
//     )}
//   />

//   <Text className="text-1xl">Batoques e Argolas:</Text>
//   <Controller
//   control={control}
//   name="Batoques e Argolas"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Batoques e Argolas"
//       />
//     )}
//   />

//   <Text className="text-1xl">Argolas:</Text>
//   <Controller
//   control={control}
//   name="Argolas"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Argolas"
//       />
//     )}
//   />

//   <Text className="text-1xl">Distorcedor:</Text>
//   <Controller
//   control={control}
//   name="Distorcedor"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Distorcedor"
//       />
//     )}
//   />

//   <Text className="text-1xl">Roldanas:</Text>
//   <Controller
//   control={control}
//   name="Roldanas"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Roldanas"
//       />
//     )}
//   />

//   <Text className="text-1xl">Carga nas Linhas:</Text>
//   <Controller
//   control={control}
//   name="Carga nas Linhas"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Carga nas Linhas"
//       />
//     )}
//   />

//   <Text className="text-1xl">Troca de linhas:</Text>
//   <Controller
//   control={control}
//   name="Troca de linhas"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Troca de linhas"
//       />
//     )}
//   />

//   <Text className="text-1xl">Simetria e Trimagem:</Text>
//   <Controller
//   control={control}
//   name="Simetria e Trimagem"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Simetria e Trimagem"
//       />
//     )}
//   />

//   <Text className="text-1xl">Corte:</Text>
//   <Controller
//   control={control}
//   name="Corte"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Corte"
//       />
//     )}
//   />

//   <Text className="text-3xl">Checagem do Tecido:</Text>

//   <Text className="text-1xl">Check Perfil e Costuras:</Text>
//   <Controller
//   control={control}
//   name="Check Perfil e Costuras"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Check Perfil e Costuras"
//       />
//     )}
//   />

//   <Text className="text-1xl">Check Intradorso:</Text>
//   <Controller
//   control={control}
//   name="Check Intradorso"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Check Intradorso"
//       />
//     )}
//   />

//   <Text className="text-1xl">Check Bordo Ataque:</Text>
//   <Controller
//   control={control}
//   name="Check Bordo Ataque"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Check Bordo Ataque"
//       />
//     )}
//   />

//   <Text className="text-1xl">Check Extradorso:</Text>
//   <Controller
//   control={control}
//   name="Check Extradorso"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Check Extradorso"
//       />
//     )}
//   />

//   <Text className="text-1xl">Teste Resistencia tecido:</Text>
//   <Controller
//   control={control}
//   name="Teste Resistencia tecido"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Teste Resistencia tecido"
//       />
//     )}
//   />

//   <Text className="text-1xl">Porosidade bordo ataque:</Text>
//   <Controller
//   control={control}
//   name="Porosidade bordo ataque"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Porosidade bordo ataque"
//       />
//     )}
//   />

//   <Text className="text-1xl">Porosidade Extradorso:</Text>
//   <Controller
//   control={control}
//   name="Porosidade Extradorso"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Porosidade Extradorso"
//       />
//     )}
//   />

//   <Text className="text-1xl">Porosidade Intradorso:</Text>
//   <Controller
//   control={control}
//   name="Porosidade Intradorso"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Porosidade Intradorso"
//       />
//     )}
//   />

//   <Text className="text-1xl">Parecer do Tecido (fabricante):</Text>
//   <Controller
//   control={control}
//   name="Parecer do Tecido (fabricante)"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Parecer do Tecido (fabricante)"
//       />
//     )}
//   />

//   <Text className="text-1xl">Observação:</Text>
//   <Controller
//   control={control}
//   name="Observação"
//   render={({ field: { onChange, onBlur, value } }) => (
//       <TextInput
//         // style={styles.input}
//         onChangeText={onChange}
//         onBlur={onBlur}
//         value={value}
//         placeholder="Observação"
//       />
//     )}
//   />

//   <Text className="text-3xl">Parecer Geral da Vela:</Text>


//   <TouchableOpacity className="bg-pink-600 py-3 px-10 rounded-full w-full max-w-xs mx-auto mb-4"
//     onPress={handleSubmit(handleCreate)} >
//     <Text className="text-white text-center">Criar</Text>
//   </TouchableOpacity>
// </ScrollView>
// );
// }