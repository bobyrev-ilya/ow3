const Renderer = (canvas, imageStore) => {

    //инициализация контекста
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "silver";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return{

        getCanvas(){
            return canvas;
        },

        //отрисовка объекта (? extends Hero)
        drawObject(object) {
            ctx.drawImage(imageStore.get(object.name),
                            object.x,
                            object.y,
                            object.width,
                            object.height);
        }

    }
}
