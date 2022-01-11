// TODO 배열에 담아서 영화제목 추출
// -[x] list에 영화 제목담기
// -[x] foreEach로 추출


const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";



const $=(s)=>document.querySelector(s);

let titleList=[];
async function getSeats() {

    const resp= await fetch(APIURL);

    const req = await resp.json();


    let seat = $("#movie-seat");



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

            // forEach로 가져온 영화제목들 하나씩 넣어주기
            opt.innerText = item;

            seat.appendChild(opt);


    });


}

getSeats();