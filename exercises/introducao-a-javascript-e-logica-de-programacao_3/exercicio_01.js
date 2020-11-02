//Exercicio 01

let n = 5;
let linha = '';

for (i = 0; i < n; i += 1){
  linha += '*';
};

for (i = 0; i < n; i += 1) {
  console.log(linha);
};

//Exercicio 02
let n = 5;
let linha = '';

for (i = 0; i < n; i += 1){
  console.log(linha = linha + '*');
};

//Exercicio 03

let n = 5;
let linha = '';
let posicao = n;

for (i = 0; i < n; i += 1) {
  for ( p = 0; p <= n; p += 1) {
    if ( p < posicao) {
      linha += ' ';
    } else {
      linha += '*';
    }
  }
  console.log(linha);
  linha = '';
  posicao -= 1;
};
