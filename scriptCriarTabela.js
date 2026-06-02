import ElementosDoHtml from "./scriptElementosDoHtml.js";

export default class Tabelas {
    constructor(Objeto) {
        this.Objeto = Objeto;
    }

    tabelaPraUmValor(Gastos) {
        this.valor = 0;
        const linhasTR4 = document.querySelector(".TR4");

        for (let i = 0; i < linhasTR4.querySelectorAll("tr").length; i++) {
            const faliu = linhasTR4.querySelectorAll("tr")[i].textContent[3] === "0";

            if (faliu) {
                this.valor = linhasTR4.querySelectorAll("tr").length;
            }
        }

        if (this.valor > 0) {
            console.log("Ok");
        } else {
            const linhasTR3 = document.querySelector(".TR3");
            const linhasTR4 = document.querySelector(".TR4");
            const linhatr3 = document.createElement("tr");
            const linhatr4 = document.createElement("tr");

            const linhaTH = document.createElement("th");
            linhaTH.textContent = "Resutado dos seus gastos";
            linhatr3.appendChild(linhaTH);

            const linhaTD = document.createElement("td");
            linhaTD.textContent = `R$ ${Gastos}`;
            linhatr4.appendChild(linhaTD);

            linhasTR3.appendChild(linhatr3);
            linhasTR4.appendChild(linhatr4);

        }


    }

    tabelaPraObjetos() {
        const linhasTR1 = document.querySelector(".TR1");
        const linhasTR2 = document.querySelector(".TR2");
        const chaves = Object.keys(this.Objeto);
        const Valores = Object.values(this.Objeto);

        chaves.forEach((chave, i) => {
            const numeroDeDias = linhasTR2.querySelectorAll("tr").length + 1;

            const tr1 = document.createElement("tr");
            const tr2 = document.createElement("tr");

            const th = document.createElement("th");
            th.textContent = `${chave} do dia ${numeroDeDias}`;
            tr1.appendChild(th);

            const td = document.createElement("td");
            td.textContent = `R$ ${Valores[i]}`;
            tr2.appendChild(td);

            linhasTR1.appendChild(tr1);
            linhasTR2.appendChild(tr2);
        });
    }

    tabelaPraSemana(ValorDaSemana) {
        const tabelaDeSemana = document.querySelector(".SemanaTr1");
        const TodasLinhasDaTabela = tabelaDeSemana.querySelectorAll("tr");

        if (TodasLinhasDaTabela.length > 0) {
            console.log("Lista cheia!");
        } else {
            console.log(ValorDaSemana)
            const SemanaTr1 = document.querySelector(".SemanaTr1");
            const SemanaTr2 = document.querySelector(".SemanaTr2");
            const Htr = document.createElement("tr");
            const Dtr = document.createElement("tr");
            const th = document.createElement("th");
            const td = document.createElement("td");

            th.textContent = "Valor total da semana";
            Htr.appendChild(th);

            td.textContent = `R$ ${ValorDaSemana}`;
            Dtr.appendChild(td);

            SemanaTr1.appendChild(Htr);
            SemanaTr2.appendChild(Dtr);
        }
    }

    tabelaPraMes(ValorDoMes) {
        const tabelaDeMes = document.querySelector(".MesTr1");
        const TodasLinhasDaTabela = tabelaDeMes.querySelectorAll("tr");

        if (TodasLinhasDaTabela.length > 0) {
            console.log("Lista cheia!");
        } else {
            console.log(ValorDoMes)
            const MesTr1 = document.querySelector(".MesTr1");
            const MesTr2 = document.querySelector(".MesTr2");
            const Htr = document.createElement("tr");
            const Dtr = document.createElement("tr");
            const th = document.createElement("th");
            const td = document.createElement("td");

            th.textContent = "Valor total do Mês";
            Htr.appendChild(th);

            td.textContent = `R$ ${ValorDoMes}`;
            Dtr.appendChild(td);

            MesTr1.appendChild(Htr);
            MesTr2.appendChild(Dtr);
        }
    }
}