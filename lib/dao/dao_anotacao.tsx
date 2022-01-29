import RepoAnotacaoFire from "../persistence/firestore/repo/repo_anotacao_fire";
import RepoAnotacaoSqlite from "../persistence/sqlite/repo/repo_anotacao_sqlite";
import Anotacao from "../entity/anotacao";

export default class DaoAnotacao{

    constructor(){
        this.sqlite = new RepoAnotacaoSqlite();
        this.firebase = new RepoAnotacaoFire();
    }

    private sqlite : RepoAnotacaoSqlite;
    private firebase : RepoAnotacaoFire;

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