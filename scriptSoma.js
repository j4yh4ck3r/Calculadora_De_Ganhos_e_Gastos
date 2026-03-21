export default class SomaDados {
    constructor(Lista) {
        this.Lista = Lista;
        this.Flat = Lista.flat();
        this.Objeto = {Resutado: 0}
    }

    GuardaDados() {
        return this.Lista;
    }

    SomaTodosDados() {
        const resutado = this.Flat.reduce((a, b) => a + b);
        Object.seal(this.Objeto);
        const resultadoToFixed = resutado.toFixed(2);
        this.Objeto.Resutado = resultadoToFixed;
        return resultadoToFixed;
    }
}