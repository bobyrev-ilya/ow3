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

    create() {
        this.x = (canvas.width - this.width)/2;
        this.y = (canvas.height - this.height)/2;
        console.table(this);
    }

    changePosition() {

    }

    attack() {

    }
}
