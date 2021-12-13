import DaoAnotacao from "../dao/dao_anotacao";
import DomainError from "../error/domain_error";
import Anotacao from "../model/anotacao";

export default class AnotacaoService {
    constructor() {
        this.dao = new DaoAnotacao();
    }

    private dao: DaoAnotacao;

    public validate(anotacao: Anotacao) {
        try {
            this.checkNotNull(anotacao);
            this.checkLength(anotacao);
        } catch (err) {
            return err.message;
        }
    }

    private checkNotNull(anotacao: Anotacao) {
        var titulo = anotacao.getTitulo();
        var texto = anotacao.getTexto();

        if (titulo == null || titulo.length == 0) {
            throw new DomainError("O título não pode ser vazio");
        }

        if (texto == null || texto.length == 0) {
            throw new DomainError("Texto não pode ser vazio");
        }
    }

    private checkLength(anotacao: Anotacao) {
        var titulo = anotacao.getTitulo();
        var texto = anotacao.getTexto();

        if (titulo.length > 40) {
            throw new DomainError("O título não pode ter mais do que 40 caracteres");
        }
        if (texto.length > 1000) {
            throw new DomainError("O texto não pode ter mais do que 1000 caracteres");
        }
    }

    public async findAll() {
        return await this.dao.findAll()
    }

    public async delete(id: number) {
        await this.dao.delete(id);
    }

    public async saveOrUpdate(anotacao: Anotacao) {
        var err = this.validate(anotacao);

        if (err != null) {
            return err;
        }

        await this.dao.saveOrUpdate(anotacao);
    }
}
