/*
배운점: js에서 어려움에 부딪힌 곳은 다른 개발자들도 어려움을 부딪힌 곳이다-> 해결하는 방법이 존재할 것(function을 만들어 두었다든가)

clock을 만들기 전에 반드시 알아야 할 개념들
1. Interval: N초마다 함수가 반복 실행되어야 할 때 사용
   ㄴ> setInterval()함수를 이용함.
2. Timeout: N초 후에 함수를 1번 실행
   ㄴ> setTimouout()함수를 이용함.

-Date라는 class를 통해 date관련한 많은 값들을 얻어올 수 있음.-> const date = new Date()와 같이 사용해야 함.

- 시계 숫자가 1자리 수일 때도 01,02,03처럼 2자리로 표현하기 위해서는 padStart함수를 알아야 함.
    이는 String에 적용하는 함수이고, "1".padStart(2,"0")처럼 사용하는데, 
    앞의 숫자는 padStart의 대상자가 2자리수 이상이면 암것도 안하고 미만이면 뒤의 "0"을 붙여줌.
  ㄴ> 이를 위해서는 Number->String으로 바꾸는 법도 알아야 함. 단순히 String(1)처럼 String으로 감싸주면 됨.
*/


const clock = document.querySelector("#clock");
const lock = document.querySelector("#lock");

function unlockClock(){
    clock.style.top="5%";
    clock.style.fontSize="300%";
    clock.classList.remove("hidden");
    clock.style.marginBottom="0%";
    clock.style.marginTop="4%";
    

    const input = document.querySelector("#todo-form input");
    if(toDos.length>=6){
        input.placeholder="";
    }
    
    displayUnlock();

}


function displayClock(){
    const date = new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    
    clock.innerText =  `${hours}:${minutes} `
    
    const lockBtn = document.querySelector("#lock");
    let stepOne = lockBtn.style.display=="none";
    let stepTwo = localStorage.getItem(KEY_USERNAME)!==null;

    console.log(`${stepOne}, ${stepTwo}`);
    if(stepOne && stepTwo){
        unlockClock();
    }
    
}

displayClock();
setInterval(displayClock,1000);