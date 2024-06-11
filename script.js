let numeroMaior, resultadoFinal

numeroMaior = document.getElementById('numeroMaior')
resultadoFinal = document.getElementById('resultadoFinal')

function CalcularGauss(){
    if (validarDados(numeroMaior.value)){
    
    let nm,rf 

    nm = parseFloat(numeroMaior.value)
    rf = parseFloat(resultadoFinal.value)
     
    rf = (1 + nm) * (nm/2)
    
    resultadoFinal.textContent = rf
    limparCampos()
  }
}

function validarDados(nMaior){
    if (isNaN (nMaior) || nMaior.trim()===''){
        exibirDados()
            alert('Insira valores válidos, com números!')
            return
        }
        return true
 }
function limparCampos(){
    numeroMaior.value = ' '
    numeroMaior.focus()
}

function exibirDados(pResulf=''){
    limparCampos()
    resultadoFinal.textContent = pResulf
}