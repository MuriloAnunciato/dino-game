const dino = document.querySelector(".dino");
const background = document.querySelector('.background');
let isJunping = false;
let position = 0;
function handleKeyUP(event){
    if(event.keyCode === 32){
        if(!isJunping){
            jump()
        }
        
    }
}

function jump(){
    isJunping = true;
    let upInterval =setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);
            let downInterval=setInterval(()=>{
                if (position<=0){
                    clearInterval(downInterval);
                    isJunping = false;
                }else
                    position-=20
                    dino.style.bottom = position + 'px';
                },50);
        }else{
            position += 20;
            dino.style.bottom = position + 'px';
        }
    },50);
}
function creatCactus(){
    const cactus = document.createElement('div');
    let cactusPosition =1200;
    let randomTime = Math.random() * 6000;


    cactus.classList.add('cactus');
    cactus.style.left =1200 +'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        if (cactusPosition <=0){
            clearInterval(leftInterval);
            background.removeChild(cactus)
        }else if(cactusPosition > 0 && cactusPosition < 68 && position < 68){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
            cactusPosition-=10;
            cactus.style.left = cactusPosition + 'px';
        }

    },20)

    setTimeout(creatCactus, randomTime);
}
creatCactus();
document.addEventListener('keyup', handleKeyUP);