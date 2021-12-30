import Anotacao from "../../../model/anotacao";
import { DatabaseConnection } from "../connection";


export default class DaoAnotacaoSqlite{

    constructor(){
        this.db = DatabaseConnection.getConnection();
    }

    private db;

    public findAll() : Promise<Anotacao[]>{
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
            var vals = Object.values(anotacao)
            vals = vals.slice(0, 3)

            if (anotacao.getId() == null){
                this.db.transaction(
                    tx => tx.executeSql(
                        "INSERT INTO ANOTACAO (ID, TITULO, TEXTO) VALUES (?, ?, ?)", 
                        vals,
    
                        (_, {insertId}) => resolve(insertId),
                        (_, err) => reject(err)
                        
                    )
                )
            }
            else{
                // trocar posicao do id para ultimo por conta do select
                vals.splice(2, 0, vals.splice(0, 1)[0])
                
                this.db.transaction(
                    tx => tx.executeSql(
                        "UPDATE ANOTACAO SET TITULO = ?, TEXTO = ?, DT_MODIFICACAO = CURRENT_TIMESTAMP WHERE ID = ?",
                        vals,
    
                        (_, {insertId}) => resolve(insertId),
                        (_, err) => reject(err)
                        
                    )
                )
            }
            
        })
    }
}