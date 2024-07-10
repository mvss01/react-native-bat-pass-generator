import React from "react"
import { TextInput, Pressable } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { styles } from "./styles"
import * as Clipboard from 'expo-clipboard'

interface InputProps {
    pass: string
    color: string
    setPass: (pass: string) => void
    setColor: (pass: string) => void
}

export const Input = ({ pass, color, setPass, setColor}: InputProps) =>{

    const copyPass = () => {
        if(pass){
            Clipboard.setStringAsync(pass)
            setPass("")
            setColor("#FAC00153")
        }
    }

    return(
        <Pressable onPress={copyPass}>
            <TextInput value={pass} placeholder="PASS" style={styles.input} placeholderTextColor="#fac00153" readOnly/>
            <FontAwesome5 name="copy" size={24} color={color} style={styles.icon}/>
        </Pressable>
    )
}
