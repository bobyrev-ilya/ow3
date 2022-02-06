class Hero {

    _id;
    name;
    width;
    height;
    x;
    y;
    flip;
    cooldown;

    constructor(name) {
        this.name = name;
        this.cooldown = 0;
        this.flip = 1;
    }

    drawModel(){
        if (this.flip == 1){
            var tempCanvas = document.createElement("canvas"),
              tCtx = tempCanvas.getContext("2d"); 
              tempCanvas.height = 200;
              tempCanvas.width = 200;
              tCtx.height = HERO_HEIGHT;
              tCtx.width = HERO_WIDTH;
              //tCtx.scale(-1,1);
              tCtx.drawImage(imageStore.get(this.name),
              0,
              0,
              HERO_WIDTH,
              HERO_HEIGHT);
            ctx.drawImage(tempCanvas,
            this.x,
            this.y,
            HERO_WIDTH,
            HERO_HEIGHT);
        } else if (this.flip == 0){
            var tempCanvas = document.createElement("canvas"),
            tCtx = tempCanvas.getContext("2d"); 
            tempCanvas.height = 200;
              tempCanvas.width = 200;
            tCtx.height = HERO_HEIGHT;
            tCtx.width = HERO_WIDTH;
            tCtx.save();
            //tCtx.translate(HERO_WIDTH/2,0)
            tCtx.scale(-1,1);
            tCtx.drawImage(imageStore.get(this.name),
            0,
            0,
            -HERO_WIDTH,
            HERO_HEIGHT);
            tCtx.restore();
            
          ctx.drawImage(tempCanvas,
          this.x,
          this.y,
          HERO_WIDTH,
          HERO_HEIGHT);
        }

    }

    create() {
        this.x = (canvas.width - this.width)/2;
        this.y = (canvas.height - this.height)/2;
        this.drawModel();
    }

    changePosition() {

    }

    attack() {

    }
}
