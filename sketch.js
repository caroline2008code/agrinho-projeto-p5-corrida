function setup() {
  createCanvas(400, 400);
}
let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["👩‍🌾", "👨‍💻", "🚜", "📱"];
let teclas = ["a", "w", "d", "s"];
let quantidade = jogador.lengh;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#78CC16");
  } else {
    background("#5B8A25");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < 4; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
    
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < 4; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador[0] += random(20);
  }
  if (key == "w") {
    xJogador[1] += random(20);
  }
  if (key == "d") {
    xJogador[2] += random(20);
  }
  if (key == "s") {
    xJogador[3] += random(20);
  }
}
