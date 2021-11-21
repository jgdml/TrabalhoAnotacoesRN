import React from "react";
import InitDb from "./lib/db/sqlite/initDb";

import Anotacoes from "./lib/view/anotacoes";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        new InitDb();
    }

    render() {
        return <Anotacoes />;
    }
}
