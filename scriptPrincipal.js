import Calculo from "./scriptCalculo.js";
import Tabelas from "./scriptCriarTabela.js";
import SomaDados from "./scriptSoma.js";
import Subtracao from "./scriptSubtracao.js";

const btnGanhos = document.getElementById("btnGanhos");
const Vendas = document.getElementById("Vendas");
const Precos = document.getElementById("Precos");

const btnGastos = document.getElementById("btnGastos");
const Gastos = document.getElementById("Gastos");

const ListaDeDados = [];
const SaldoAtual = [];

btnGanhos.addEventListener("click", async (e) => {
    e.preventDefault();
    const VendasValue = Number(Vendas.value);
    const PrecosValue = Number(Precos.value);

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

        const ValorDoDia = Calcula.ListaDia();

        ListaDeDados.push(ValorDoDia);
        const CalculaValorDeLista = new SomaDados(ListaDeDados);
        console.log(CalculaValorDeLista.SomaTodosDados());
        console.log(CalculaValorDeLista.Objeto);

        SaldoAtual.unshift(CalculaValorDeLista.SomaTodosDados());

        const ResutadoFinal = CalculaValorDeLista.Objeto;
        const TabelaDoResutado = new Tabelas(ResutadoFinal);
        TabelaDoResutado.TabelaPraObjetos();

        btnGastos.removeAttribute("disabled");
        Gastos.removeAttribute("disabled");
    }
});

let ListaDeGastos = [];

btnGastos.addEventListener("click", (e) => {
    e.preventDefault();
    const Saldo = SaldoAtual[0];

    const GastosVendas = Gastos.value;
    ListaDeGastos.push(GastosVendas);
    const subtrairGastos = new Subtracao(ListaDeGastos, Saldo);
    console.log(subtrairGastos.subtrairValoDaLista());
    const TabelaGastos = new Tabelas();
    TabelaGastos.TabelaPraUmValor(subtrairGastos.subtrairValoDaLista());
})