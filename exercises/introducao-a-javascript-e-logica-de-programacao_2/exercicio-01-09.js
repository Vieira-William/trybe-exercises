//Exercicio 01

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let contador = 0; contador < numbers.length; contador++){
    console.log(numbers[contador])
}

//Exercicio 02 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0

for (let contador = 0; contador < numbers.length; contador++){
    soma += numbers[contador];
}

console.log(soma)

//Exercicio 03

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0

for (let contador = 0; contador < numbers.length; contador++){
    soma += numbers[contador];
}

console.log(soma / numbers.length)

//Exercicio 04

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0

for (let contador = 0; contador < numbers.length; contador++){
    soma += numbers[contador];
}

let resultado =  soma /numbers.length

if (resultado >= 20){
    console.log("valor maior que 20")
} else { console.log("valor menor ou igual a 20")
}

//Exercicio 05

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0

for (let contador = 0; contador < numbers.length; contador++){

    if (resultado < numbers[contador]){

        resultado = numbers[contador]
    } 
} console.log(resultado)

//Exercicio 06

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0

for (let contador = 0; contador < numbers.length; contador++){

    if (numbers[contador] % 2 != 0){
        impares++
    } 

} if (impares === 0){
    console.log("nenhum valor ímpar encontrado")
}  else { 
    console.log(impares)
}


//Exercicio 07

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 9999999999;

for (let contador = 0; contador < numbers.length; contador++){

    if (resultado > numbers[contador]){

        resultado = numbers[contador]
    } 
} console.log(resultado)

//Exercicio 08

let numbers = [];


for (let contador = 1; contador <= 25; contador++){
    numbers.push(contador)
} 
console.log(numbers)

//Exercicio 09

let numbers = [];


for (let contador = 0; contador <= 25; contador++){
    numbers.push(contador)
    console.log(numbers[contador] / 2)
} 
console.log(numbers)