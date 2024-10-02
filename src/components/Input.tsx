import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    label: string;
    placeholder: string;   
}

export default function Input( props: InputProps ) {
    return (
        <RNTextInput/>
    )
}