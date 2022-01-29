import { Alert } from "react-native";
import Anotacao from "../entity/anotacao";
import AnotacaoService from "../service/anotacao_service";

export default class CriarAnotacaoController {
    constructor(props) {
        this.svc = new AnotacaoService();
        this.props = props;
    }
    private props;
    private svc: AnotacaoService;

    public async save(anotacao: Anotacao) {
        var err = this.svc.validate(anotacao);

        if (err != null) {
            Alert.alert("Erro", err);
            return err;
        }

        await this.svc.saveOrUpdate(anotacao);
        await this.props.route.params.refreshList();
        this.props.navigation.goBack();
    }
}
