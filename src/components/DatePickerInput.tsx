import React from 'react';
import { View, Text, TouchableOpacity, Platform, Modal, useColorScheme } from 'react-native';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

interface DatePickerInputProps {
  name: string;
  control: any;
  label: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ name, control, label }) => {
  const [show, setShow] = React.useState(false);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={new Date()}
      render={({ field: { onChange, value } }) => (
        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8, fontSize: 18, fontWeight: 'bold' }}>{label}</Text>
          <TouchableOpacity
            onPress={() => {
              setShow(true);
            }}
            style={{ padding: 12, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}
          >
            <Text>{value ? format(value, 'dd/MM/yyyy') : 'Selecionar data'}</Text>
          </TouchableOpacity>

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
                    value={value || new Date()}
                    mode="date"
                    display="spinner"
                    themeVariant="light" // Força o tema claro
                    onChange={(event, selectedDate) => {
                      if (selectedDate) {
                        onChange(selectedDate);
                      }
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setShow(false);
                    }}
                    style={{ marginTop: 10, alignItems: 'center' }}
                  >
                    <Text style={{ color: 'blue', fontSize: 16 }}>Fechar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}

          {show && Platform.OS === 'android' && (
            <DateTimePicker
              value={value || new Date()}
              mode="date"
              display="calendar"
              onChange={(event, selectedDate) => {
                setShow(false);
                if (selectedDate) {
                  onChange(selectedDate);
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
