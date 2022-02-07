const GameEngine = (renderer) => {

    const canvas = renderer.getCanvas();

    const drawModel = (object) => {
        renderer.drawObject(object);
    }

    const setInitPosition = (object) => {
        object.setPosition(
                (canvas.width - object.width) / 2,
                (canvas.height - object.height) / 2
        )
    }


    //публичные методы класса
    return {

        start(){
            console.log("Start game");
            var hero = new Hero("torb");
            setInitPosition(hero);
            hero.create();
            drawModel(hero);
        }

    }
}
