export default class Anotacao{
    constructor(id?: number, titulo?: string, texto?: string, dtModificacao?: string){
        this.id = id
        
        this.titulo = titulo
        this.texto = texto
        this.dtModificacao = dtModificacao
    }

    private id: number;

    private titulo: string;
    private texto: string;
    private dtModificacao: string;


    public static fromJson(json: string){
        return new Anotacao(
            json['ID'],
            json['TITULO'],
            json['TEXTO'],
            json['DT_MODIFICACAO']
        )
    }

    public static toJson(anotacao: Anotacao){
        return {
            "ID": anotacao.id,
            "TITULO": anotacao.titulo,
            "TEXTO": anotacao.texto,
            "DT_MODIFICACAO": anotacao.dtModificacao,
        }
    }


    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getTexto(): string {
        return this.texto;
    }

    public setTexto(texto: string): void {
        this.texto = texto;
    }

    public getDtModificacao(): string {
        return this.dtModificacao;
    }

    public setDtModificacao(dtModificacao: string): void {
        this.dtModificacao = dtModificacao;
    }
}