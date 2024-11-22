import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

interface DatePickerInputProps {
  name: string; // Nome do campo
  control: any; // Controle do React Hook Form
  label: string; // Rótulo do campo
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ name, control, label }) => {
  const [show, setShow] = React.useState(false); // Controle para exibir o seletor de data

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={new Date()} // Valor inicial padrão
      render={({ field: { onChange, value } }) => (
        <View style={{ marginBottom: 16 }}>
          {/* Rótulo do campo */}
          <Text style={{ marginBottom: 8, fontSize: 18, fontWeight: 'bold' }}>{label}</Text>

          {/* Botão para abrir o seletor de data */}
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              padding: 12,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
            }}
          >
            <Text>
              {value ? format(value, 'dd/MM/yyyy') : 'Selecionar data'} {/* Mostra a data formatada ou o texto padrão */}
            </Text>
          </TouchableOpacity>

          {/* Modal para iOS */}
          {show && Platform.OS === 'ios' && (
            <Modal transparent={true} animationType="slide">
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    padding: 20,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  <DateTimePicker
                    value={value || new Date()} // Data atual ou valor selecionado
                    mode="date"
                    display="spinner" // Exibe o seletor no formato spinner
                    themeVariant="light" // Força o tema claro
                    onChange={(event, selectedDate) => {
                      if (selectedDate) {
                        onChange(selectedDate); // Atualiza o valor no formulário
                      }
                    }}
                  />
                  {/* Botão para fechar o modal */}
                  <TouchableOpacity
                    onPress={() => setShow(false)}
                    style={{ marginTop: 10, alignItems: 'center' }}
                  >
                    <Text style={{ color: 'blue', fontSize: 16 }}>Fechar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}

          {/* Picker para Android */}
          {show && Platform.OS === 'android' && (
            <DateTimePicker
              value={value || new Date()} // Data atual ou valor selecionado
              mode="date"
              display="calendar" // Exibe no formato de calendário
              onChange={(event, selectedDate) => {
                setShow(false); // Fecha o picker
                if (selectedDate) {
                  onChange(selectedDate); // Atualiza o valor no formulário
                }
              }}
            />
          )}
        </View>
      )}
    />
  );
};

export default DatePickerInput;
