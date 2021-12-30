import DaoAnotacaoFire from "../db/firestore/dao/dao_anotacao_fire";
import DaoAnotacaoSqlite from "../db/sqlite/dao/dao_anotacao_sqlite";
import Anotacao from "../model/anotacao";

export default class DaoAnotacao{

    constructor(){
        this.sqlite = new DaoAnotacaoSqlite();
        this.firebase = new DaoAnotacaoFire();
    }

    private sqlite : DaoAnotacaoSqlite;
    private firebase : DaoAnotacaoFire;

    async syncDatabase()  {
        var localRes = await this.sqlite.findAll();

        await this.firebase.dropCollection();

        for (let anotacao of localRes){
            await this.firebase.saveOrUpdate(anotacao);
        }
    }

    public findAll(){
        this.syncDatabase()
        return this.sqlite.findAll()

    }
    public saveOrUpdate(anotacao: Anotacao){
        return this.sqlite.saveOrUpdate(anotacao)
    }

    public delete(id: number){
        return this.sqlite.delete(id)
    }
}