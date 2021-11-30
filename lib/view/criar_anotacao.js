import React from "react";
import { View, StyleSheet } from "react-native";
import ReactiveTextInput from "./components/ReactiveTextInput";

import { MaterialIcons } from "@expo/vector-icons";

export default class CriarAnotacao extends React.Component {
    state = {
        titulo: "",
        texto: "",
    };

    constructor(props) {
        super(props);

        props.navigation.setOptions({
            headerRight: () => (
                <MaterialIcons.Button
                    name="save"
                    onPress={() => alert("salvar")}
                    color="white"
                    size={26}
                    backgroundColor={"transparent"}
                    style={styles.saveButton}
                />
            ),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ReactiveTextInput
                    label={"Título"}
                    autoFocus={true}
                    maxLength={40}
                    placeholder={"Anotação 1"}
                    value={this.state.titulo}
                    onChangeText={(text) => this.setState({ titulo: text })}
                />

                <ReactiveTextInput
                    label={"Texto"}
                    maxLength={1000}
                    multiline={true}
                    placeholder={"Texto da anotação 1"}
                    value={this.state.texto}
                    onChangeText={(text) => this.setState({ texto: text })}
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
