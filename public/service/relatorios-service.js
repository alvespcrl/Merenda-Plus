export class RelatorioService {
    constructor() {
        this.urlBase = "/relatorios";
    }

    async getRelatorios(){
        const resposta = await fetch(this.urlBase);
        return resposta.json();
    }

    async getRelatorio(id) {
        const resposta = await fetch(`${this.urlBase}/${id}`);
        return resposta.json();
    }

    async criarRelatorios(relatorios) {
        const resposta = await fetch(this.urlBase, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(relatorios),
        });
        return resposta.json();
    }

    async atualizarRelatorios(id, relatorios){
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(relatorios),
        });
        return resposta.json();
    }

    async excluirRelatorios(id) {
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: "DELETE",
        });
        return resposta.json();
    }
}