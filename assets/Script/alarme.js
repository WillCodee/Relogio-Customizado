const currenTime = document.querySelector('h2')
const content = document.querySelectorAll('.content')
const selectMenu = document.querySelectorAll('select')
const btnSetAlarm = document.querySelector('button')

setInterval(()=>{
    let date = new Date()
    let hora = FormataZero(date.getHours())
    let minutos = FormataZero(date.getMinutes())
    let segundos = FormataZero(date.getSeconds())

    currenTime.innerHTML = `${hora}:${minutos}:${segundos}`

    if(alarmTime === `${hora}:${minutos}`){
        ringTone.play()
        ringTone.loop = true
    }
})

let alarmTime, isAlarmSet, ringTone = new Audio("assets/audio/ringtone.mp3")

for(let i = 23; i>=0; i--){
    i = i <10 ? `0${i}` : i
    let option = ` <option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
}

for(let i = 59; i>=0; i--){
    i = i <10 ? `0${i}` : i
    let option = ` <option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
}

function FormataZero(num){
    return num < 10 ? '0' + num : num
}

function setAlarm(){
    if(isAlarmSet){
        alarmTime = ""
        ringTone.pause()
        content.classList.remove("disable")
        btnSetAlarm.innerHTML = "Ativar Alarme"
        return isAlarmSet = false
    }


    let time = `${selectMenu[0].value}:${selectMenu[1].value}`
    if(time.includes("Hour") || time.includes("Minute")){
        return alert("Insira horas e minutos válidos para ativar o alarme.")
    }
    alarmTime = time
    isAlarmSet = true
    content.classList.add("disable")
    btnSetAlarm.innerHTML = "Desativar Alarme"
}

btnSetAlarm.addEventListener("click", setAlarm)