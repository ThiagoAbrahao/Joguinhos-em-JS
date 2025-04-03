idade = prompt("Quantos anos você tem?");
if (idade <= 18) {
  alert("Você não pode jogar civilization");
}
if (idade > 18) { // Alterado para evitar duplicação de lógica
  escolhaJogador = prompt("Digite 1-Pão, 2-Madeira ou 3-trigo ?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  console.log("Escolha do computador: " + escolhaComputador);
  if (escolhaJogador == escolhaComputador) {
    alert("Empate!");
  } 
  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      alert("O computador venceu, escolheu madeira");
    }
    if (escolhaComputador == 3) {
      alert("Jogador vence, computador escolheu trigo");
    }
  }
  if (escolhaJogador == 2) { 
    if (escolhaComputador == 1) {
      alert("Jogador venceu, computador escolheu pão!");
    }
    if (escolhaComputador == 3) {
      alert("Computador venceu, escolheu trigo");
    }
  }
  if (escolhaJogador == 3) { 
    if (escolhaComputador == 1) {
      alert("Computador venceu, escolheu pão");
    }
    if (escolhaComputador == 2) {
      alert("Jogador venceu, computador escolheu madeira");
    }
  }
}