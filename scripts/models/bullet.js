class Bullet{

    _id;
    name;
    x;
    y;
    speed;
    vector;
    anumationNumber;
    flip;


    constructor(name){

        this.name = name;
        this.speed = 10;
        this.anumationNumber = 0;

    }

    drawModel(){
        // ctx.drawImage(imageStore.get(this.name),
        //               this.anumationNumber*16,
        //               0,
        //               16,
        //               16,
        //               this.x,
        //               this.y,
        //               128,
        //               128);
        //               //console.log(this.x);
                      
                      
                      





//-------------------------------------



var anim = 16*Math.floor(this.anumationNumber)
console.log(Math.floor(this.anumationNumber)); 
if (this.flip == 0){
   
    var tempCanvas = document.createElement("canvas"),
      tCtx = tempCanvas.getContext("2d"); 
      tempCanvas.height = 16;
      tempCanvas.width = 16;
      tCtx.height = 16;
      tCtx.width = 16;
      //tCtx.scale(-1,1);
      tCtx.drawImage(imageStore.get(this.name),
        anim,
        0,
        16,
        16,
        0,
        0,
        16,
        16);
    ctx.drawImage(tempCanvas,
    this.x,
    this.y,
    128,
    128);
} else if (this.flip == 1){
    var tempCanvas = document.createElement("canvas"),
    tCtx = tempCanvas.getContext("2d"); 
    tempCanvas.height = 16;
    tempCanvas.width = 16;
    tCtx.height = 16;
    tCtx.width = 16;
    tCtx.save();
    //tCtx.translate(HERO_WIDTH/2,0)
    tCtx.scale(-1,1);
    tCtx.drawImage(imageStore.get(this.name),
        anim,
        0,
        16,
        16,
        0,
        0,
        -16,
        16);
    tCtx.restore();
    
  ctx.drawImage(tempCanvas,
  this.x,
  this.y,
  128,
  128);
}



//----------------------------------------





    }

    create(flip){
        this.flip = flip;
        if (this.flip == 1){
            this.x = (hero.x + HERO_WIDTH -60 );
            this.y = (hero.y + HERO_HEIGHT/2 - 60);
            this.vector = [1,0];
            this.drawModel()
        } else {
            this.x = (hero.x - 60);
            this.y = (hero.y + HERO_HEIGHT/2 - 60);
            this.vector = [-1,0];
            this.drawModel()
        }
    }

    bulletUpdate(){
        if (this.x  > canvas.width){
            return 0;
        } 
        
        if (this.y  > canvas.height){
            return 0;
        }

        if (this.vector[0]==1) {
            this.x += this.speed
            this.nextAnumation()
            return 1;
        }

        if (this.vector[0]==-1) {
            this.x -= this.speed
            this.nextAnumation()
            return 1;
        }
        
        if (this.vector[1]==1) {
            this.y += this.speed
            this.nextAnumation()
            return 1;
        }

        if (this.vector[1]==-1) {
            this.y -= this.speed
            this.nextAnumation()
            return 1;
        }
    }

    nextAnumation() {
        
        if (this.anumationNumber < 9) {
            this.anumationNumber +=0.2;
        } else {
            this.anumationNumber = 0;
        }
    }


}