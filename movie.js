// TODO 영화 api 가져와서 화면에 뿌리기
// -[x] 영화 정보 api 가져오기
// -[x] 이미지 api 가져오기 (영화 포스트)
    // -[x] 가져온 영화 정보 api 비동기처리
    // -[x] creatElement로 이미지태그 생성
    // -[x] 이미지 뿌리기


// -[x] 영화 정보 뿌리기
    // -[x] div태그 생성해서 movie-container 생성
    // -[x] img 태그 ~ 남은 태그 innerHTML로 감싸기
    // -[x] movie 객체 정보 const에 담기

// TODO 영화정보 클릭시 좌석예매로 이동
    // -[x] 클릭시 seat.html로 이동


const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGURL ="https://image.tmdb.org/t/p/w1280";


const $=(s)=>document.querySelector(s);
async function getMovie() {
    const resp = await fetch(APIURL);

    const req = await resp.json();



    console.log(req);

    req.results.forEach(movie=>{

        const {poster_path , title , vote_average} = movie;
        const divEl = document.createElement("div");
        divEl.className="movie-container";

        divEl.innerHTML=`

        <img src = "${IMGURL + poster_path}"/>
        <div class = "movie-info">
            <h3>${title}</h3>
            <span id="version">${vote_average}</span>
            
        `;


        document.body.appendChild(divEl);
    });

    $(".movie-container").addEventListener("click",(e)=>{
        location.href="seat.html";

    });

}




getMovie();