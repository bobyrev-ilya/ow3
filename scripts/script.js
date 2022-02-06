//настройки канваса
var canvas = document.getElementById("canvas");
canvas.width = ow3params.viewportWidth;
canvas.height = ow3params.viewportHeight;

//инициализация контекста
var ctx = canvas.getContext("2d");

//параметры игры
var HERO_WIDTH = 200;
var HERO_HEIGHT = 200;

//утилиты для игры
//Возвращает картинку после ее полной загрузки (Promise)
var imageLoader = (key, resourcePath) => {
    return new Promise((resolve, reject) => {
        var image = new Image();
        image.src = resourcePath;
        image.key = key;
        image.onload = () => resolve(image);
    })
}

var loadResourcesAndStartGame = (imageLoaderList, startCallback) => {
    Promise.all(imageLoaderList)
        .then(images => {
                imageStore = new Map(images.map(image => [image.key, image]));
                startCallback();
    });
}