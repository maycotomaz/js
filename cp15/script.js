function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if ( fano.value.length == 0 || fano.value > ano) {//verifica se a caixa esta vazzia se e igual a 0 , e se o valor e acima de ano atuaç
        alert('[ERRO] Verifique os Dados e Tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //img id=1'foto' msm coisa do html
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade  < 10){
                //criança
                img.setAttribute('src', 'menino.png') //
            } else if (idade  < 21){
                //jovem
                img.setAttribute('src', 'jovi.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'velho.png')
            }
            
            
            
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade  < 10){
                //criança
                img.setAttribute('src', 'criança.png')
            } else if (idade  < 22){
                //jovem
                img.setAttribute('src','mb.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'adulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'velhas.png')
            }
        }

        res.style.textAlign = 'center' // centraliza o texto
        res.innerHTML = `Detectamos ${genero} Com ${idade} anos`
        res.appendChild(img) //appenchild coloca em baixo adiciona o elemento no caso img
    }
}