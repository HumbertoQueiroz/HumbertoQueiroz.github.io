function typeWriter(el){
    const textArray = el.innerHTML.split("");
    el.innerHTML="";

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML+=letter),95*i);
    });

    setInterval(() => typeWriter(el), 5000);
};

typeWriter(maquinaEscrever);






const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
  return Math.floor(Math.random()*number);
}

function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for(let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

btn.addEventListener('click',draw);