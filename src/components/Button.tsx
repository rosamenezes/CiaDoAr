import React from "react";
import { TouchableOpacity as RNPTouchableOpacity } from "react-native";
import { Text } from "react-native";

interface ButtonProps {
    name: string;
    onPress?: () => void;
}
export default function Button( props: ButtonProps ) {
    return (
        <RNPTouchableOpacity 
        className="bg-pink-600 py-3 px-10 rounded-full w-full max-w-xs mx-auto mb-4" 
            onPress={props.onPress}
        >
            <Text className="text-white text-center">{props.name}</Text>
        </RNPTouchableOpacity>
    );
    }