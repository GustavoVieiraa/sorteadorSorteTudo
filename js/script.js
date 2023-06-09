/* Variaveis Globais */
let valoresResultado = geradorRandomico();

/* *Validações do sistema */
function modalResultado() {
    resultadosDiv();
    let valNumQ = (validacaoQtsNum())
    let valNumI = (validacaoNumIni())
    let valNumF = (validacaoNumFim())
    if (valNumF[1] == true && valNumQ[1] == true && valNumI[1] == true) {
        abrirModal();
    } else {
        modalError();
    }
}

function resultadosDiv() {
    let exDados = document.querySelector('.resultadoModal');
    let qtsNum = validacaoQtsNum();
    let numIni = validacaoNumIni();
    let numFim = validacaoNumFim();
    /* Alteração de dados para apresentação */
    if (valoresResultado.length == 0) {
        if (qtsNum[0] == 1) {
            let sorteado = document.querySelector('.sorteadoNum');
            sorteado.innerHTML = `O número sorteado foi: `;
        } else {
            let sorteado = document.querySelector('.sorteadoNum');
            sorteado.innerHTML = 'Os números sorteados foram: ';
        }
        valoresResultado = geradorRandomico(qtsNum[0], numIni[0], numFim[0]);
        for (let nav=0;nav<qtsNum[0];nav++) {
            exDados.innerHTML += `<p class="balls"> ${valoresResultado[nav]} </p>`;
        }
    } else {
        exDados.innerHTML = ``;
        if (qtsNum[0] == 1) {
            let sorteado = document.querySelector('.sorteadoNum');
            sorteado.innerHTML = `O número sorteado foi: `;
        } else {
            let sorteado = document.querySelector('.sorteadoNum');
            sorteado.innerHTML = 'Os números sorteados foram: ';
        }
        valoresResultado = geradorRandomico(qtsNum[0], numIni[0], numFim[0]);
        for (let nav=0;nav<qtsNum[0];nav++) {
            exDados.innerHTML += `<p class="balls"> ${valoresResultado[nav]} </p>`;
        }
    }
}

function validacaoQtsNum() {
    // Validação da Quantidade de números para sortear
    let txtQtsNum = document.querySelector("#txtNumQt");
    let qtsNum = Number(txtQtsNum.value);
    if (qtsNum == 0) {
        return "CAMPO: SORTEAR";
    } else {
        if (qtsNum > 10) {
            return "CAMPO: SORTEAR";

        } else if (qtsNum < 0) {
            return "CAMPO: SORTEAR";
        } else {
            return [qtsNum, true];
        }
    }
}

function validacaoNumIni() {
    /* Validação se o Range de entrada de dados do INICIAR
    está entre 1 e 9999 */
    let txtNumIni = document.querySelector("#txtNumIni");
    let numIni = Number(txtNumIni.value);
    if (numIni == 0) {
        return "CAMPO: De:"
    } else {
        if (numIni < 0 || numIni > 9999) {
            return "CAMPO: De:"
        } else {
            return [numIni, true];
        }
    }
}

function validacaoNumFim() {
    /* Validação se o Range de entrada de dados do FIM 
    está entre 1 e 9999 */
    let nIni = validacaoNumIni();
    nIni = nIni[0];
    let txtNumFim = document.querySelector("#txtNumFim");
    let numFim = Number(txtNumFim.value);
    if (nIni >= numFim) {
        return "InicialMaior";
    } else if (numFim > 9999) {
        return "Numero max: 9999 ";
    } else if (numFim <= 0) {
        return "CAMPO: Ate: ";
    } else {
        return [numFim, true];
    }
}


function geradorRandomico(qtsNum, numIni, numFim) { 
    let numSorteados = []
    let c = 0;
    // Validação para Não gerar Números Iguais!
    while (c < qtsNum) {
        let numGerado = Math.floor(Math.random() * (numFim - numIni + 1) + numIni);
        if (numSorteados.length == 0) {
            numSorteados.push(numGerado);
            c++;
        } else {
            if (numSorteados.includes(numGerado) == true) {
                console.log('Proximo');
            } else {
                numSorteados.push(numGerado);
                c++;
            }
        }
    }
    return numSorteados;
}

/* Function para abrir popUp de error e fechar */
let popup = document.getElementById("popup");

function modalError() {
    let errorQ = validacaoQtsNum();
    let errorI = validacaoNumIni();
    let errorF = validacaoNumFim();
    if (errorQ == "CAMPO: SORTEAR") {
        let error = document.getElementById("apresentar-error");
        error.innerHTML = `${errorQ} - Máx 10 Números`;      
    } else if (errorI == "CAMPO: De:") {
        let error = document.getElementById("apresentar-error");
        error.innerHTML = `${errorI}`;
    } else if (errorF == "CAMPO: Ate: ") {
        let error = document.getElementById("apresentar-error");
        error.innerHTML = `${errorF}`;
    } else if (errorF == "Numero max: 9999 ") {
        let error = document.getElementById("apresentar-error");
        error.innerHTML = `${errorF}`;
    } else if (errorF == "InicialMaior") {
        let error = document.getElementById("apresentar-error");
        error.innerHTML = `Número inicial não pode ser maior que o número final.`;
    } 
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

/* *Abrir e Fechar MODAL */
function abrirModal() {
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'btn-fechar' || e.target.id == 'janela.modal') {
            modal.classList.remove('abrir');
        }
    })
}

