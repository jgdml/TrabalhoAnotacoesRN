import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

export default class ReactiveTextInput extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        hasFocus: false
    }

    render(){
        return(
            <View style={styles.inputContainer}>
                <Text style={[styles.label, this.state.hasFocus ? {color: "#4760c9"} : {}]}>{this.props.label}</Text>
                <TextInput 
                    autoFocus={this.props.autoFocus}
                    maxLength={this.props.maxLength}
                    placeholder={this.props.placeholder + this.props.multiline ? "\n\n" : ""}
                    multiline={this.props.multiline}
                    style={[styles.input, this.state.hasFocus ? {borderColor: "#4760c9"} : {}]}
                    onFocus={() => this.setState({hasFocus: true})}
                    onBlur={() => this.setState({hasFocus: false})}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    textAlignVertical={this.props.multiline ? "top" : "center"}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "flex-start",
        width: "100%",
        marginVertical: "5%"
    },
    input: {
        width: "100%",
        fontSize: 18,
        padding: "3%",
        borderColor: "#909090",
        borderWidth: 2,
        borderRadius: 7

    },
    label: {
        fontSize: 16,
        color: "#757575"
    }
})