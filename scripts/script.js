//настройки канваса
var canvas = document.getElementById("canvas");
canvas.width = ow3params.viewportWidth;
canvas.height = ow3params.viewportHeight;

//инициализация контекста
var ctx = canvas.getContext("2d");
ctx.fillStyle = "silver";
ctx.fillRect(0, 0, canvas.width, canvas.height);