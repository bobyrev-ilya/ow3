class Hero {

    _id;
    name;
    width;
    height;
    x;
    y;

    constructor(name) {
        this.name = name;
        this.width = config.playerParams.width;
        this.height = config.playerParams.height;
    }

    create() {
        console.table(this);
        return this;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    attack() {

    }
}
