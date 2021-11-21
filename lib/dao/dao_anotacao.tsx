import { DatabaseConnection } from "../db/sqlite/connection";
import Anotacao from "../model/anotacao";

export default class DaoAnotacao{

    constructor(){
        this.db = DatabaseConnection.getConnection();
    }

    private db;

    public findAll(){
        var res = []

        return new Promise((resolve, reject) => {
            this.db.transaction(
                tx => tx.executeSql("SELECT * FROM ANOTACAO;", [],
                    (_, {rows}) => {
                        var jsons = rows._array
    
                        jsons.map(json => {
                            res.push(Anotacao.fromJson(json))
                        })
                        resolve(res)
                    },
    
                    (_, err) => {
                        console.log(err)
                        reject(err)
                    }
                )
            )
        })
    }

    public delete(id: number){
        return new Promise((resolve, reject) => {
            this.db.transaction(
                tx => tx.executeSql("DELETE FROM ANOTACAO WHERE ID = ?;", [id],
                    (_, {rowsAffected}) => resolve(rowsAffected),
                    (_, err) => {
                        console.log(err)
                        reject(err)
                    }
                )
            )
        })
    }

    public saveOrUpdate(anotacao: Anotacao){
        return new Promise((resolve, reject) => {
            if (anotacao.getId() == null){
                this.db.transaction(
                    tx => tx.executeSql(
                        "INSERT INTO ANOTACAO (ID, TITULO, TEXTO, DT_MODIFICACAO) VALUES (?, ?, ?, ?)", 
                        Object.values(anotacao),
    
                        (_, {insertId}) => resolve(insertId),
                        (_, err) => reject(err)
                        
                    )
                )
            }
            else{
                var vals = Object.values(anotacao)
                vals.splice(3, 0, vals.splice(0, 1)[0])

                this.db.transaction(
                    tx => tx.executeSql(
                        "UPDATE ANOTACAO SET TITULO = ?, TEXTO = ?, DT_MODIFICACAO = ? WHERE ID = ?",
                        vals,
    
                        (_, {insertId}) => resolve(insertId),
                        (_, err) => reject(err)
                        
                    )
                )
            }
            
        })
    }
}