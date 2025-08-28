 const display = document.getElementById('display')
    const horas = document.getElementById('horas')
    const minutos = document.getElementById('minutos')
    const segundos = document.getElementById('segundos')
    const comecar = document.getElementById('comecar')
    const parar = document.getElementById('parar')
    const toque = document.getElementById('sound')
    const resetar = document.getElementById('resetar')

    let iniciado = false
    let horaAtual = 0, minutoAtual = 0, segundoAtual = 0
    let interval = null

    // Preenche selects
    for (let i = 0; i <= 23; i++) {
      horas.innerHTML += `<option value="${i}">${i}</option>`
    }
    for (let i = 0; i <= 59; i++) {
      minutos.innerHTML += `<option value="${i}">${i}</option>`
      segundos.innerHTML += `<option value="${i}">${i}</option>`
    }

    function formatarZero(num) {
      return num < 10 ? '0' + num : num
    }

    function atualizarDisplay() {
      display.innerHTML = `${formatarZero(horaAtual)}:${formatarZero(minutoAtual)}:${formatarZero(segundoAtual)}`
    }

    comecar.addEventListener('click', function () {
      if (!iniciado) {
        horaAtual = parseInt(horas.value)
        minutoAtual = parseInt(minutos.value)
        segundoAtual = parseInt(segundos.value)

        if (horaAtual === 0 && minutoAtual === 0 && segundoAtual === 0) {
          alert('Insira um tempo para iniciar o temporizador')
          return
        }

        iniciado = true
        atualizarDisplay()
      }

      if (!interval) {
        interval = setInterval(function () {
          if (segundoAtual > 0) {
            segundoAtual--
          } else {
            if (minutoAtual > 0) {
              minutoAtual--
              segundoAtual = 59
            } else {
              if (horaAtual > 0) {
                horaAtual--
                minutoAtual = 59
                segundoAtual = 59
              } else {
                toque.currentTime = 0
                toque.play()
                clearInterval(interval)
                interval = null
                iniciado = false
              }
            }
          }
          atualizarDisplay()
        }, 1000)
      }
    })

    parar.addEventListener('click', function () {
      clearInterval(interval)
      interval = null
      toque.pause()
      toque.currentTime = 0
    })

    resetar.addEventListener('click', function () {
      clearInterval(interval)
      interval = null
      iniciado = false
      horaAtual = 0
      minutoAtual = 0
      segundoAtual = 0
      horas.value = 0
      minutos.value = 0
      segundos.value = 0
      atualizarDisplay()
      toque.pause()
      toque.currentTime = 0
    })