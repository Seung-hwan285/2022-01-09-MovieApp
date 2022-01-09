// TODO 영화 api 가져와서 화면에 뿌리기
// -[x] 영화 정보 api 가져오기
// -[x] 이미지 api 가져오기 (영화 포스트)
    // -[x] 가져온 영화 정보 api 비동기처리
    // -[] creatElement로 이미지태그 생성
    // -[] 이미지 뿌리기


const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGURL ="https://image.tmdb.org/t/p/w1280";

async function getMovie() {
    const resp = await fetch(APIURL);

    const req = await resp.json();



    console.log(req);


    req.results.forEach(movie=>{
        const img = document.createElement("img");
        img.src = IMGURL + movie.poster_path;
        document.body.appendChild(img);

    });

}

getMovie();