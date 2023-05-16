function resultadoNums() {
    // Validação da Quantidade de números para sortear
    let txtQtsNum = document.querySelector("#txtNumQt");
    let qtsNum = Number(txtQtsNum.value);
    if (qtsNum > 10) {
        alert("É possível sortear no máximo 10 números!");
    } else if (qtsNum < 0) {
        alert("Esse número é invalido!");
    }
    /* Validação se o Range de entrada de dados do INICIAR
    está entre 1 e 9999 */
    let txtNumIni = document.querySelector("#txtNumIni");
    let numIni = Number(txtNumIni.value);
    if (numIni < 0 || numIni > 9999) {
        alert("O número informado para iniciar é invalido!");
    }
    /* Validação se o Range de entrada de dados do FIM 
    está entre 1 e 9999 */
    let txtNumFim = document.querySelector("#txtNumFim");
    let numFim = Number(txtNumFim.value);
    if (numFim > numIni) {
        if (numFim > 9999) {
            alert("O número final informado é invalido!");
        }
    } else {
        alert("O número final tem que ser maior que o número inicial!");
    }
    
}