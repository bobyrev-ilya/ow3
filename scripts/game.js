//список картинок для загрузки
var imageLoaderList = [
    imageLoader("torb", "resources/torb.png"),
    imageLoader("gross", "resources/grass.png")
];

//глобальное хранилище загруженных картинок
var imageStore;


//стартовый метод игры
const startGame = () => {

    //канвас
    var canvas = setUpEnviroment();

    //отрисовщик объектов
    const renderer = Renderer(canvas, imageStore); // инициализация отрисовщика

    //Запуск игры
    GameEngine(renderer).start();

}

//инициализация imageStore и дальнейший старт игры
loadResourcesAndStartGame(imageLoaderList, startGame);
