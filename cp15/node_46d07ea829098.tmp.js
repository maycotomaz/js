 <!DOCTYPE html>
 <html lang="pt-br">
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>verificador de idade</title>
    <link rel="stylesheet" href="estilo.css"> 
    
 </head>
 <body>
    <header>
        <h1>Verificador de idade</h1>
    </header>
    <section>
        <div>
            <p>Ano de Nascimento:
                <input type="number" name="txtano" id="txtano" min="0"> 
            </p>
            <p>Sexo:
                <input type="radio" name="radsex" id="masc" checked>
                <label for="masc">Masculino</label>
                <input type="radio" name="radsex" id="fem">
                <label for="fem">Feminino</label>
            </p>
            <p>
                <input type="button" value="Verificar" onclick="verificar()"> 
            </p>
            
        </div>
        <div>
            <div id="res"> 
                Preecha os dados acima Para ver o Resultado!
            </div>
        </div>
    </section>
    <footer>
        <p>&copy; MaycoOlliveira</p>
    </footer>
    <script src="script.js">//input radio e a bolatinha pra marcar o label e pra colocar o nome ao lado eu acho
    //<input type="button" value="Verificar" onclick="verificar()">  dispara o js metodo para disparar ojs na function butao!
    </script>
 </body>
 </html>