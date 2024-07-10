import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';

export const Home = () => {
    return(
        <View style={styles.container}>
            <Header/>
            <Menu/>
            <StatusBar style="dark" backgroundColor='#FABF01' />
        </View>
    )
}
