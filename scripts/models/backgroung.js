class Background {

    _id;
    name;

    constructor(name){
        this.name = name;
    }

    drawBackground(){
        var img = imageStore.get(this.name);

        var tempCanvas = document.createElement("canvas"),
              tCtx = tempCanvas.getContext("2d");
              tCtx.width = img.width;
              tCtx.height = img.height;
              //Пока хз почему криво заливается фон. приходится растягивать его
              tCtx.drawImage(img,0,0,img.width,img.height,0,0,img.width*4.68,img.height*2.35);
              var  backgroundPattern = ctx.createPattern(tempCanvas, 'repeat');
        ctx.fillStyle=backgroundPattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    create(){
        this.drawBackground()
    }
}