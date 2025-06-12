rodada = 1;
while (rodada <= 3) {
  console.log("rodada:" + rodada);

  escolha = prompt("Nivel " + rodada + ", vidro (1,2 ou 3)?");
  piso = Math.floor(Math.random() * 3) + 1;

  if (escolha == piso) {
    alert("Vidro quebrou! Game over para você");
    rodada = 1000;
  }
  if (escolha > 3 || escolha < 1) {
    alert("Ta tentando roubar né larapio, te peguei hehehe");
    rodada = 1000;
  } else {
    alert("O piso quebrado estava na ponte: " + piso);
  }

  rodada = rodada + 1;
}
if (rodada == 4) {
  alert("Você venceu! Parabéns!!!");
}
