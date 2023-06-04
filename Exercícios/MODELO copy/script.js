function confirme(){
    var nota =parseFloat(document.getElementById('txt').value)
    var res = document.getElementById('res')
    
    
        if (nota > 0 || nota < 10){
        res.innerHTML = ` <br> Sua Nota é ${nota} <br>` 
        
   
       
    } 
    else  {
        
        res.innerHTML = '<br>DIGITE UMA NOTA VALIDA!'
    }
            

    
        
        
    
      
        
    
         
        
    
    
    
}