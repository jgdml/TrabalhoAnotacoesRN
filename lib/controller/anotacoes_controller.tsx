import { Alert } from "react-native";
import Anotacao from "../model/anotacao";
import AnotacaoService from "../service/anotacao_service";

export default class AnotacoesController {
    constructor(navigation) {
        this.svc = new AnotacaoService();
        this.navigation = navigation;
    }

    private navigation;
    private svc: AnotacaoService;

    public async findAll() {
        return await this.svc.findAll();
    }

    public async delete(id: number) {
        return new Promise((resolve) => {
            Alert.alert(
                "Excluir Anotação?",
                "Tem certeza que deseja excluir essa anotação?",
                [
                    {
                        text: "SIM",
                        onPress: async () => {
                            await this.svc.delete(id);
                            resolve(null);
                        },
                    },
                    {
                        text: "NÃO",
                        onPress: () => resolve(null),
                    },
                ]
            );
        });
    }

    public async goToCreateForm(refreshList, anotacao: Anotacao) {
        if (anotacao != null){
            await this.navigation.navigate("create", {refreshList: refreshList, anotacao: anotacao});
        }
        else{
            await this.navigation.navigate("create", {refreshList: refreshList});
        }
        
    }
}
