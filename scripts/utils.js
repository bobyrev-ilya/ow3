/**

 UTILS - Вспомогательный функционал

 */

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