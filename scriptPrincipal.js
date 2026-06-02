import Calculo from "./scriptCalculo.js";
import Tabelas from "./scriptCriarTabela.js";
import SomaDados from "./scriptSoma.js";
import Subtracao from "./scriptSubtracao.js";
import ElementosDoHtml from "./scriptElementosDoHtml.js";

const btnGanhos = document.getElementById("btnGanhos");

const btnGastos = document.getElementById("btnGastos");

const ListaDeDados = [];
const SaldoAtual = [];

btnGanhos.addEventListener("click", async (e) => {
    e.preventDefault();
    const VendasValue = Number(ElementosDoHtml().Vendas);
    const PrecosValue = Number(ElementosDoHtml().Precos);

    if (!VendasValue && !PrecosValue) {
        const inputTodos = document.querySelectorAll("input");
        inputTodos.forEach(input => {
            input.style.border = "1px solid red";
            console.log("erro");
        })
    } else {
        const inputTodos = document.querySelectorAll("input");
        inputTodos.forEach(input => {
            input.style.border = "";
        })
        const Calcula = new Calculo(VendasValue, PrecosValue);

        const TabelaSemana = new Tabelas();
        TabelaSemana.tabelaPraSemana(Calcula.resultadoDaSemana);

        const TabelaMes = new Tabelas();
        TabelaMes.tabelaPraMes(Calcula.resultadoDoMes);

        ListaDeDados.push(Calcula.resultadoDoDia);
        const CalculaValorDeLista = new SomaDados(ListaDeDados);

        const linhasTR2 = document.querySelector(".TR2");
        const numeroDeDias = linhasTR2.querySelectorAll("tr").length + 1;

        if (numeroDeDias > 7) {
            console.log("Deu!")
        } else {
            SaldoAtual.unshift(CalculaValorDeLista.SomaTodosDados());
            const ResutadoFinal = CalculaValorDeLista.Objeto;
            console.log(ResutadoFinal)
            const TabelaDoResutado = new Tabelas(ResutadoFinal);
            TabelaDoResutado.tabelaPraObjetos();
            ElementosDoHtml().ObjetoGastos[3];
            ElementosDoHtml().ObjetoGastos[2]
        }
    }
});

let ListaDeGastos = [];

btnGastos.addEventListener("click", (e) => {
    e.preventDefault();
    const Saldo = SaldoAtual[0];

    const GastosVendas = ElementosDoHtml().ObjetoGastos[0];
    ListaDeGastos.push(GastosVendas);
    const subtrairGastos = new Subtracao(ListaDeGastos, Saldo);
    const TabelaGastos = new Tabelas();
    TabelaGastos.tabelaPraUmValor(subtrairGastos.subtrairValoDaLista());
    ElementosDoHtml().ObjetoGastos[2];
})