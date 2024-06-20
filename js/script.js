let canvasPong = document.getElementById('canvas') //variável para manipular o elemento html com Id "canvas"
let quadro = canvasPong.getContext('2d')
let jogar = true
let bruh = new Audio('./bruh.mp3')
let foda = new Audio('./chickenbeatbox.mp3')
let foda2 = new Audio('./sif.mp3')
let colis = new Audio('/somcano.mp3')

quadro.fillStyle = "#b2b5b5"
let player1 ={
    px : 80, //posição do objeto no eixo x
    py : 260, //posição do objeto no eixo y
    tx : 30, //largura do objeto
    ty : 200, //altura do objeto
    dir : 0
}
let player2 ={
    px : 1160, //posição do objeto no eixo x
    py : 260, //posição do objeto no eixo y
    tx : 30, //largura do objeto
    ty : 200, //altura do objeto
    dir : 0
}
let bola = {
    px : 600, //posição do objeto no eixo x
    py : 325, //posição do objeto no eixo y
    tx : 30, //largura do objeto
    ty : 30, //altura do objeto
    dirx : 4,
    diry : 2,
}
let tempo = 0
quadro.font = "40px Arial"

let pts1 = 0
let pts2 = 0

let linha = {
    px: 0,
    py: 45,
    tx: 1280,
    ty : 5
}

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

let txtFim = {
    txt : ``,
    px : 450,
    py : 300,
}

function draw(){
    quadro.fillRect(player1.px, player1.py, player1.tx, player1.ty)
    quadro.fillRect(player2.px, player2.py, player2.tx, player2.ty)
    quadro.fillRect(bola.px, bola.py, bola.tx, bola.ty)
    quadro.fillRect(linha.px, linha.py, linha.tx, linha.ty)
    quadro.fillText(jogador1.txt, jogador1.px, jogador1.py)
    quadro.fillText(jogador2.txt, jogador2.px, jogador2.py)
    quadro.fillText(txtFim.txt, txtFim.px, txtFim.py)
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


document.addEventListener("keydown", function(keyPressed){
    if(keyPressed.keyCode == 87) {
        player1.dir -= 6
    }
    else if(keyPressed.keyCode == 83){
        player1.dir += 6
    }
})

document.addEventListener("keyup", function(keyPressed) {
    if(keyPressed.keyCode == 87) {
        player1.dir = 0
    }
    else if(keyPressed.keyCode == 83){
        player1.dir = 0
    }
})

document.addEventListener("keydown", function(keyPressed){
    if(keyPressed.keyCode == 38) {
        player2.dir -= 6
    }
    else if(keyPressed.keyCode == 40){
        player2.dir += 6
    }
})

document.addEventListener("keyup", function(keyPressed){
    if(keyPressed.keyCode == 38) {
        player2.dir = 0
    }
    else if(keyPressed.keyCode == 40){
        player2.dir = 0
    }
})


function mover(){
    player1.py += player1.dir
    player2.py += player2.dir
    if(player1.py - 30 < 20){
        player1.py = 50 
    }
    else if(player1.py + 200 > 720){
        player1.py = 520
    }
    if(player2.py - 30 < 20){
        player2.py = 50
    }
    else if(player2.py + 200 > 720){
        player2.py = 520
    }

}

function moverBola(){
    let sla = Math.floor(Math.random() * 10)
    if(tempo < 500){
        tempo++
    }
    else{
    bola.px += bola.dirx
    bola.py += bola.diry
     if(bola.px < 0){
       
        bola.dirx = 4      
        bola.px = 600
        bola.py = 325
        console.log(bola.px)
        pts2++
        pontos()
        if(sla <= 5){
            bola.diry = 2   
        }
        else{
            bola.diry = -3
        }
        tempo=0
        
    }
    else if(bola.px > 1280){
        let sla = Math.floor(Math.random() * 10)
        bola.px = 600
        bola.py = 325
        bola.dirx = -4 
        pts1 ++
        pontos()
        if(sla <= 5){
            bola.diry = 4    
        }
        else{
            bola.diry = -4
        }

        tempo = 0
    }

    if(bola.py > 710){
        bola.diry = -4
    }
    else if(bola.py < 45){
        bola.diry = 4
    }
    }


}

function colisao(){
    if(bola.px == player1.px && bola.py > player1.py - 30  && bola.py < player1.py +200){
        bola.dirx = 4
        colis.play()
    }

    if(bola.px == player2.px && bola.py > player2.py -30 && bola.py < player2.py +200){
        bola.dirx = -4
        colis.play()
    }
}


function fimJogo(){
    if(pts1 >= 5 || pts2 >= 5){
        jogar = false
    }
}

function venceu(){
        quadro.clearRect(0, 0, 1280, 720) // wow limpa as coisas
        quadro.font = "60px"
        quadro.fillText(`Pontos: ${pts1}`, 200, 345)
        quadro.fillText(`Pontos: ${pts2}`, 800, 345)
        if (pts1 > pts2) {
            foda.play()
        }
        else {
            foda2.play()
        }

    }


function main(){
    quadro.clearRect(0,0,1280,720) //apaga a tela toda, para que ela seja redesenhada
    if(jogar){
        mover()
        moverBola()
        draw() 
        colisao()
        console.log(bola.px, bola.py)
        foda.play()
        fimJogo()
    }
    else{
        venceu()
        draw()
    }
}

setInterval(main, 10) //executa a função main a cada 10 milissegundos