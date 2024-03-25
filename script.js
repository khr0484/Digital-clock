let handleId = 0; // 시계의 동작에 대한 id를 저장하는 변수, id를 토대로 동작을 멈추게 할 수 았음.
const h1 = document.getElementById("time") // h1태그 id를 통해서 가져옴.
const go = document.getElementById("go") // id를 통해서 문서로부터 가져옴.
const stop = document.getElementById("stop") // id를 통해서 문서로부터 가져옴.

function getTime() {
    const date = new Date() // Date라는 자바스크립트 내장객체를 가져옴.
    const year = date.getFullYear() // 년을 가져오는 변수
    const month = date.getMonth()+1 // 달을 가져오는 변수
    const day = date.getDate() // 일을 가져오는 변수
    const hour = date.getHours() // 시를 가져오는 변수
    const minutes = date.getMinutes() // 분을 가져오는 변수
    const seconds = date.getSeconds() // 초를 가져오는 변수
    const time = `${year}년 ${month}월 ${day}일${hour}:${minutes}:${seconds}` // 년, 월, 일, 시, 분, 초를 포함한 문자열을 time에 저장
    h1.textContent = time; // time을  h1태그에 textContent로 대입.
}

go.onclick = function() {
 if(handleId == 0) {
    handleId = setInterval(getTime, 1000) // setInterval은 첫번째 인자로 전달되는 함수를 두번째 인자로 전달되는 숫자만큼의 주기를 가지고 동작한다.
 }
}

stop.onclick = function() {
   clearInterval(handleId) // stop버튼을 눌렀을 때 clearInterval 메소드를 호출, id값을 넣어주면 id에 해당하는 interval동작이 제거됨. 0이 아닌 id가 제거됨.
    handleId = 0; // 다시 handleId를 0으로 바꿔주면서 초기화.
}

getTime() // getTime함수를 호출하면 문서가 로드될 때 마다 로드된 시점의 시간이 나타남.

 