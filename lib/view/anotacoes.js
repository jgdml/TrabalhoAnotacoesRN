import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import FloatingButton from "./components/FloatingButton";
import ExpandableCard from "./components/ExpandableCard";

import DaoAnotacao from "../dao/dao_anotacao";
import Anotacao from "../model/anotacao";

export default class Anotacoes extends React.Component {
    constructor(props) {
        super(props);
    }

    dataTest = [
        {
            title: "anotacao 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            editPressed: () => alert("editar"),
            deletePressed: () => alert("excluir"),
        },
        {
            title: "anotacao 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            editPressed: () => alert("editar"),
            deletePressed: () => alert("excluir"),
        },
    ];

    async teste() {
        // var dao = new DaoAnotacao();
        // await dao.delete(4);
        // await dao.saveOrUpdate(new Anotacao(2, "zxczxc", "t", "dt"));
        // await dao.saveOrUpdate(new Anotacao(null, "adsa", "t", "dt"));
        // var lista = await dao.findAll();
        // console.log(lista);
    }

    emptyScreen = () => {
        return (
            <View style={{ alignItems: "center" }}>
                <MaterialIcons name="note" size={52} color={"gray"} />

                <Text style={styles.emptyText}>
                    {
                        "Nenhuma annotação encontrada.\nAperte o botão para adicionar uma nova."
                    }
                </Text>
            </View>
        );
    };

    showCards = () => {
        return (
            <ScrollView style={{ width: "100%" }}>
                {this.dataTest.map((note) => (
                    <ExpandableCard
                        title={note.title}
                        text={note.text}
                        editPressed={note.editPressed}
                        deletePressed={note.deletePressed}
                    />
                ))}
            </ScrollView>
        );
    };

    getContent = () => {
        if (this.dataTest.length == 0) {
            return this.emptyScreen();
        }
        return this.showCards();
    };

    render() {
        return (
            <View style={styles.container}>
                {this.getContent()}

                <FloatingButton icon="note-add" onPress={() => alert("teste")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: "5%",
        paddingHorizontal: "3%",
    },

    emptyText: {
        color: "gray",
        fontSize: 18,
        textAlign: "center",
    },
});
