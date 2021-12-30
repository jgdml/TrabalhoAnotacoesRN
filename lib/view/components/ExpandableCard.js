import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class ExpandableCard extends React.Component {
    state = {
        isOpen: false,
    };

    constructor(props) {
        super(props);
    }

    toggleCard = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    hiddenContent() {
        return (
            <View style={styles.content}>
                <Text style={styles.noteText}>{this.props.text}</Text>

                <View style={styles.actions}>
                    <MaterialIcons.Button
                        backgroundColor="transparent"
                        color="black"
                        size={22}
                        name="edit"
                        onPress={this.props.editPressed}
                    />
                    <MaterialIcons.Button
                        backgroundColor="transparent"
                        color="black"
                        size={22}
                        name="delete"
                        onPress={this.props.deletePressed}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleCard}>
                    <View style={styles.heading}>
                        <MaterialIcons name="note" size={28} />

                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{this.props.title}</Text>
                            <Text style={styles.date}>{this.props.date}</Text>
                        </View>

                        <MaterialIcons
                            name={this.state.isOpen ? "expand-less" : "expand-more"}
                            size={24}
                        />
                    </View>
                </TouchableOpacity>

                {this.state.isOpen ? this.hiddenContent() : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: "5%",
        marginVertical: "2%",
        justifyContent: "space-between",

        borderRadius: 5,
        shadowColor: "gray",
        elevation: 1,
    },

    heading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    titleContainer: {
        flexDirection: "column",
    },

    date: {
        fontSize: 13,
        color: "gray"
    },

    content: {
        paddingTop: "8%",
        justifyContent: "space-around",
    },

    title: {
        fontSize: 17,
    },

    noteText: {
        fontSize: 15,
        textAlign: "justify",
    },

    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});
