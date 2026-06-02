export default class Subtracao {
    constructor(lista, saldo) {
        this.lista = lista;
        this.Saldo = saldo;
    }

    subtrairValoDaLista() {
        let SALDO = this.Saldo;
        this.lista.forEach(list => {
            let resultado = SALDO - list;
            SALDO = resultado;
            console.log(SALDO.toFixed(2));
        });
        return SALDO.toFixed(2);
    }
}