const dino = document.querySelector('.reptar');
const reptarLand = document.querySelector('.reptarLand');
const repPontos = document.querySelector('.pontos');

let pontos = 0;
let isJumping = false;
let reptarPosition = 0;

//Função que identifica se a tecla pressionada pelo usuário foi a esperada;
function keyUpMgmt(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jurassicJump();
        }
        
    }
}

//Recomeça o jogo.
function resetGame(onclick){
    document.location.reload(true);
}

//Função para fazer o dinossauro pular.
function jurassicJump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if(reptarPosition >= 150){
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(() => {
                if (reptarPosition <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else{
                    reptarPosition -= 20;
                    dino.style.bottom = reptarPosition + 'px';
                }                
            },20)
        } else{
            //subindo
            reptarPosition += 20;
            dino.style.bottom = reptarPosition + 'px';
        }                
    }, 20)
}

function growCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    reptarLand.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            reptarLand.removeChild(cactus);
            //Contador de Pontos
            repPontos.innerHTML = pontos + 10;
            pontos += 10;                        
        } else if (cactusPosition > 0 && cactusPosition < 60 && reptarPosition < 60){
            // Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = `<section><div class="game-over">Fim de Jogo!<br></div>
            <div class="asteroidS">Você fez: <br></div>
            <div class="asteroidS">${pontos} Pontos</div></section><br>
            <div class="asteroidS"><button class="rstButton" onclick="resetGame()">Recomeçar</button></div>`;                        
        } else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';            
        }                        
    }, 20);

    setTimeout(growCactus, randomTime);
}

//Inicia a plantação de erva
growCactus();

//Listener de Tecla de pulo
document.addEventListener('keyup', keyUpMgmt);