const canvas = document.getElementById("#drawArea");
let ctx = canvas.getContext("2d");


// ctx.fillStyle = "black";
// // ctx.fillRect(0, 0, canva.width, canva.height);

// const canvas = document.querySelector(".myCanvas");
// const width = canvas.width = window.innerWidth;
// const height = canvas.width = window.innerHeight;
// const ctx = canvas.getAnimationsContext("2d");

// // ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.fillRect(50, 50, 100, 150);
const penSizeChange = (pensize)=> {
    penSize = pensize;
 }

// // ctx.fillStyle = "rgb(0, 0, 0)";
// // ctx.fillRect(0, 0, width, height);

let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");
colorInput.addEventListener('input', () => {
    let color =colorInput.Value;
    hexInput.value = color;
});
let changeColor =document.querySelector("#color");
changeColor.addEventListener('selectColor', () => {
 
});

let penSize = 10;
let isDrawing;
let x;
let y;

var canvas = document.querySelector("canvas");
// c = canvas.getContext("2d");

ctx.addEventListener("mousedown", (event)=>{
    isDrawing = true;
    x = event.offsetX;
    y = event.offsetY;
});

ctx.addEventListener("mouseup", ()=>{
    isDrawing = false;
    x = undefined;
    y = undefined;
});


ctx.addEventListener("mousemove", (event)=>{
   draw(event.offsetX, event.offsetY);
});

ctx.fillStyle = "hotpink";
ctx.strokeStyle = c.fillStyle;
const draw = (x2,y2)=> {
    if(isDrawing){
        ctx.beginPath();
        ctx.arc(x2,y2, penSize, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill()
//draw line
drawLine(x,y,x2,y2);

x = x2;
y = y2;
    }

}

const drawLine = (x1,y1,x2,y2)=> {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = c.fillStyle;
    ctx.lineWidth = penSize * 2;
    ctx.stroke();
}

document.querySelector(".refresh").addEventListener("click", ()=>{
    c.clearRect(0,0, canvas.width, canvas.height);
});