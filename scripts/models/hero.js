class Hero {

    _id;
    name;
    x;
    y;

    constructor(name){
        this.name = name;
    }

    drawModel(){
        ctx.drawImage(imageStore.get(this.name),
                      this.x,
                      this.y,
                      HERO_WIDTH,
                      HERO_HEIGHT);
    }

    create(){
        this.x = (canvas.width - HERO_WIDTH)/2;
        this.y = (canvas.height - HERO_HEIGHT)/2;
        this.drawModel()
    }

    changePosition(){

    }

    attack(){

    }
}
