const nome = 'Jorge'
const sexo = 'M'
const idade = 65
const contribuicao = 40

if ((sexo == 'F' && idade + contribuicao>=85) || (sexo=='M' && idade + contribuicao>=95)){
    console.log (`${nome}, você pode se aposentar!`)
} else  {
    console.log (`${nome}, você ainda não pode aposentar!`)

}