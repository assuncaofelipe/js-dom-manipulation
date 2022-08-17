
tabuada(3, 5);

function tabuada(num, mult){
    for(var i = 0; i < mult; i++){
        var result = num*i;
        console.log(num + ' X ' + i + ' = ' + result )
    }
}


/*
// outputs
// alert('Alerta')
// console.log('Olá')
// document.write('Escreve na tela')

// inputs
// prompt('Digite seu nome: ')

var a = prompt('Nota 1: ');
var b = prompt('Nota 2: ');
var c = prompt('Nota 3: ');
var d = prompt('Nota 4: ');

var soma = (
    parseFloat(a) +
    parseFloat(b) +
    parseFloat(c) +
    parseFloat(d) 
);

// 10 + 8 + 10 + 10 = 9.5
var media = soma / 4 ;

if(media >= 6) {
    document.write('<h2> Aprovado com média: ' + media + ' </h2>');
} else {
    document.write('<h2> Reprovado com média: ' + media + ' </h2>');
}



// Array
var frutas = ['banana', 'melão', 'laranja'];

// Objetos
var pessoa = {nome:'felipe', idade:24, altura:1.76, programador:true};

console.log(frutas[2]);
console.log(pessoa.altura)

*/