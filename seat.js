// TODO 배열에 담아서 영화제목 추출
// -[x] list에 영화 제목담기
// -[x] foreEach로 추출


// TODO 좌석 선택하면 하늘색으로 변경
// -[x] dom 가져오기
// -[x] seat이거나 , occupied가 아니면 클릭했을때 색 변경

// TODO 좌석 카운트,가격 증가
// -[x] dom 가져오기
// -[x] 영화 티켓가격 추가
// -[x] 좌석 선택하면 증가

const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";



const $=(s)=>document.querySelector(s);

let titleList=[];

// 좌석 색 변하게 하기 위한 dom
const select = $(".container");
// 좌석 수 , 티켓가격 가져오기 위한 dom
const seatCount = $(".seat-count");
const totalTicket = $(".ticket");

async function getSeats() {

    const resp= await fetch(APIURL);

    const req = await resp.json();


    let seat = $("#movie");



    req.results.forEach(movie=>{
        const {title}= movie;

        //console.log(title);
        titleList.push(title);

    });

    //title 배열에 담아서 하나씩 추출하기
    console.log(seat.children.length);
    titleList.forEach(item =>{

        // option 생성
        let opt = document.createElement("option");
        opt.value="8000";
        // forEach로 가져온 영화제목들 하나씩 넣어주기
        opt.innerText = item;

        seat.appendChild(opt);

    });


}


function updateSeatAndMoney() {
    const MovieSelect = $("#movie");
    const oneTicket = parseInt(MovieSelect.value);

    const selectSeats = document.querySelectorAll(".row .seat.selected");
    const selectLength = selectSeats.length;


    totalTicket.innerHTML=`총 가격 ${oneTicket * selectLength}`
    seatCount.innerHTML=`좌석수 ${selectLength}`;
}


select.addEventListener("click",(e)=>{

    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
    }

    updateSeatAndMoney();

});


getSeats();