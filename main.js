var mouse_event = "empty";
var startX, startY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = "1";
radius = "40";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;

    startX = e.clientX - canvas.offsetLeft;
    startX = e.clientY - canvas.offsetTop;

    mouse_event = "mousedown"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        radius = "35";

        ctx.arc(currentX, currentY, radius, 0, 2 * Math.PI)
        ctx.stroke();
    }

   

    
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event = "mouseup";
}

function clearArea(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}