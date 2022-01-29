import React from "react";
import { View, StyleSheet } from "react-native";
import ReactiveTextInput from "./components/ReactiveTextInput";

import { MaterialIcons } from "@expo/vector-icons";
import CriarAnotacaoController from "../controller/criar_anotacao_controller";
import Anotacao from "../entity/anotacao";

export default class CriarAnotacao extends React.Component {
    state = {
        anotacao: new Anotacao(),
    };

    constructor(props) {
        super(props);
        this.controller = new CriarAnotacaoController(props);

        props.navigation.setOptions({
            headerRight: () => (
                <MaterialIcons.Button
                    name="save"
                    onPress={() => this.controller.save(this.state.anotacao)}
                    color="white"
                    size={26}
                    backgroundColor={"transparent"}
                    style={styles.saveButton}
                />
            ),
        });
    }

    componentDidMount() {
        if (this.props.route.params.anotacao != null) {
            this.setState({
                anotacao: this.props.route.params.anotacao,
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ReactiveTextInput
                    label={"Título"}
                    autoFocus={true}
                    maxLength={40}
                    placeholder={"Anotação 1"}
                    value={this.state.anotacao.titulo}
                    onChangeText={(text) => {
                        a = this.state.anotacao;
                        a.titulo = text;
                        this.setState({ anotacao: a });
                    }}
                />

                <ReactiveTextInput
                    label={"Texto"}
                    maxLength={1000}
                    multiline={true}
                    placeholder={"Texto da anotação 1"}
                    value={this.state.anotacao.texto}
                    onChangeText={(text) => {
                        a = this.state.anotacao;
                        a.texto = text;
                        this.setState({ anotacao: a });
                    }}
                />
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
    saveButton: { padding: 0, margin: 0 },
});
