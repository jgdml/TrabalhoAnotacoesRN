import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Anotacao from "../../../entity/anotacao";

export default class RepoAnotacaoFire {
    constructor() {
        this.collection = firebase.firestore().collection("anotacao");
    }
    private collection;


    public async findAll(){
        var res = await this.collection.get()


        var lista = res.docs.map(doc => {
            return Anotacao.fromJson(doc.data());
        })

        return lista;
    }

    public async saveOrUpdate(anotacao: Anotacao) {
        await this.collection
            .doc(anotacao.getId().toString())
            .set(Anotacao.toJson(anotacao));
    }


    public async delete(id: string){
        await this.collection.doc(id).delete()
    }


    public async dropCollection() {
        var res = await this.findAll()
        for (let anotacao of res){
            this.delete(anotacao.id.toString())
        }
    }
}
