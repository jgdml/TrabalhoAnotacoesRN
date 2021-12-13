import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import FloatingButton from "./components/FloatingButton";
import ExpandableCard from "./components/ExpandableCard";

import AnotacoesController from "../controller/anotacoes_controller";

export default class Anotacoes extends React.Component {
    state = {
        lista: null,
    };

    constructor(props) {
        super(props);
        this.controller = new AnotacoesController(this.props.navigation);
    }

    refreshList = async () => {
        lista = await this.controller.findAll();
        this.setState({
            lista: lista,
        });
    };

    loadingScreen = () => {
        return <ActivityIndicator size={50} color="#4760c9" />;
    };

    emptyScreen = () => {
        return (
            <View style={{ alignItems: "center" }}>
                <MaterialIcons name="note" size={52} color={"gray"} />

                <Text style={styles.emptyText}>
                    {
                        "Nenhuma anotação encontrada.\nAperte o botão para adicionar uma nova."
                    }
                </Text>
            </View>
        );
    };

    showCards = (lista) => {
        return (
            <ScrollView style={{ width: "100%"}} contentContainerStyle={{paddingBottom: "15%"}}>
                {lista.map((note) => (
                    <React.Fragment key={note.id}>
                        <ExpandableCard
                            title={note.titulo}
                            text={note.texto}
                            editPressed={() => this.controller.goToCreateForm(this.refreshList, note)}
                            deletePressed={() => {
                                this.controller.delete(note.id).then(() => this.refreshList());
                            }}
                        />
                    </React.Fragment>
                ))}
            </ScrollView>
        );
    };

    getContent = () => {
        if (this.state.lista == null) {
            return this.loadingScreen();
        }
        if (this.state.lista.length == 0) {
            return this.emptyScreen();
        }
        return this.showCards(lista);
    };

    componentDidMount(){
        this.refreshList()
    }

    render() {
        return (
            <View style={styles.container}>
                {this.getContent()}

                <FloatingButton
                    icon="note-add"
                    onPress={() => this.controller.goToCreateForm(this.refreshList)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: "5%",
        paddingHorizontal: "3%",
    },

    emptyText: {
        color: "gray",
        fontSize: 18,
        textAlign: "center",
    },
});
