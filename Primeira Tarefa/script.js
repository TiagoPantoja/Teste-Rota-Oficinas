const romanoParaArabico = (romano) => {
    const numerosRomanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let arabico = 0;
    let valorAnterior = 0;

    for (const numeral of romano.split("").reverse()) {
        const valorAtual = numerosRomanos[numeral];
        arabico =
            valorAtual < valorAnterior ? arabico - valorAtual : arabico + valorAtual;
        valorAnterior = valorAtual;
    }

    return arabico;
};

const arabicoParaRomano = (arabico) => {
    const numerosRomanos = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    let romano = "";
    let restante = arabico;

    for (const [numeral, valor] of numerosRomanos) {
        while (restante >= valor) {
            romano += numeral;
            restante -= valor;
        }
    }

    return romano;
};

const converterParaArabico = () => {
    const entradaRomano = document.getElementById("romanInput").value;
    const resultadoArabico = document.getElementById("arabicResult");

    if (entradaRomano.match(/^[MDCLXVI]+$/i)) {
        resultadoArabico.textContent = romanoParaArabico(
            entradaRomano.toUpperCase()
        );
    } else {
        resultadoArabico.textContent =
            "Entrada inválida. Insira um número romano.";
    }
};

const converterParaRomano = () => {
    const entradaArabico = document.getElementById("arabicInput").value;
    const resultadoRomano = document.getElementById("romanResult");

    if (entradaArabico.match(/^\d+$/)) {
        const arabico = parseInt(entradaArabico, 10);
        if (arabico >= 1 && arabico <= 3999) {
            resultadoRomano.textContent = arabicoParaRomano(arabico);
        } else {
            resultadoRomano.textContent = "Insira um número entre 1 e 3999.";
        }
    } else {
        resultadoRomano.textContent =
            "Entrada inválida. Insira um número romano ou arábico.";
    }
};

document
    .getElementById("convertToArabic")
    .addEventListener("click", converterParaArabico);
document
    .getElementById("convertToRoman")
    .addEventListener("click", converterParaRomano);
