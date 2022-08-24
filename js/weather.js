/*
weather는 API를 이용할 것임.
    이를 위해서 일단 현재 위치(위,경도)를 알아야함.
    ㄴ> navigator를 사용하여 navigator.geolocation.getCurrentPosition()을 사용한다.
            * navigator는 console.dir로 확인해보면 알겠지만 다양한 기능을 함께 갖고 있다. 블루투스나 네트워크 연결상태 등.
        ㄴ> getCurrentPosition()은 커서를 대보면 알겠지만(그리고 찾아보면), 2개의 콜함수를 가질 수 있다. 
                1. 사용자가 허용했을 때의 콜함수-> 인수를 하나 가질 수 있는데, position관련 object이다.
                2. 사용자가 거부했을 때의 콜함수-> 인수를 하나 가질 수 있는데, error관련 object이다.
            허용했을 때의 콜 함수에서 얻을 수 있는 인수 positionObj를 console.dir로 확인해서 latitude,longitude를 확보.
    그 다음, API를 이용하기 위해 https://home.openweathermap.org/에서 로그인 후 API키를 받는다.
        API탭에 Current Weather API를 사용하고, 여기에 latitude와 longitude와 API key를 이용해 다양한 값들을 얻을 수 있다.
        url에 우리가 얻은 값들을 넣고(백틱으로 전개), 온도를 확인해보면 화씨온도인 것 같으니 metric으로 units를 덧붙여보자. 
            ㄴ> 다른 변수들은 다 &로 붙어져 있으니까 &로 units를 붙여서 url을 수정한다.
        js에서 제공하는 fetch라는 함수를 통해 url을 직접 들어가지 않고도 js로 끌어들일 수 있다.
            ㄴ> 이 fetch는 promise의 일종이라고 한다.  -> 자세한 것은 wetube강의에서 확인할 수 있데.(js로 백엔드 하는 강의)
                ㄴ> https://ko.javascript.info/promise-basics에서 찾아보면 promise가 뭔지, then이 뭔지 알 수 있음.
                그래서 fetch(url).then(response=>response.json())에서, response.json이 url에 있던 정보, 즉 network에서 확인할 수 있는 object임.
                    이 object에서 우리가 필요한 것은 도시 이름인 name, 날씨인 weather[0].main, 기온인 main.temp이다.
                    ㄴ> fetch(url).then(response=>response.json()).then(data=>{이 안에 위의 것들을 이용해서 html에 innerText로 넣으면 되겠네})

*/

const KEY_WeatherAPI="875a788b90b37b9c516617904039d154";


function successGeo(positionObj){
    const latitude=positionObj.coords.latitude;
    const longitude=positionObj.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY_WeatherAPI}&units=metric`;
    console.log(url);
    fetch(url).then(response=>response.json()).then(data=>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temperture = document.querySelector("#weather span:last-child");

        const cityValue = data.name;
        const weatherValue = data.weather[0].main;
        const tempValue = data.main.temp;
        
        city.innerText = cityValue;
        weather.innerText = weatherValue;
        temperture.innerText = `${tempValue}°C`;
    })
}
function failGeo(positionErrorObj){
    console.log("You Failed to bring your GeoLocation, because you denied! You Idiot!!");
}

navigator.geolocation.getCurrentPosition(successGeo, failGeo);

