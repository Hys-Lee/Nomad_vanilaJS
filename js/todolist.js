/*
todo list를 만들어야 하는데, 필요하는 것은 리스트와 입력하는 것.
일단 입력을 받기 위해 form과 input을 사용해서 greeting에서와 같은 방식으로 event와 preventDefault를 이용한다.
   ㄴ> 이 때, 빈 input값이 들어오면 곤란하기때문에 "required" 를 꼭 붙여주자.
리스트를 보이기 위해 일단 HLTML에서 ul만 입력하고 li는 js를 통해 추가할 수 있도록 한다.
이 때 li안에는 span으로 내용을 추가할 것인데, 이유는 제거하는 버튼을 만들것이기 때문임.
   ㄴ> 이렇게 ul안에 span을 감싸는 li를 넣었을 때(greeting에서의 방법만으로) 문제가 생긴다.
         => 바로 새로고침을 하면 싹 날라간다는 것. + 지울 수 없다는 것.
     * appendChild는 node들 구성 다 하고나서 마지막에 할 것.(당연하지만)
    리스트 삭제 버튼에 이모지를 인터넷에서 찾아서 이용하기도 하나봐. 문자 대용으로. 
   ㄴ> 리스트를 삭제할 때, event.path[1]로 button의 부모인 li를 찾아도 되지만 event.target.parentElement로 찾겠다.
                                    ㄴ> 이유는 단순히 코드를 볼 때 path[1]보다는 target.parentElement가 보자마자 이해하기 좋아서.
        삭제할 때는 .remove()를 이용하는데, 새롭게 만든 노드나 이미 있던 것들(query로 선택한 것도)도 이걸로 제거 가능.

- 새로고침하면 리스트 내용이 날라가기 때문에 localStorage를 이용할 것임.
     todoList에 추가할 때마다 array를 만들어서 넣을 예정이고, 이것을 localStorage에 넣을 예정.
       ㄴ> 문제는 이걸로도 새로고침으로 리스트가 날라가는 것을 못막는다는 것 + getItem으로 불러오면 스트링들이 ","로 나눠져 있는 것->array가 X
            1. 일단 array형태가 그대로 string으로 변환되도록 해야 함. -> JSON.stringify()를 이용하면 고유의 출력형태 그대로 string으로 변환.
                   ㄴ> 이대로 localStorage에 넣으면 됨.
    

            2. 일단 localStorage에 넣고 array형태로 stringify한 애들을 다시 이용해야 함.
                     ㄴ> JSON.parse()를 사용하면 stingify의 역 행동을 할 수 있다. 즉, 지금은 array로 돌릴 수 있음.
                     이후에 우리는 array의 각 원소들마다 일을 시켜야 하는데, 이 때 forEach사용한다.
                           ㄴ> array에 대해서 사용할 수 있음.
                                  ㄴ> function sayHello(item){} ...   forEach(sayHello){}으로 사용할 수 있는데, 
                                        forEach의 콜함수는 addEventListner에서처럼 forEach로부터 argument를 하나 받을 수 있다.
                                           ㄴ> 이는 forEach가 적용된 array의 해당 요소들 각각이다. 
                                                  ㄴ> 또한 이를 Arrow function을 이용해서
                                                       .forEach((item)=>{console.log(item)});처럼 작성할 수도 있다.
                ㄴ> 우리는 localStorage에서 key값을 호출했을  때 비어있지 않다면, 즉 null을 호출하지 않는다면 
                     localStorage에 있는 값들이 계속 그려져있도록 해야한다.
                        ㄴ> 새로고침하면 기본적으로 toDos가 빈 array이고 이것을 그대로 그리기 때문에 아무것도 안뜨는 것임.
                    즉 페이지가 뜰 때, localStorage에 해당 값이 있는지를 먼저 판단해야 한다. -> 전역변수 savedToDosString를 만드는 이유.
                    savedToDosString 가 null이 아니라면 JSON.parse를 통해 array로 바꾼 뒤, forEach를 통해 각 요소들을 draw해준다.

                    이제 새로고침해도 내용이 날아가지 않는다!
        ㄴ> 또 한가지 문제점은 delelte를 눌러도 localStorage에서 날라가지 않는다는 점.
               delete를 한다고 해도 toDos에서 어떤 것을 없애야 할지 알 수 없다.
                    delete를 통해 html요소를 조작하므로, html요소들 중 몇 번째 요소를 제거하는지 알 수 있고, 
                    이를 통해 몇 번째 array값을 없앨지 알 수 있다고 생각하겠지만 이러면 너무 복잡함. (html 순서를 알아내는 부분이)
                따라서 toDos에 단순히 string만 들어가는게 아니라 id가 있는 object를 넣고, 이 id를 html의 li들에 연동시키면 서로 매칭이 깔끔.
                    ㄴ> 이 때, id는 고유한 값을 사용해야 하므로, 여기서는 Date.now()를 사용한다. -> 절대 안겹치겠네.
                이제 toDos에서 조작을 해야함. 이 때 .filter(ArrowFunction)를 사용하는데, filter는 새로운 array를 리턴한다.
                    ㄴ> filter는 콜 함수를 통해 array의 각 원소에 대해 true를 리턴하면 그 값은 유지, false면 제외해서 새 array를 만든다.
                        ㄴ> filter안에 들어가는 콜함수(혹은 arrowfunction)에서 리턴값에 X!==Y를 통해 특정 값을 false로 제외할 수 있따.
                    즉, 원래의 array를 조작하는게 아니라 새로운 array로 교체하는 것.
                    ㄴ> 이 때, forEach처럼 item을 콜함수에서 받을 수 있고 이는 적용되는 array의 요소들이다.
                        ㄴ> 또한, 이 때 arrow function을 사용한다면, 콜함수 밖에 있는 것들도 사용이 가능하다(왜지...)
                        ㄴ> 또한, arrow function에서 뒷 부분에 {}를 넣으면 리턴값이 필요할 때는 return을 써줘야 하고, {}가 없이 그냥 오면 그게 리턴값임.
                    ㄴ> 또한 확인해보면 알겠지만, html의 id값은 string, object에 넣은 id는 number이기 때문에 parseInt를 잊지 말아야 함. 
                
        */



const todoForm=document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const KEY_TODOS="todos";
let toDos = [];

function handleTodoDelete(event){
    const liThatWillBeDead = event.target.parentElement;
    

    toDos=toDos.filter(item=>item.id!==parseInt(liThatWillBeDead.id));
    saveToDos();
    liThatWillBeDead.remove();
}

function saveToDos(){
    localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));  
}

function drawNewTodo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.id = newTodoObj.id;
    span.innerText=newTodoObj.text;
    button.innerText="✘"

    
    // 이제 li안에 span을 넣어야 하기 때문에.
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    button.addEventListener("click", handleTodoDelete);

}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodoObj = {
        text:todoInput.value,
        id:Date.now(),
    };
    todoInput.value="";
    console.log(toDos.length);
    if(toDos.length<6){
        console.log("66666");
        toDos.push(newTodoObj);
        saveToDos();
        drawNewTodo(newTodoObj);
    }
    else{
        
        const input = document.querySelector("#todo-form input");
        
        input.placeholder = "Already Full!";
    }
    


}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDosString = localStorage.getItem(KEY_TODOS);

if(savedToDosString!==null){
    toDos = JSON.parse(savedToDosString);
    toDos.forEach(drawNewTodo);
}

