/**
* Глобальные настройки игры
*/

var config = {
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
* @return canvas
*/
const setUpEnviroment = () => {

    //настройки канваса
    var canvas = document.getElementById("canvas");
    canvas.width = config.viewportWidth;
    canvas.height = config.viewportHeight;

    return canvas;
}
