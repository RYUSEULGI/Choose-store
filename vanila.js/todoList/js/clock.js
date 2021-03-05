const ClockContainer = document.querySelector(".js-clock"),
    ClockTitle = ClockContainer.querySelector("h1"); //하위 클래스 호출

function getTime() {
    const date = new Date(); //날짜 함수 연, 월, 일, 시, 분, 초 값 가능 
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    ClockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
                        minutes < 10 ? `0${minutes}` : minutes}:${
                        seconds < 10 ? `0${seconds}` : seconds}`; //작은 if
}

function init() {
    getTime();
    setInterval(getTime, 1000); //새로고침   
}
init();