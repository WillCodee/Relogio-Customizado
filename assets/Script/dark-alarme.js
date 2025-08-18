const currenTime = document.querySelector('h2')
const content = document.querySelector('.content')
const selectMenu = document.querySelectorAll('select')
const btnSetAlarm = document.querySelector('#button-alarm')

setInterval(()=>{
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let ampm = "AM";

    if( hours >= 12){
        hours = hours -12
        ampm = "PM"
    }

    hours = hours == 0 ? hours = 12 : hours

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    currenTime.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`

    if(alarmTime === `${hours}:${minutes} ${ampm}`){
        ringTone.play()
        ringTone.loop = true
    }
})
//Era preciso mudar a rota do link
let alarmTime, isAlarmSet, ringTone = new Audio("../../assets/audio/alarme clock_audio_ringtone.mp3")

for(let i=12; i>0; i--){
    i = i < 10 ? "0" + i : i
    let option = ` <option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend',option)
}

for(let i=59; i>0; i--){
    i = i < 10 ? "0" + i : i
    let option = ` <option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend',option)
}


for(let i=2; i>0; i--){
    let ampm = i == 1 ? "AM" : "PM"
    i = i < 10 ? "0" + i : i
    let option = ` <option value="${ampm}">${ampm}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML('afterend',option)
}

function setAlarm(){
    if(isAlarmSet){
        alarmTime = ""
        ringTone.pause()
        content.classList.remove("disable")
        btnSetAlarm.innerHTML = "Ativar Alarme"
        return isAlarmSet = false
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    if(time.includes("Hours") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("Insira horas e minutos válidos para ativar o alarme")
    }

    alarmTime = time
    isAlarmSet = true
    content.classList.add("disable")
    btnSetAlarm.innerHTML = "Desativar Alarme"

}
btnSetAlarm.addEventListener("click",setAlarm)
