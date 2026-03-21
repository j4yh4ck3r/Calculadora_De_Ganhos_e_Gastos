export default class Objetos {
    constructor(Objeto) {
        this.Objeto = Objeto;
    }

    TabelaPraUmValor(Gastos) {
        const linhasTR3 = document.querySelector(".TR3");
        const linhasTR4 = document.querySelector(".TR4");
        const linhatr3 = document.createElement("tr");
        const linhatr4 = document.createElement("tr");
        
        const linhaTH = document.createElement("th");
        linhaTH.textContent = "Resutado dos seus gastos";
        linhatr3.appendChild(linhaTH)

        const linhaTD = document.createElement("td");
        linhaTD.textContent = `R$ ${Gastos}`;
        linhatr4.appendChild(linhaTD);
        
        linhasTR3.appendChild(linhatr3);
        linhasTR4.appendChild(linhatr4);
    }

    TabelaPraObjetos() {
        const linhasTR1 = document.querySelector(".TR1");
        const linhasTR2 = document.querySelector(".TR2");
        const chaves = Object.keys(this.Objeto);
        const Valores = Object.values(this.Objeto);

        chaves.forEach((chave, i) => {
            const tr1 = document.createElement("tr");
            const tr2 = document.createElement("tr");

            const th = document.createElement("th");
            th.textContent = `${chave} dos seus ganhos`;
            tr1.appendChild(th);

            const td = document.createElement("td");
            td.textContent = `R$ ${Valores[i]}`;
            tr2.appendChild(td);

            linhasTR1.appendChild(tr1);
            linhasTR2.appendChild(tr2);
        });
    }
}