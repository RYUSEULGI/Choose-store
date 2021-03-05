const tabBtn = document.querySelectorAll('.tab-btn'),
        tabImg = document.querySelectorAll('img'),
        tabText = document.querySelectorAll('tab-txt');
        

function handleClick(e){
    console.log(e);
    const value = e.currentTarget;
    value.style.boxShadow = "0 0 30px -10px #4288ea";
    value.childNodes[1].src = value.childNodes[1].src.replace('.svg','_selected.svg');
    value.childNodes[3].style.color = "#4288ea";
}
        

for(let i =0; i < tabBtn.length; i++){
    tabBtn[i].addEventListener('click', handleClick);
}
