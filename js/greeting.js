/*
배운점: console.dir로 기억안나는 오브젝트들 찾아볼 수 있을 듯. event같은 것들.
        html에서 class는 css와 js로 조작하기 위해 있는거라고 생각하면 편할 듯. bootstrap에서처럼.
해설:
일단 HTML부터 만들고 그에 맞는 JS를 만들것임. 파트별로 나눠서 만들면 되나봄.

1. LOGIN
- input과 button을 이용해 html을 만들 것. 각각에 필요한 것들은 mdn등을 통해 
모르면 찾아볼 수 있음. 물론 알면 편하지. value나 placeHolder, type등 익숙해질 듯.
- 그리고 이에 맞는 JS를 만드는데, button이 클릭될 때 event발생해야하니 addEventListener
input의 내용을 받아야 하니 value값을 갖고오면 됨. querySelector를 이용해서 처리.
또한 input에 아무런 값도 입력하지 않았을 때를 대비해야 함.=> "유효성 검사"
ㄴ> 이 때 물론 JS를 통해서 value가 ""인지, value>15인지 등을 확인할 수 있음.
     그러나, HTML의 지원기능을 사용하면 웹페이지 자체에서 기능 지원하도록 할 수 있음.
         이런 기능이 있으면 최대한 HTML기능을 사용하는게 좋음.
            그래서 input에 required나 maxlength를 사용할 수 있음.-> <input required maxlength=15 ...>
                또한, div로 input과 button을 묶지 말고 form 으로 묶으면, 
                 값을 submit하게 됨. 또한, 이 때 click과는 무관하게 enter를 누르거나 button을 누르거나
                 submit하게 되므로, 우리는 click이라는 이벤트보다 submit에 중점을 둘 수 있다.
                      ㄴ> 이 때 문제점은, submit하게 되면 페이지가 refresh된다는 것. 이를 멈춰야 함..
                          
                          따라서 일단, 이제 button보다 submit을 처리해야 하므로, querySelector를 form으로 잡고, 
                          addEventListener도 submit으로 받음. -> enter도 이제 받아짐. (뭐든 submit에 대해 처리하니)
                          새로고침을 막기 위해서 addEventListener에 들어가는 콜함수가 기본으로 보내는 argument가 있다는 걸 알아야 함.
                            ㄴ> 보통 event로 받는데, addEventListener에서 처리하는 event와 관련된 정보를 처리할 수 있음.
                                이 event요소가 기본으로 제공하는 함수들 중 preventDefault는 event들로 인해 발생하는 기본동작을 막음.
                                 즉, 여기에서는 새로고침을 막기 위해 사용함.  html의 form의 기본동작은 submit임
                              또다른 예시로, <a>를 사용하면 이 태그의 기본 동작은 다른 페이지로 이동하는 것.
                              여기서도 같은 행위를 통해 event.preventDefault를 사용하면 이 기본행동을 막는다.
                            ㄴ> 결론적으로 중요한 것은, addEventListener는 일반적인 함수 실행과는 다르게, event가 일어날 때에만 실행되며, 
                                   event가 일어나기만 한다면 여러번이든 실행 가능하다.
-로그인을 하면 로그인 form을 없애고 환영문구를 띄워줄 것임.
   이를 위해서 CSS파일에 hidden이라는 클래스를 만들고 display:none만 넣어둠. -> bootstrap과 같은 느낌이라고 생각하면 될 듯.
   그리고 form에 classList.add로 hidden이라는 클래스 명을 넣어주면 안보이게 됨.  
 또한 h1을 html에 만들어두고 class="hidden"으로 hidden을 기본값으로 만들어 두자. 
   그리고 id를 설정해서 js에서 잡고 classList.remove를 통해서 hidden을 없애주면 화면에 보이게 된다.
    이 때, `${}` 와 같은 `(백틱)을 이용한 방식을 통해 깔끔하게 string과 변수를 섞어서 하나의 string으로 만들 수 있다.
1-1. 정보를 브라우저에 저장하기.
- 브라우저는 여러 API를 제공한다. chrome의 경우, 개발자도구>application에서 여러 제공하는 기능들을 볼 수 있다.
   이 중에서 브라우저에 정보를 저장할 때 가장 쉬운 방법인 local storage를 사용할 것이다.
   그 안을 보면 key,value로 이루어져 있다. 콘솔창에 localStorage를 통해 확인해보면 여러 메서드를 제공한다.
     ㄴ> 그 중에서 setItem, getItem, removeItem을 통해서 key와 value를 저장하거나, value값 저장하거나 key와 value를 제거할 수 있다.
- 그렇다면 새로고침을 했을 때, localStorage에 정보가 있으면 greeting하고 아니면 input을 받도록 해보자.
    ㄴ> 우리가 어차피 key를 username으로 통일할 것이기 때문에, localStorage에 아무것도 없는 상태에서 username을 불러오면 null값이 뜬다.
         이걸 이용해서, getItem('username')===null이면 form을 띄우고, 아니면 greeting을 띄울 것임.
       그렇다면 맨 처음화면에서는 모든걸 hidden으로 해놔야 함.
    나머지 과정은 자연스럽게 하면 되고, 그 과정중에서 코드들이 겹치는 부분이 있다면 function으로 만들어서 재사용시키자.
         ㄴ> 이후에 이것을 사용하는 부분이 만드는 과정중에서 나오진 않더라도, 추후 수정할 일이 생겼을 때 매우 편하다.
*/ 


const HIDDEN_CLASSNAME="hidden"; // string으로만 이루어진 변수명은 대문자 + '_'를 이용하는게 관례인가봄.
const KEY_USERNAME="username";

const loginForm = document.querySelector("#login-form" );
const input = document.querySelector("#login-form input" );
const greeting = document.querySelector("#greeting");
const button = document.querySelector("#login-form button");


function asdfasdf(event){
    event.preventDefault();
    
    localStorage.setItem(KEY_USERNAME, input.value);
    input.classList.add(HIDDEN_CLASSNAME);

}

function displayContent(usernameValue){
    greeting.innerText = `Hello, ${usernameValue}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(`Hello ${usernameValue}!`);
    

    
}


const savedUsername = localStorage.getItem(KEY_USERNAME);

console.log(savedUsername);
if(savedUsername === null){
    loginForm.addEventListener("submit",asdfasdf);
}else {
    // show greeting
    input.style.display="none"; 
    console.dir(input.style);
    console.log(savedUsername);
    displayContent(localStorage.getItem(KEY_USERNAME));
}




