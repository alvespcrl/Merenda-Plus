import { RelatorioService } from "../../service/relatorios-service";


const relatorioService = new RelatorioService()

function carregarDados() {
    let dados = relatorioService.getRelatorios();
    console.table(dados);
}

window.addEventListener("load", carregarDados)