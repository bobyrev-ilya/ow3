//список картинок для загрузки
var imageLoaderList = [
    imageLoader("torb", "resources/torb.png"),
    imageLoader("gross", "resources/grass.png")
];

//глобальное хранилище загруженных картинок
var imageStore;


//стартовый метод игры
const startGame = () => {

    //контекст
    var ctx = setUpEnviroment();

    //отрисовщик объектов
    const renderer = Renderer(ctx, imageStore); // инициализация отрисовщика

    //Запуск игры
    GameEngine(renderer).start();

}

//инициализация imageStore и дальнейший старт игры
loadResourcesAndStartGame(imageLoaderList, startGame);
