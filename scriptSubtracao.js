export default class Subtracao {
    constructor(lista, Ganhos) {
        this.lista = lista;
        this.Ganhos = Ganhos;
    }

    subtrairValoDaLista() {
        let valor = this.Ganhos;
        this.lista.forEach(list => {
            let resultado = valor - list;
            valor = resultado;
            console.log(valor.toFixed(2));
        });
        return valor.toFixed(2);
    }
}