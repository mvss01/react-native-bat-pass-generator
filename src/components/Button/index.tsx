import React from "react"
import {  Pressable, Text } from "react-native"
import { styles } from "./styles"

interface ButtonProps {
    text: string
    onPress: () => void
}

export const Button = ({ onPress, text }: ButtonProps) => {
    return(
        <Pressable
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}
