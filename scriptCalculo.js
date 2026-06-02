export default class Calculo {
    constructor(vendas, precos){
        this.resultadoDoDia = vendas * precos;
        this.resultadoDaSemana = this.resultadoDoDia * 7;
        this.resultadoDoMes = this.resultadoDaSemana * 4;
    }
}