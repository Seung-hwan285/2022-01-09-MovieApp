## Movie seat Project에다가 실제 영화를 선택하고 좌석을 고를 수 있게 기능을 추가한 영화 예매 프로그램 입니다. 

## 개요
기존 프로젝트에 좀더 추가를 하고싶어서 만들어본 프로젝트 입니다.

## 프로젝트 link


## Wlkl
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">


## 기능

## 📃 1. Movie show
API를통해서 영화 정보들을 가져오고  평점으로 구별해서 출력을 해주게 만들었습니다.

```javascript

function showMovie(movies) {


    main.innerHTML="";
    movies.forEach(movie=>{

        const {poster_path , title , vote_average} = movie;
        const divEl = document.createElement("div");
        divEl.className="movie-container";

        divEl.innerHTML=`

        <img src = "${IMGURL + poster_path}"/>
        <div class = "movie-info">
            <h3>${title}</h3>
            <span id="${getRating(vote_average)}">${vote_average}</span>
            
        `;

        main.appendChild(divEl);
    });

    $(".movie-container").addEventListener("click",(e)=>{
        location.href="seat.html";

    });


}
```

![image](https://user-images.githubusercontent.com/74364667/149247942-dd0d4057-587d-45f5-ad4d-973624d41ae1.png)




## 📃 2. Movie search
원하는 제목 영화를 검색하면 해당 제목에 맞는 영화들을 출력해줍니다.

```javascript
form.addEventListener("submit",(e)=>{
   e.preventDefault();

    if(search.value){
        getMovie(SEARCHAPI+ search.value);


        search.value="";
    }

});

```
![image](https://user-images.githubusercontent.com/74364667/149248016-fdeedb75-8509-4bc3-a2ed-604d7f961567.png)


## 📃 3. Movie seats
기존 영화 예매 프로젝트와 비슷하게 코드를 짜봤습니다.
![image](https://user-images.githubusercontent.com/74364667/149248085-c57e13e3-634e-43c2-8494-b611acaf8633.png)
