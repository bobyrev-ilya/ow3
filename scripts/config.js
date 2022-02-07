/**
* Глобальные настройки игры
*/

var ow3params = {
    viewportWidth: 1280,
    viewportHeight: 720,
    playerParams: {
        width: 150,
        height: 150,
    },
    gameParams: {
        spawnPointX: 0,
        spawnPointY: 0,
    },
};

/**
* @return ctx
*/
const setUpEnviroment = () => {

    //настройки канваса
    var canvas = document.getElementById("canvas");
    canvas.width = ow3params.viewportWidth;
    canvas.height = ow3params.viewportHeight;

    //инициализация контекста
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "silver";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return ctx;
}
