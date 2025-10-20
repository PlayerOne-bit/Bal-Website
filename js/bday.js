
const animation = document.querySelector('.anim');
let confettiInstance = null;

let description=true; 
function showImage(imageSrc,desc){
    description=false;
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    document.getElementById("overlayImage").src = imageSrc;
    document.getElementById("overlayDesc").innerHTML = desc;
    confettiInstance = confetti.create(confettiCanvas, { resize: true, useWorker: true });
    confettiInstance({
        particleCount: 200,
        spread: 120,
        startVelocity: 45,
        origin: { y: 0.6 }
    });
    setTimeout(() => {
        confettiInstance({
        particleCount: 100,
        spread: 90,
        startVelocity: 35,
        origin: { y: 0.8 }
        });
    }, 800);
    randomize();
}
window.addEventListener('keydown',function(event){
    if(event.key==='Escape' || event.key==='Esc')closeImage();
});
function closeImage(){
    document.getElementById("overlay").style.display = "none";
    if (confettiInstance) confettiInstance.reset();
    animation.classList.remove('show');
    void animation.offsetWidth;
}


let index=0;
function randomize(){
     const gifs = ['kiss.gif','kiss2.gif','dudu-bubu.gif','bubu-dudu.gif','cute-bubu.gif','hehe.gif','giphy.gif','cute-cat.gif','hbd-bday.gif'];
    const gif = `gif/${gifs[index]}`;
    index++;
    if(index>=gifs.length){
        index=0;
    }
    animation.src=gif;
    animation.style.left = 'auto';
    animation.style.right = 'auto';
    animation.style.top='auto';
    animation.style.bottom='auto';    
    const isLeft=Math.random()<0.5;
    if(isLeft){
        animation.style.left='-100%';
    }else{
        animation.style.right='-100%';
    }
    const isTop=Math.random()<0.5;
    if(isTop){
        animation.style.top='5%';
    }else{
        animation.style.bottom='5%';
    }
    animation.classList.add('show');
    setTimeout(()=>{
        if(isLeft){
            animation.style.left='10%';
        }else{
            animation.style.right='10%';
        }
    },50);
}
const music=document.getElementById('music');
function playMusic(){
    const text=document.getElementById('muteBtn');
    if(text.innerText==='Music is Playing'){
        text.innerText='Music is Muted';
        text.style.backgroundColor='red';
    }else{
        text.innerText='Music is Playing';
        text.style.backgroundColor='purple';
    }
    
    music.muted=!music.muted;
}
let happybdaySong=true;
function switchMusic(){
    const text=document.getElementById('switchBtn');
    const playingMusic=document.getElementById('playingMusic');
    if(happybdaySong){
        music.src="music/Simpleng Tao.mp3";
        music.play();
        playingMusic.innerText="Simpleng Tao.mp3";
    }else{
        music.src="music/Happy Birthday Guitar Instrumental.mp3";
        music.play();
        playingMusic.innerText="Happy Birthday Guitar Instrumental.mp3";
    }
    happybdaySong=!happybdaySong;
}
function pogi(){
    const pogi=document.querySelector('.pogi');
    const button = document.getElementById('gallery');
    pogi.classList.toggle('show');
    if(gallery.innerText==='HIDE'){
        gallery.innerText='SHOW';
        gallery.style.backgroundColor='red';
    }else{
        gallery.innerText='HIDE';
        gallery.style.backgroundColor='purple';
    }
}