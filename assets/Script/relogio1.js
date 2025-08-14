const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = FormataZero(dateToday.getHours());
    let min = FormataZero(dateToday.getMinutes());
    let sec = FormataZero(dateToday.getSeconds());

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

})

// Relogio 3

const hrs = document.getElementById('hrs')
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')

const clock = setInterval(function time() {
    let dataAtual = new Date();
    let hours = FormataZero(dataAtual.getHours());
    let minutes = FormataZero(dataAtual.getMinutes());
    let seconds = FormataZero(dataAtual.getSeconds());

    let dia = FormataZero(dataAtual.getDate());
    let mes = FormataZero(dataAtual.getMonth()+1);
    let ano = FormataZero(dataAtual.getFullYear());

    let resp = document.getElementById('data')
    
    hrs.textContent = hours;
    mins.textContent = minutes;
    secs.textContent = seconds;
    resp.textContent = `${dia}/${mes}/${ano}`
})

function FormataZero(num){
    return num < 10 ? '0' + num : num
}


















