var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload() {
  
  //loadImage (carregarImagem) da pista)
  menino = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
  
  pista = loadImage("path.png");

moedinha = loadImage("coin.png");

  //loadAnimation (carregarAnimação) de corrida para o menino

} 

function setup() {
  createCanvas(600,600);

 //crie um sprite para a pista 

path = createSprite(290 ,200, 10, 10);
path.addImage(pista);
path.scale = 1.5;

//adicione uma imagem para a pista


//Faça com que a pista seja um fundo que se move dando a ela velocity Y.


path.velocityY = + 3;

jake = createSprite(285, 480, 10, 10);
jake.addAnimation("corrida", menino);
jake.scale = 1.2;

barreira1 = createSprite(535, 300, 40, 600);
barreira1.visible = false;

barreira2 = createSprite(50, 300, 40, 600);
barreira2.visible = false;

}

// ----



//crie um sprite de menino


//adicione uma animação de corrida para ele

// ----


  
//crie um limite à esquerda

//defina visibilidade como falsa para o limite à esquerda


//crie um limite à direita



//defina visibilidade como falsa para o limite à direita





function draw() {
  background("green");

  criarMoeda();
  
  // mover o menino com o mouse usando mouseX
  
jake.x = World.mouseX;

  // colidir o menino com os limites invisíveis da esquerda e da direita

jake.collide(barreira1);

jake.collide(barreira2);

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
}

function criarMoeda() {

if (frameCount % 60 === 0) {
coin = createSprite(300, 300, 10, 10);
coin.addImage(moedinha);

// ALEATORIEDADE

coin.x = Math.round(random(150, 480));
coin.scale = 0.5;

coin.velocityY = 8;

coin.lifetime = 75; 

  }
 }
