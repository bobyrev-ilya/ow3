class Hero {

    _id;
    name;
    width;
    height;
    x;
    y;

    constructor(name) {
        this.name = name;
        this.width = ow3params.playerParams.width;
        this.height = ow3params.playerParams.height;
    }

    drawModel() {
        ctx.drawImage(imageStore.get(this.name), this.x, this.y, this.width, this.height);
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
