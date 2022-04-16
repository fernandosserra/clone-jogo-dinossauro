const dino = document.querySelector('.reptar');
const jurassicBg = document.querySelector('.jurassicBg');
let isJumping = false;

//Função que identifica se a tecla pressionada pelo usuário foi a esperada;
function keyUpMgmt(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jurassicJump();
        }
        
    }
}

//Função para fazer o dinossauro pular.
function jurassicJump(){
    let position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }                
            },20)
        } else{
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
        
    }, 20)
}

function growCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    jurassicBg.appendChild(cactus);

    let leftInterval = setInterval(() => {
        
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            jurassicBg.removeChild(cactus);
        } else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(growCactus, randomTime);
}

growCactus();


//Listener de Tecla de pulo
document.addEventListener('keyup', keyUpMgmt);