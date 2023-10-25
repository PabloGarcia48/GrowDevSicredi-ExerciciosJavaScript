document.write("Todos os prompts estão comentados, para não travar a página.")
document.write(`<br><br>`)

/* 1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
*/

// const celsius = Number(prompt("Digite a temperatura a ser convertida"))
const celsius = 45
const fahrenheit = (celsius * 9 / 5) + 32

document.write(`1. A temperatura ${celsius}° Celsius equivale a ${fahrenheit.toFixed(1)}° Fahrenheit.`)
document.write(`<br><br>`)


/*
2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
semana correspondente utilizando a estrutura condicional switch.
*/

// const numeroDia = Number(prompt("Digite um número equivalente ao dia da semana"))
const numeroDia = 5
let nomeDia

switch (numeroDia) {
    case 1:  nomeDia= "Domingo"; break;
    case 2:  nomeDia= "Segunda"; break;
    case 3:  nomeDia= "Terça"; break;
    case 4:  nomeDia= "Quarta"; break;
    case 5:  nomeDia= "Quinta"; break;
    case 6:  nomeDia= "Sexta"; break;    
    case 7:  nomeDia= "Sábado"; break;
    default: nomeDia= "Dia invalido, digite um número de 1 a 7"; break;
}

document.write(`2. O dia da semana respectivo ao número ${numeroDia} é ${nomeDia}.`)
document.write(`<br><br>`)

/*
3. Crie um programa que peça um número e verifique se ele é positivo,
negativo ou zero.
*/

// const numeroInteiro = Number(prompt("Digite um número para verificar se ele é positivo, negativo ou zero."))
const numeroInteiro = 9
let positivoNegativo

if (numeroInteiro > 0) {
    positivoNegativo = "O número é positivo." 
} else if (numeroInteiro < 0) {
    positivoNegativo = "O número é negativo."
} else {
    positivoNegativo = "O número é 0."
}

document.write(`3. ${positivoNegativo}`)
document.write(`<br><br>`)

/*
4. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.
*/

// const custoFabrica = Number(prompt("Qual é o custo de fábrica do carro"))
const custoFabrica = 40000
const percentualDistribuidor = custoFabrica * 0.28
const imposto = custoFabrica * 0.45
const custoFinal = custoFabrica + percentualDistribuidor + imposto
document.write(`4. O custo final do carro é R$${custoFinal}`)
document.write(`<br><br>`)

/*
5. Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.
*/

// const altura = Number(prompt("Qual é a sua altura em metros?"))
// const peso = Number(prompt("Qual é o seu peso?"))
const altura = 1.80
const peso = 89.5
const IMC = peso/(altura*altura)

let seuIMC = 
    IMC < 18.5  ? "Você está abaixo da faixa de peso ideal" :
    IMC > 24.99 ? "Você está acima da faixa de peso ideal" :
    "Você está dentro da faixa de peso ideal"
document.write(`5. Seu IMC é de ${IMC.toFixed(2)} e ${seuIMC}`)
document.write(`<br><br>`)

/*
6. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.
*/

// const num1 = Number(prompt("Digite o primeiro número"))
// const operador = prompt("Digite o operador")
// const num2 = Number(prompt("Digite o segundo número"))

let num1 = 25
let num2 = 30
let operador = "/"
let resultado = 0

if (operador == "+") {
    resultado = num1 + num2
} else if (operador == "-") {
    resultado = num1 - num2
} else if (operador == "*") {
    resultado = num1 * num2
} else if (operador == "/") {
    resultado = num1 / num2
} else {
    resultado = "inválido, pois você precisa utilizar um destes operadores: +, -, * ou /"
}
document.write(`6. O resultado da sua operação é ${resultado.toFixed(2)}.`)
document.write(`<br><br>`)


/*
7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O usuário precisa informar a quantidade de dinheiro que deseja retirar, esse valor deve ser um número positivo, múltiplo de 5 e menor do que o saldo. Cada saque eletrônico cobra uma taxa de R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo certo com o saque, e se o usuário informar um valor maior que o saldo deve ser informado ao usuário que o mesmo não tem dinheiro suficiente em conta para realizar o saque.
OBS: Na verificação se o valor do saque é maior que o saldo deve ser considerado e também contabilizado o valor da taxa a ser cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor da taxa do saque não pode ser maior que o saldo disponível.
*/

// const saldoInicial = Number(prompt("Digite o saldo inicial"))
// const saque = Number(prompt("Digite o valor do saque"))

const saldoInicial = 100
const saque =  10
const taxa = 4.50
let valorSaque = saque + taxa

if (saque%5==0 && saque>0) {  
    if (valorSaque <= saldoInicial) {
        let saldoAtual = saldoInicial - valorSaque
        document.write(`7. Seu saldo atual é de R$ ${saldoAtual.toFixed(2).replace(".",",")}.`)
    } else {
        let saldoInsuficiente = "Saldo insuficiente."
        document.write(`7. ${saldoInsuficiente}`)
    }
} else {
    let valorInconsistente = "Valor requerido inconsistente (Digite um valor múltiplo de R$ 5,00.)"
    document.write(`7. ${valorInconsistente}`)
}
document.write(`<br><br>`)

/*
8. Faça um algoritmo que leia a idade e peso de um atleta e imprima a sua categoria, de acordo com a seguinte tabela:

IDADE                PESO                      CATEGORIA
Até 12 anos          -                         Infantil
13 a 16 anos         Até 40kg                  Juvenil leve
                     Acima de 40kg             Juvenil pesado
17 a 24 anos         Até 45kg                  Sênior leve
                     Acima de 45kg até 60kg    Sênior médio
*/

// const idade = Number(prompt("Digite sua idade: "))
// const pesoAtleta = Number(prompt("Digite seu peso: "))

const idade = 35
const pesoAtleta = 80

const categoria = 
    idade <= 12 ? "Infantil" :
    idade <= 16 ? pesoAtleta <= 40 ? "Juvenil leve" : "Juvenil pesado" :
    idade <= 24 ? pesoAtleta <= 45 ? "Sênior leve" : pesoAtleta <= 60 ? "Sênior médio" : "Sênior pesado" :
    "Veterano";
document.write(`8. Sua categoria é a ${categoria}.`)
document.write(`<br><br>`)

/*
9. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
*/

// const velocidade = Number(prompt("Digite a velocidade do carro: "))
const velocidade = 95
const taxaMulta = 5

let multa
if (velocidade > 80) {
    multa = (velocidade - 80) * taxaMulta
    document.write(`9. Você ultrapassou a velocidade permitida, sua multa é de R$ ${multa.toFixed(2).replace(".",",")}.`)
} else {
    document.write(`9. Sua velocidade está dentro do limite permitido. Parabéns!`)
}
document.write(`<br><br>`)
