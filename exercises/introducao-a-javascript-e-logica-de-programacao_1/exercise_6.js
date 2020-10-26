let peca = 'rainha';

switch (peca.toLowerCase()) {
  case 'rei':
    console.log('Rei - Uma casa em qualquer direção');
    break;
  case 'rainha':
    console.log('Rainha - Horizontal e Diagonal ');
    break;
  case 'bispo':
    console.log('Bispo - Diagonal');
    break;
  case 'torre':
    console.log('Torizontalorre - H');
    break;
  case 'peao':
    console.log('Peão - Casa para frente');
    break;
  case 'cavalo':
    console.log('Cavalo - Pode pular sobre as peças');
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};