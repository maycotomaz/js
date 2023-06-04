    function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pular = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pular.value.length == 0){
    res.innerHTML = "Impossivel Contar"
    alert('[ERRO] Faltam Dados!')
    
    } else {
    res.innerHTML = 'contando: <br> '
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pular.value)
    if (p <= 0){                                    // se o p for menor ou igual a 0 vai da invalido e p vai valer 1
        alert('Invalido!!! Considerando 1')
        p = 1
    }
    if (i < f){
        for(var c = i; c <= f ; c  += p) {      //o contador vai começa no inicio e enquanto ocontador for menor ou igual  ao fim  o contador vai receber ele msm mais o passo
        res.innerHTML += ` ${c} \u{1f449}`          // esse codigo para colocar emojs
    }                                           //esse codigo faz contagem de numero 
        
    } else {
        for(var c = i ; c >= f ; c -= p ) {
            res.innerHTML += ` ${c} \u{1f449}` 
        }                                               //enquato c for maior ou igual a f o meu contador vai perde o p
        
    }
        res.innerHTML += `\u{1f3c1}`
    }
}