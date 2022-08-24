/*
명언: 
욕 좀 시발 그만해
제발 니들 인생에 훈수하세요
결과가 좋으면 욕했던 놈들은 자연스레 사라진다.
모두에게 운은 넘치도록 주어진다. 그저, 모두가 무시했을 뿐이다.
인생을 실패라는 찰흙을 뭉쳐서 성공이라는 작품을 빚는 것이다.
감사하는 법을 아는게 중요하다.
혹시 내가 병신은 아닐까?
후회없는 선택을 해라.


중요한건 Random을 이용하는 것임. 일단 명언들과 author를 함께 저장하기 위해 object를 사용했는데 영상에선, 나는 그럴필요는 없으니 걍 String으로 하자.
랜덤은 Math안에 메서드로 존재함. 0~1사이의 값들을 랜덤으로 내뿜는다.
 ㄴ> 이들을 1~N까지 사용하려면, N을 곱해주고 ceil(), round(), floor()중 골라서 하면 됨.(Math에 있음) 
       round를 이용하면 0~N까지 됨. floor이면 0~N-1까지 깔끔하게 되서 floor로 함.
 * 소수점자리수이용하려면 10^R곱하고 나누면 되겠지?
*/

const quotesList = [
    "짬을 이용하지 못하는 사람은 항상 짬이 없다.",
    "일은 그것이 쓰일 수 있는 시간이 있는 만큼 팽창한다.",
    "시간을 선택하는 것은 시간을 절약하는 것이다.",
    "과거에서 교훈을 얻을 수는 있어도, 과거 속에 살 수는 없다.",
    "계획이란 미래에 관한 현재의 결정이다",
    "복역 중이 아니라면, 충분한 시간이란 결코 없다.",
    "과거를 기억 못하는 이들은, 과거를 반복하기 마련이다.",
    "오늘 할 수 있는 일에만 전력을 쏟으라.",
    "승자는 시간을 관리하며 살고, 패자는 시간에 끌려 산다."
];
const author = ["유럽의 속담","파킨스","베이컨","린든 B.존슨","드래커","말콤 포브스","조지 산타야나","뉴튼","J.하비스"];

const quotesSpan = document.querySelector("#quotes span:first-child");
const authorSpan = document.querySelector("#quotes span:last-child");

quotesSpan.innerText = quotesList[Math.floor(Math.random()*quotesList.length)];
authorSpan.innerText = `-${author[Math.floor(Math.random()*author.length)]}-`;


