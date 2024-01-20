let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


exibirMensagemInicial();
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Numero Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto [${numeroSecreto}] com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", `O número secreto e menor que ${chute}`);
  } else {
    exibirTextoNaTela("p", `O número secreto e maior que ${chute}`);
  }
  tentativas++;
  limparCampo();
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número Secreto");
  exibirTextoNaTela("p", `Escolha um número de 1 a ${numeroLimite}`);
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    
  let quantidadeDeElementosnaLista = listaDeNumerosSorteados.length;
    
  if (quantidadeDeElementosnaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  exibirNumeroSecretoConsole();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

exibirNumeroSecretoConsole();

function exibirNumeroSecretoConsole() {
  console.log(numeroSecreto);
}
