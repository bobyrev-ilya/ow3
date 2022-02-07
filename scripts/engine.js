const GameEngine = (renderer) => {

    const drawModel = (object) => {
        renderer.drawObject(object);
    }


    //публичные методы класса
    return {

        start(){
            console.log("Start game");
            var hero = new Hero("torb");
            hero.create();
            drawModel(hero);
        }

    }
}
