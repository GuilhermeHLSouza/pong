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
    dirx : 8,
    diry : 0,
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

function pontos(){
    jogador1 = {
        txt : `Jogador 1:${pts1}`,
        px : 250,
        py : 40,
    }
    jogador2 = {
        txt : `Jogador 2:${pts2}`,
        px : 800,
        py : 40,
    }
}


document.addEventListener("keydown", function(e){
    if(e.key == "w"){
        player1.py -=5
    }
    else if(e.key == "s"){
        player1.py +=5
    }

})
document.addEventListener("keydown", function(e){
    if(e.key == "ArrowUp"){
        player2.py -=5
    }
    else if(e.key == "ArrowDown"){
        player2.py +=5
    }
})
function draw(){
    quadro.fillRect(player1.px, player1.py, player1.tx, player1.ty)
    quadro.fillRect(player2.px, player2.py, player2.tx, player2.ty)
    quadro.fillRect(bola.px, bola.py, bola.tx, bola.ty)
    quadro.fillText(jogador1.txt, jogador1.px, jogador1.py)
    quadro.fillText(jogador2.txt, jogador2.px, jogador2.py)
}
function mover(){
    if(player1.py - 30 <= 20){
        player1.py += 9
    }
    else if(player1.py + 200 > 720){
        player1.py -= 9
    }
    if(player2.py - 30 <= 20){
        player2.py += 9
    }
}

function moverBola(){
    bola.px += bola.dirx
    bola.py += bola.diry
     if(bola.px < 0){
        bola.dirx = 6       
        //bola.px = 600 
        pts1++
        pontos()
    }
    else if(bola.px > 1280){
        //bola.px = 600
        bola.dirx = -6 
        pts2 ++
        pontos()
        bola.diry = Math.floor(Math.random() * 10)
        
    }

    if(bola.py > 710){
        bola.diry = -2
    }
    else if(bola.py < 0){
        bola.diry = 2
    }



}

function colisao(){
    if(bola.px == player1.px && bola.py > player1.py - 30  && bola.py < player1.py +200){
        bola.dirx = 6
    }

    if(bola.px == player2.px && bola.py > player2.py -30 && bola.py < player2.py +200){
        bola.dirx = -6
    }
}

function mover(){
    if(player1.py - 30 <= 20){
        player1.py += 9
    }
    else if(player1.py - 200 > 320){
        player1.py -= 9
    }
    if(player2.py - 30 <= 20){
        player2.py += 9
    }

}

function main(){
    quadro.clearRect(0,0,1280,720) //apaga a tela toda, para que ela seja redesenhada
    mover()
    draw()
    moverBola() 
    colisao()
    //console.log(bola.diry)
}

setInterval(main, 10) //executa a função main a cada 10 milissegundos