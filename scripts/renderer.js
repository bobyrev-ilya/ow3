const Renderer = (ctx, imageStore) => {


    return{

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
