import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DatabaseConnection } from "../db/sqlite/connection";
import Anotacao from "../model/anotacao";

export default class Anotacoes extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        var db = DatabaseConnection.getConnection()
        
        db.transaction(
            tx => tx.executeSql("SELECT * FROM ANOTACAO;", [],
                (_, {rows}) => {
                    var jsons = rows._array
                    var a = Anotacao.fromJson(jsons[0])
                    console.log(a)

                    var b = Anotacao.toJson(a)
                    console.log(b)
                    console.log(b['TEXTO'])
                    
                },
        ))

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