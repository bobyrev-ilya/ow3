class Background {

    _id;
    name;

    constructor(name){
        this.name = name;
    }

    drawBackground(){
        var img = imageStore.get(this.name);
        let move = 30;
        var tempCanvas = document.createElement("canvas"),
              tCtx = tempCanvas.getContext("2d"); 
              tempCanvas.width = img.width;
              tempCanvas.height = img.height;
              tCtx.drawImage(img,0,0,img.width,img.height);
              var  backgroundPattern = ctx.createPattern(tempCanvas, 'repeat');
        ctx.fillStyle=backgroundPattern;
        ctx.fillRect(0-move, 0-move, canvas.width+move, canvas.height+move);
    }

    create(){
        this.drawBackground()
    }
}