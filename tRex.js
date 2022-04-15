const dino = document.querySelector('.reptar');

//Funçao que identifica se a tecla pressionada pelo usuário foi a esperada;
function keyUpMgmt(event){
    if(event.keyCode === 32){
        console.log('Pressionou espaço!');
    }
}

//Listener de Tecla
document.addEventListener('keyup', keyUpMgmt);