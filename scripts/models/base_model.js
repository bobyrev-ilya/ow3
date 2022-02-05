class Model {

    _id;
    name;
    imagePath;
    x;
    y;

    constructor(name, imagePath){
        this.name = name;
        this.imagePath = imagePath;
    }

    drawModel(){
        var image = new Image();
        image.src = this.imagePath;
        image.onload = function(){
            ctx.drawImage(image, 0 , 0, 200 , 200 );
        };
    }

    changePosition(){

    }

    attack(){

    }
}
