import React from "react"
import { View, Image, Text } from "react-native"
import { styles } from "./styles"
import logo from "../../../assets/Batman-Logo.png"
export const Logo = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>BAT PASS GENERETOR</Text>
            <Image source={logo} style={styles.image}/>
        </View>
    )
}
