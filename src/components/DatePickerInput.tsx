// src/components/DatePickerInput.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

interface DatePickerInputProps {
  name: string;
  control: any;
  label: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ name, control, label }) => {
  const [show, setShow] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={new Date()}
      render={({ field: { onChange, value } }) => (
        <View style={{ marginBottom: 16 }}>
          <Text style={{ marginBottom: 8 }}>{label}</Text>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{ padding: 12, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}
          >
            <Text>{value ? format(value, 'dd/MM/yyyy') : 'Selecionar data'}</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={value || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => {
                setShow(Platform.OS === 'ios');
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
