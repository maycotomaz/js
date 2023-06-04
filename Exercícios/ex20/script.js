function gerar(){
    var num = document.getElementById('txt')
    var tab = document.getElementById('seltab')
    
    
    if (num.value == 0){
        
        alert('Por Favor, Digite Um Número')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        //var c = 1
        for(var c = 1 ; c <= 10 ; c++){
            var item = document.createElement('Option')
            item.text = `${n} x ${c}  = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}// mostrar tabuada