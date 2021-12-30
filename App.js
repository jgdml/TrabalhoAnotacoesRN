import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Anotacoes from "./lib/view/anotacoes";
import InitDb from "./lib/db/sqlite/initDb";
import CriarAnotacao from "./lib/view/criar_anotacao";
import InitFirebase from "./lib/db/firestore/initialize";

const Stack = createNativeStackNavigator();

const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#4760c9",
        text: "white",
    },
};

function App() {
    new InitDb();
    new InitFirebase()

    return (
        <NavigationContainer theme={customTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    component={Anotacoes}
                    options={{
                        title: "Anotações",
                        headerStyle: {
                            backgroundColor: "#4760c9",
                        },
                    }}
                />
                <Stack.Screen
                    name="create"
                    component={CriarAnotacao}
                    options={{
                        title: "Criar Anotação",
                        headerStyle: {
                            backgroundColor: "#4760c9",
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
