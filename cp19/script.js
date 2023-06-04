function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pular = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pular.value.length == 0){
        res.innerHTML = 'impossivel contar'
        alert('[ERRO]')
    }   else {
        res.innerHTML = 'Contando: <br>' 
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pular.value)
        if (p <= 0){
            alert('impossivel contar, considerando 1')
            p = 1
        } if (i < f){ 
            for(var c = i ; c <= f ; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }

        } else {
            for(var c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
            
        }
        res.innerHTML += `${c} \u{1f3c1}`
    }
        
}   

