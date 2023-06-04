var agora = new Date() // aqui sem vai ser new date
var hora = agora.getHours()
console.log(`Agora São Exatamente ${hora}Hrs`)
if (hora < 12){
    console.log('Bom Dia')

} else if (hora <= 18){
    console.log('boa Tarde')
} else if (hora <= 23){
    console.log('boa Noite')
}