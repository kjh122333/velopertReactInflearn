# Section1 : React?

## Part1 
## Part2 : FrontEnd Library?
 > - Web ▶ Web Application   
 > - 아래 코드에서 0 을 증가시키려면 각 `DOM` element들에대한 레퍼런스들을 접근해서 필요한 작업을 해야됨
 ```javascript
    <div>
        <h1>Counter</h1>
        <h2 id = "number"> 0 </h2>
        <button id = "increase"> + </button>
    </div>
 ```
 > 필요한 작업...
 > - *var elNumver = document.getElementById('number');*
 > - *var btnIncrease = document.getElementById('increase');*
 ```javascript
    var number = 0;
    var elNumver = document.getElementById('number');
    var btnIncrease = document.getElementById('increase');

    btnIncrease.onclick = function(){
        number ++;
        elNumver.innerText = number;
    }
 ```
 > - 프로젝트의 규모가 커지면 이러한 부분들이 힘들어질 것이다...   
 > - DOM관리 및 상태값, 업데이트 관리를 최소화    
 > - 기능 개발 & 유저 인터페이스에만 집중할 수 있도록 많은 프레임워크, 라이브러리들이 개발됨. ex) `Angular`, Ember, BackBone, `Vue`, `React`
 
 <hr>

 ### React ( simple intro... )
 1. `컴포넌트` 에 집중된 라이브러리이다.(프레임워크 XXX)
      - 컴포넌트 : 데이터를 넣으면 우리가 지정해둔 인터페이스를 조립해서 보여준다.
 2. **facebook**개발자들이 많들었다.
 3. **오직 뷰만 신경쓴다.** 나머지는 서드 파티 라이브러리들( `리덕스`, `리엑트 라우터` )을 이용한다. 





## Part3 : React's Virtual DOM
>  ___"우리는 지속해서 데이 터가 변화하는 대규모 애플리케이션을 구축하기 위해 리액트를 만들었다"___ ( React 설명문 )
 
> React
>> - 단방향
>> - Virtual DOM : 변화가 발생하면 가상의 돔(javascript)에 일단 렌더링하고 그 이후에 실제 돔과 비교후에 변화가 필요한 곳에만 업데이트를 해준다.

> Virtual DOM의 역할 : 데이터 변화가 생기면 변화된 부분만 바꿔서 찾아준다...
>> 1. Model을 통해 Real DOM에 그려줌
>> 2. Model에 ***변화*** 가 생기면 Virtual DOM에 그려줌
>> 3. Real DOM과 Virtual DOM의 차이를 비교해 본다.
>> 4. 바뀐부분을 찾아서 (Real DOM의)해당 부분에 업데이트한다.

[참고 영상] : https://www.youtube.com/watch?v=muc2ZF0QIO4&feature=youtu.be
## Part4 : Special of React... 

 - Virtual DOM은 기존에도 있었으나(Vue, Marko ... 등등) **성공적으로 사용된 것은 React** 이다.
 - React의 생태계가 존나 크다, 관련 개발자들도 열정이 오진다!
 - 사용한는 곳이 개많다(FACEBOOK, twitch, yahoo, BBC, Cloudfalre 등등).
 - 나의 LBS와 같다. 끊기 어렵다..라고한다
