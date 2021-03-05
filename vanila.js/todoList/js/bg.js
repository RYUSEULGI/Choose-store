const body = document.querySelector('body');

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./img/${imgNumber + 1}.jpg`; //0부터 인식하기 때문에 +1을 해주었음
    image.classList.add('bgImg');
    body.prepend(image); //appendChild와 거의 동일
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER); //floor 버림 ceil 올림
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();