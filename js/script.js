/* Variaveis Globais */
let valoresResultado = geradorRandomico();

/* *Validações do sistema */
function modalResultado() {
    resultadosDiv();
    abrirModal();
}

function resultadosDiv() {
    let exDados = document.querySelector('.resultadoModal');
    let qtsNum = validacaoQtsNum();
    let numIni = validacaoNumIni();
    let numFim = validacaoNumFim();
    /* Alteração de dados para apresentação */
    if (valoresResultado.length == 0) {
        if (qtsNum == 1) {
            let sorteado = document.querySelector('.sorteadoNum');
            sorteado.innerHTML = `O número sorteado foi: `;
        } else {
            let sorteado = document.querySelector('.sorteadoNum');
            sorteado.innerHTML = 'Os números sorteados foram: ';
        }
        valoresResultado = geradorRandomico(qtsNum, numIni, numFim);
        for (let nav=0;nav<qtsNum;nav++) {
            exDados.innerHTML += `<p class="balls"> ${valoresResultado[nav]} </p>`;
        }
    } else {
        exDados.innerHTML = ``;
        if (qtsNum == 1) {
            let sorteado = document.querySelector('.sorteadoNum');
            sorteado.innerHTML = `O número sorteado foi: `;
        } else {
            let sorteado = document.querySelector('.sorteadoNum');
            sorteado.innerHTML = 'Os números sorteados foram: ';
        }
        valoresResultado = geradorRandomico(qtsNum, numIni, numFim);
        for (let nav=0;nav<qtsNum;nav++) {
            exDados.innerHTML += `<p class="balls"> ${valoresResultado[nav]} </p>`;
        }
    }
}

function validacaoQtsNum() {
    // Validação da Quantidade de números para sortear
    let txtQtsNum = document.querySelector("#txtNumQt");
    let qtsNum = Number(txtQtsNum.value);
    if (qtsNum == 0) {
        alert("Informe um valor! [Quantos números]");
    } else {
        if (qtsNum > 10) {
            alert("É possível sortear no máximo 10 números!");
        } else if (qtsNum < 0) {
            alert("Esse número é invalido!");
        } else {
            return qtsNum;
        }
    }
}

function validacaoNumIni() {
    /* Validação se o Range de entrada de dados do INICIAR
    está entre 1 e 9999 */
    let txtNumIni = document.querySelector("#txtNumIni");
    let numIni = Number(txtNumIni.value);
    if (numIni == 0) {
        alert("Informe um valor! [DE]");
    } else {
        if (numIni < 0 || numIni > 9999) {
            alert("O número informado para iniciar é invalido!");
        } else {
            return numIni;
        }
    }
}

function validacaoNumFim() {
    /* Validação se o Range de entrada de dados do FIM 
    está entre 1 e 9999 */
    let nIni = validacaoNumIni();
    let txtNumFim = document.querySelector("#txtNumFim");
    let numFim = Number(txtNumFim.value);
    if (numFim == 0) {
        alert("Informe um valor! [FIM]");
    } else {
        if (numFim > nIni) {
            if (numFim > 9999) {
                alert("O número final informado é invalido!");
            } else if (nIni > numFim) {
                alert("O número final tem que ser maior que o número inicial!");
            } else {
                return numFim;
            }
        }
    }
}

function geradorRandomico(qtsNum, numIni, numFim) { 
    let numSorteados = []
    for (let nav=1;nav<=qtsNum;nav++) {
        let numGerado = Math.floor(Math.random() * (numFim - numIni + 1) + numIni);
        numSorteados.push(numGerado);
    }
    return numSorteados;
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

