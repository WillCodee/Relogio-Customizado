const hora = document.querySelector('.hora')
const cidade = document.querySelector('.cidade')

async function mostraHora(){
    const select = document.getElementById("cidadeSelect")
    const cidadeSelecionada = select.value
    localStorage.setItem("cidadeSelecionada", cidadeSelecionada)
    const cidadeApi = select.options[select.selectedIndex].dataset.cidade

    const apiKey = `d96217a8dae888e3ac9b6a0117567f09`
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeApi}&appid=${apiKey}&units=metric&lang=pt_br`
    
    try{
        const results = await fetch(apiUrl)
        const json = await results.json()
        console.log(json)
        if(json.cod === 200){
            showInfo({
                temp: json.main.temp,
                description: json.weather[0].description,
                tempIcon: json.weather[0].icon
            })
        }
        //Criar um else de erro
    }catch(error){
        console.error('Erro ao buscar dados da API:', error)
    }
    


    const agora = new Date()
    const horaFormatada = agora.toLocaleString("pt-BR",{timeZone:cidadeSelecionada})
    cidade.textContent = select.options[select.selectedIndex].text
    hora.textContent = horaFormatada



}

function showInfo(json){
    document.getElementById('temp_value').innerHTML = `${json.temp.toFixed(1).toString().replace('.',',')} <sup>Cº</sup>`
    document.getElementById('temp_description').innerHTML = `${json.description}`
    document.getElementById('temp_img').setAttribute('src',`https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`) 
}

setInterval(mostraHora, 1000)

window.onload = function(){
    const cidadeSalva = localStorage.getItem("cidadeSelecionada")
    if(cidadeSalva){
        document.getElementById("cidadeSelect").value = cidadeSalva
    }
    mostraHora()
}
