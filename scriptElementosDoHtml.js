export default function ElementosDoHtml() {
    const btnGanhos = document.getElementById("btnGanhos");
    const Vendas = document.getElementById("Vendas");
    const Precos = document.getElementById("Precos");
    const btnGastos = document.getElementById("btnGastos");
    const Gastos = document.getElementById("Gastos");

    const ObjetoGastos = [
        Gastos.value,
        Gastos.value = "",
        Gastos.removeAttribute("disabled"),
        btnGastos.removeAttribute("disabled")
    ]

    const InputHtml = {
        "Vendas": Vendas.value,
        "Precos": Precos.value,
        "ObjetoGastos": ObjetoGastos
    }

    return InputHtml;
}