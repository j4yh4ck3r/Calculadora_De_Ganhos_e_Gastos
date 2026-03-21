export default class Calculo {
    constructor(vendas, precos){
        this.vendas = vendas;
        this.precos = precos;
    }

    primeiroDia(){
        return this.vendas * this.precos;
    }

    semana(){
        return this.primeiroDia() * 7;
    }

    mes(){
        return this.semana() * 4;
    }

    ObjetoTotal(){
        return {
            Dia: this.primeiroDia(),
            Semana: this.semana(),
            Mes: this.mes()
        }
    }

    ListaDia(){
        const Lista = [
            this.primeiroDia()
        ]
        return Lista;
    }

    ListaSemana(){
        const Lista = [
            this.semana()
        ]
        return Lista;
    }

    ListaMes(){
        const Lista = [
            this.mes()
        ]
        return Lista;
    }

    ListaTotal(){
        const Lista = [
            this.primeiroDia(),
            this.semana(),
            this.mes()
        ]
        return Lista;
    }
}