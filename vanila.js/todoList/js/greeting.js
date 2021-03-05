const form = document.querySelector('.js-form-greeting'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); //submit 이벤트 무력화
    const currentValue = input.value;
    PaintGreeting(currentValue);
    saveName(currentValue); // value값을 PaintGreeating(text)에 넣어주기
}

function askforName() {
    form.classList.add(SHOWING_CN); //class 선택자 추가
    form.addEventListener('submit', handleSubmit);
}

function PaintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}:)`;
}

function LoadName() { //loaclStorage를 가져옴
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //이름을 입력하지 않은 경우
        askforName();
    } else {
        //이름이 입력되어 있는 경우
        PaintGreeting(currentUser);
    }
}

function init() {
    LoadName();
}
init();