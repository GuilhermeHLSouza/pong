let canvasPong = document.getElementById('canvas') //variável para manipular o elemento html com Id "canvas"
let quadro = canvasPong.getContext('2d')

quadro.fillStyle = "#b2b5b5"
let player1 ={
    px : 80, //posição do objeto no eixo x
    py : 260, //posição do objeto no eixo y
    tx : 30, //largura do objeto
    ty : 200, //altura do objeto
}
let player2 ={
    px : 1160, //posição do objeto no eixo x
    py : 260, //posição do objeto no eixo y
    tx : 30, //largura do objeto
    ty : 200, //altura do objeto
}
let bola = {
    px : 600, //posição do objeto no eixo x
    py : 325, //posição do objeto no eixo y
    tx : 30, //largura do objeto
    ty : 30, //altura do objeto
}

quadro.font = "40px Arial"

let pts1 = 0
let pts2 = 0
let jogador1 = {
    txt : `Jogador 1:${pts1}`,
    px : 250,
    py : 40,
}
let jogador2 = {
    txt : `Jogador 2:${pts2}`,
    px : 800,
    py : 40,
}

function draw(){
    quadro.fillRect(player1.px, player1.py, player1.tx, player1.ty)
    quadro.fillRect(player2.px, player2.py, player2.tx, player2.ty)
    quadro.fillRect(bola.px, bola.py, bola.tx, bola.ty)
    quadro.fillText(jogador1.txt, jogador1.px, jogador1.py)
    quadro.fillText(jogador2.txt, jogador2.px, jogador2.py)
}
draw()

