import { DatabaseConnection } from "./connection";
import { initScript, insertsTeste } from "./script";

var db = null
export default class InitDb {

    constructor() {
        db = DatabaseConnection.getConnection()
        this.initDb()
    }

    private initDb() {
        // db.transaction(
        //     tx => tx.executeSql("DROP TABLE IF EXISTS ANOTACAO;", [],
        //         () => console.log("drop ok"),
        //         (_, err) => {
        //             console.log("drop erro")
        //             console.log(err)
        //         }
        //     )
        // )

        db.transaction(
            tx => tx.executeSql(initScript, [],
                (_) => console.log("banco iniciado"), 
                (_, err) => {
                    console.log("erro ao iniciar banco")
                    console.log(err)
                }
            ),
        )

        // db.transaction(
        //     tx => tx.executeSql(insertsTeste), [],
        //     (_) => console.log("valores inseridos"), 
        //     (_, err) => {
        //         console.log("erro ao inserir testes")
        //         console.log(err)
        //     },
        // )
    }

}