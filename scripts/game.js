//список картинок для загрузки
var imageLoaderList = [
    imageLoader("torb", "resources/torb.png"),
    imageLoader("gross", "resources/grass.png")
];

//глобальное хранилище загруженных картинок
var imageStore;

//стартовый метод игры
const startGame = () => {

    console.log("Start game")

    var hero = new Hero("torb");
    hero.create();
    console.log(hero);
}

//инициализация imageStore и дальнейший старт игры
loadResourcesAndStartGame(imageLoaderList, startGame);
