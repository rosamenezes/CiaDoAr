import { View, Text } from "react-native";
import { useState } from "react";
import RNTextInput from "../components/Input";

interface laudoValues {
  data: string;
  proprietario: string;
  telefone: string;
  estado: string;
  cidade: string;
  marca: string;
  modelo: string;
  numeroSerie: string;
  dataFabricacao: string;
  corBordo: string;
  corExtra: string;
  corIntra: string;
  tirantes: string;
  batoquetesArgolas: string;
  distorcedor: string;
  roldanas: string;
  cargaLinhas: string;
  trocaLinhas: string;
  simetriaTrimagem: string;
  foto: string;
  peralCostura: string;
  intradorso: string;
  extradorso: string;
  resistenciaTecido: string;
  porosidadeBordo: string;
  porosidadeIntra: string;
  porosidadeExtra: string;
  parecerTecido: string;
  observacoesTecido: string;
  parecerGeral: string;
}
export default function laudoForm() {
  const [laudoValues, setLaudoValues] = useState<laudoValues>({
    data: "",
    proprietario: "",
    telefone: "",
    estado: "",
    cidade: "",
    marca: "",
    modelo: "",
    numeroSerie: "",
    dataFabricacao: "",
    corBordo: "",
    corExtra: "",
    corIntra: "",
    tirantes: "",
    batoquetesArgolas: "",
    distorcedor: "",
    roldanas: "",
    cargaLinhas: "",
    trocaLinhas: "",
    simetriaTrimagem: "",
    foto: "",
    peralCostura: "",
    intradorso: "",
    extradorso: "",
    resistenciaTecido: "",
    porosidadeBordo: "",
    porosidadeIntra: "",
    porosidadeExtra: "",
    parecerTecido: "",
    observacoesTecido: "",
    parecerGeral: "",
  });

const handleInputChange = (name: keyof laudoValues, value: string) => {
    setLaudoValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
<View className="flex-1 justify-center items-center bg-white">  
    <Text className="text-2xl font-bold">Laudo novo:</Text>
</View>
  );
}