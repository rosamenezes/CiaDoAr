import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons'; // Ou 'react-native-vector-icons/MaterialIcons'

interface ChoiceInputWithObservationProps {
  name: string;
  control: any;
  label: string;
  observationName: string;
}

const ChoiceInputWithObservation: React.FC<ChoiceInputWithObservationProps> = ({
  name,
  control,
  label,
  observationName,
}) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ marginBottom: 8 }}>{label}</Text>
      <Controller
        control={control}
        name={name}
        defaultValue={null}
        render={({ field: { onChange, value } }) => (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => onChange('check')}
                style={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: value === 'check' ? 'blue' : '#ccc',
                  borderRadius: 8,
                  marginRight: 8,
                }}
              >
                <MaterialIcons
                  name="check"
                  size={24}
                  color={value === 'check' ? 'blue' : 'black'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onChange('x')}
                style={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: value === 'x' ? 'blue' : '#ccc',
                  borderRadius: 8,
                }}
              >
                <MaterialIcons
                  name="close"
                  size={24}
                  color={value === 'x' ? 'blue' : 'black'}
                />
              </TouchableOpacity>
            </View>
            {/** Campo de observação, exibido apenas quando 'x' é selecionado */}
            {value === 'x' && (
              <Controller
                control={control}
                name={observationName}
                defaultValue=""
                render={({ field: { onChange: onChangeObs, value: valueObs } }) => (
                  <TextInput
                    style={{
                      marginTop: 12,
                      padding: 12,
                      borderWidth: 1,
                      borderColor: '#ccc',
                      borderRadius: 8,
                    }}
                    placeholder="Escreva suas observações aqui"
                    onChangeText={onChangeObs}
                    value={valueObs}
                    multiline
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
