import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default (props) => {
    return (
        <TouchableOpacity style={styles.floating} onPress={props.onPress}>
            <MaterialIcons name={props.icon} color="white" size={26} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    floating: {
        position: "absolute",
        right: 15,
        bottom: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4760c9",
        borderRadius: 100,
        padding: "5%",
        elevation: 4,
    },
});
