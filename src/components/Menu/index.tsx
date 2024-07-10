import React, {useState} from "react"
import { View } from "react-native"
import { styles } from "./styles"
import { Input } from "../Input"
import { Button } from "../Button"
import { generatePass } from "../../services/generatePassword"

export const Menu = () =>{
    const [pass, setPass] = useState('')
    const [color, setColor] = useState('#FAC00153')

    const handleGeneratePass = () => {
        const newPass = generatePass()
        setPass(newPass);
        setColor("#FABF01")
    }

    return(
        <View style={styles.container}>
            <Input pass={pass} color={color} setPass={setPass} setColor={setColor}/>
            <Button onPress={handleGeneratePass} text="GENERATE"/>
        </View>
    )
}
