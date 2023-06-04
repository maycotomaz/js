function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto =  data.getMinutes()
   
    msg.innerHTML = `Agora São ${hora}:${minuto}Hrs.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.style.body.background = "#392d4d"
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
       document.body.style.background = '#fd7a03'
    } else {
        //boa Noite 
        img.src = 'noite.png'
        document.body.style.background = "#372a44"
    }
}

