import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DaoAnotacao from "../dao/dao_anotacao";
import Anotacao from "../model/anotacao";

export default class Anotacoes extends React.Component{

    constructor(props){
        super(props)
    }

    async teste(){
        var dao = new DaoAnotacao()
        
        await dao.delete(4)

        await dao.saveOrUpdate(new Anotacao(2, "zxczxc", "t", "dt"))
        await dao.saveOrUpdate(new Anotacao(null, "adsa", "t", "dt"))

        var lista = await dao.findAll()
        console.log(lista)
    }

    render(){
        
        this.teste()

        return (
            <View style={styles.container}>
                <Text>Teste</Text>

                <StatusBar style="auto" />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});