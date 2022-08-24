/*
궁금한거: appendChild를 body말고 다른 특정 element에 사용할 수 있을까?
사진 이름을 안열어보고도 알아볼 수 있도록 하려고 했는데, 그렇게 해도 상관은 딱히 없을 듯.

우리의 목표는 js로 html에 뭔가를 만드는 것.
지금까지는 html의 것을 js로 받아오는 것만 했지만.
ㄴ> createElement 와 appendChild를 사용하면 됨.
     ㄴ>둘다 document로 시작해야하고, appendChild는 앞에 해당 노드에 적용해야함.
          ㄴ> document로 시작하는 노드. document.body도 노드지. => document.body.appendChild(추가할 노드)
              querySelector로 node를 잡아서 (노드).appendChild써도 됨. 
                ㄴ> 참고로 "append"Child니까 맨 아래에 추가됨.

배경화면을 일단 따로 폴더에 모아놓고, 정확한 이름으로 배열을 만들어 놓자. 
ㄴ> html에 img에 src로 넣어야 하니까 이름 그대로 저장해야함.


*/

const background = document.querySelector("#background");
const imgList = [
    "01_Lake&Mountains.jpg",
    "02_Lake&Snow.jpg",
    "03_NightSight.jpg",
    "04_Building.jpg",

    "05_Bridge.jpg",

    "05_Lake&Forest.jpg",

    "06_Lake&City.jpg",
];

const pickedImg = imgList[Math.floor(Math.random()*imgList.length)];


//const imgTag=document.createElement("img");

//const pickedImg = "desk.jpg"
background.src = `./img/${pickedImg}`;
///document.body.appendChild(imgTag);


