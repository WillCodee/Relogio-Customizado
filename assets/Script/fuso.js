const hora = document.querySelector('.hora')
const cidade = document.querySelector('.cidade')

function mostraHora(){
    const select = document.getElementById("cidadeSelect")
    const cidadeSelecionada = select.value
    localStorage.setItem("cidadeSelecionada", cidadeSelecionada)

    const agora = new Date()
    const horaFormatada = agora.toLocaleString("pt-BR",{timeZone:cidadeSelecionada})
    cidade.textContent = select.options[select.selectedIndex].text
    hora.textContent = horaFormatada
}

window.onload = function(){
    const cidadeSalva = localStorage.getItem("cidadeSelecionada")
    if(cidadeSalva){
        document.getElementById("cidadeSelect").value = cidadeSalva
    }
    mostraHora()
}
