import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons'; // Ícones do Material Design

interface ChoiceInputWithObservationProps {
  name: string; // Nome do campo principal
  control: any; // Controle do React Hook Form
  label: string; // Rótulo do campo
  observationName: string; // Nome do campo de observação
}

const ChoiceInputWithObservation: React.FC<ChoiceInputWithObservationProps> = ({
  name,
  control,
  label,
  observationName,
}) => {
  return (
    <View style={{ marginBottom: 16 }}>
      {/* Rótulo do campo */}
      <Text style={{ marginBottom: 8, fontSize: 24, fontWeight: 'bold' }}>
        {label}
      </Text>

      {/* Controlador do campo principal */}
      <Controller
        control={control}
        name={name}
        defaultValue={null} // Valor inicial
        render={({ field: { onChange, value } }) => (
          <>
            {/* Botões de escolha */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* Botão de "check" */}
              <TouchableOpacity
                onPress={() => onChange('check')} // Define o valor como "check"
                style={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: value === 'check' ? 'blue' : '#ccc', // Cor da borda muda se selecionado
                  borderRadius: 8,
                  marginRight: 8,
                }}
              >
                <MaterialIcons
                  name="check"
                  size={24}
                  color={value === 'check' ? 'blue' : 'black'} // Cor do ícone muda se selecionado
                />
              </TouchableOpacity>

              {/* Botão de "x" */}
              <TouchableOpacity
                onPress={() => onChange('x')} // Define o valor como "x"
                style={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: value === 'x' ? 'blue' : '#ccc', // Cor da borda muda se selecionado
                  borderRadius: 8,
                }}
              >
                <MaterialIcons
                  name="close"
                  size={24}
                  color={value === 'x' ? 'blue' : 'black'} // Cor do ícone muda se selecionado
                />
              </TouchableOpacity>
            </View>

            {/* Campo de observação (visível apenas se 'x' for selecionado) */}
            {value === 'x' && (
              <Controller
                control={control}
                name={observationName}
                defaultValue="" // Valor inicial vazio
                render={({ field: { onChange: onChangeObs, value: valueObs } }) => (
                  <TextInput
                    style={{
                      marginTop: 12,
                      padding: 12,
                      borderWidth: 1,
                      borderColor: '#ccc',
                      borderRadius: 10,
                    }}
                    placeholder="Escreva suas observações aqui" // Texto placeholder
                    onChangeText={onChangeObs} // Atualiza o valor de observação
                    value={valueObs} // Valor atual
                    multiline // Permite múltiplas linhas
                  />
                )}
              />
            )}
          </>
        )}
      />
    </View>
  );
};

export default ChoiceInputWithObservation;
