//список картинок для загрузки
var imageLoaderList = [
    imageLoader("torb", "resources/torb.png"),
    imageLoader("gross", "resources/grass.png"),
    imageLoader("bullet", "resources/sprite.png"),
    imageLoader("bullet1", "resources/bullet.png")
];

//глобальное хранилище загруженных картинок
var imageStore;
var hero;
var bg;

var bulletArr = [];
var trashArr = []


//стартовый метод игры
const startGame = () => {

    console.log("Start game");
    bg = new Background("gross");
    bg.create();
    console.log(bg);
    hero = new Hero("torb");
    hero.create();
    console.log(hero);

    main();
}

var lastTime;
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);

    lastTime = now;
    requestAnimFrame(main);
};

function update(dt) {
    gameTime += dt;

    handleInput(dt);
    bg.create();
    hero.drawModel();
    for (var i = 0; i < bulletArr.length; i++){
        if (bulletArr[i].bulletUpdate() == 0){
            bulletArr.splice(i,1);
            i -= 1;
        } else {
            bulletArr[i].drawModel();
        }

    }
    if (hero.cooldown > 0){
        hero.cooldown -= dt*100;
        //console.log(hero.cooldown);
    }


};

function handleInput(dt) {
    if(input.isDown('DOWN') || input.isDown('s')) {
        if (hero.y + HERO_HEIGHT <= canvas.height) {
            hero.y += playerSpeed * dt;
        }

        // if(input.isDown('SPACE') ) {
        
        //     if (hero.cooldown <= 0){
        //         var bullet = new Bullet("bullet");
        //         bulletArr.push(bullet);
        //         bullet.create([0,-1]);
        //         hero.cooldown = 200;
        //     }
        // }
    }

    if(input.isDown('UP') || input.isDown('w')) {
        if (hero.y >= 0) {
        hero.y -= playerSpeed * dt;
        }
        // if(input.isDown('SPACE') ) {
        
        //     if (hero.cooldown <= 0){
        //         var bullet = new Bullet("bullet");
        //         bulletArr.push(bullet);
        //         bullet.create([0,1]);
        //         hero.cooldown = 200;
        //     }
        // }
    }

    if(input.isDown('LEFT') || input.isDown('a')) {
        if (hero.x >= 0) {
        hero.flip = 0;
        hero.x -= playerSpeed * dt;

        // if(input.isDown('SPACE') ) {
        
        //     if (hero.cooldown <= 0){
        //         var bullet = new Bullet("bullet");
        //         bulletArr.push(bullet);
        //         bullet.create([-1,0]);
        //         hero.cooldown = 200;
        //     }
        // }

        }
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        if (hero.x + HERO_WIDTH <= canvas.width) {
        hero.flip = 1;
        hero.x += playerSpeed * dt;

        //if(input.isDown('SPACE') ) {
        //    shoot([1,0]);
        //}

        }
    }

    if(input.isDown('SPACE') ) {
        shoot([1,0]);
    }

}

function shoot(vector){
    if (hero.cooldown <= 0){
        var bullet = new Bullet("bullet");
        bulletArr.push(bullet);
        bullet.create(hero.flip);
        hero.cooldown = 200;
    }
}


//инициализация imageStore и дальнейший старт игры
loadResourcesAndStartGame(imageLoaderList, startGame);
