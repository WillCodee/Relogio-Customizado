const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

})

// Relogio 3

const hrs = document.getElementById('hrs')
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')

const clock = setInterval(function time() {
    let hora = new Date();
    let hours = hora.getHours();
    let minutes = hora.getMinutes();
    let seconds = hora.getSeconds();

    let dia = hora.getDate();
    let mes = hora.getMonth();
    mes++
    let ano = hora.getFullYear();
    let resp = document.getElementById('data')

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    if(dia < 10) dia = '0' + dia
    if(mes < 10) mes = '0' + mes
    
    

    hrs.textContent = hours;
    mins.textContent = minutes;
    secs.textContent = seconds;
    resp.textContent = `${dia}/${mes}/${ano}`
})




















