const lockBtn = document.querySelector("#lock");
const GRID_CLASSNAME = "grid";
function displayUnlock(){
    greeting.classList.add(HIDDEN_CLASSNAME);
    const content = document.querySelector("#content");
    console.dir(content);
    content.classList.remove(HIDDEN_CLASSNAME);
    content.style.display="grid";

    const weather = document.querySelector("#weather");
    weather.classList.remove(HIDDEN_CLASSNAME);

    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoForm.style.display="flex";
    
}


function handleLock(event){
    event.preventDefault();
    console.log("FFFFFFFFFFFFFFFFFFFF");
    const loginForm = document.querySelector("#login-form");
    const greeting = document.querySelector("#greeting");
    const input = loginForm.querySelector("input");
    

    input.classList.remove(HIDDEN_CLASSNAME);
    lockBtn.style.display = "none";

    
    if(savedUsername !==null){
        displayUnlock();
    }
}

lockBtn.addEventListener("click", handleLock);

//// 여기다가 만들어야 겠다.
/// unlock했는데 login되어있으면과 안되어있으면으로.asdasdasd