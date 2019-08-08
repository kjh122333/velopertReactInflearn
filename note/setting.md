# StudyReact


# REACT 시작하기


## 통합 환경 개발 툴(IDE)
- ***visual studio code***
- web stom
## 시작하기
> 1. visual studio code install [download](https://code.visualstudio.com/)
 - 툴 익히기
    1. Extensions  
         - ESLint
         - Realtive Path
         - guid
         - reactjs code snippets
         - (tip)
            - no install about key tools!
    2. setting
         - new workspace( but, i'm git ) 
         - test01 : javascript& react study folder
            - sample01.js

    3. install node.js [download](https://nodejs.org/ko/download/)
         - check to installed
            ```console
            C:\hello\system32>node -v
            v10.16.0
            C:\hello\system32>npm -v
            6.9.0
            ```
         - 
    4. key comdo...
        - `ctrl + a` and `ctrl + k + f` : `전체 선택` and `코드 자동 정렬`
        - `ctrl + c`(블록 설정 없이) : 한줄 복사 
        - alt + shift + ↓ : 블록 복사 밑으로 쭉...
        - `ctrl + /` : 라인 주석
        - `ctrl + \` : 창 복사
        - `alt + 방향키` : 특정 라인을 위로 올리거나 내릴때
## 특징
- React는 ***`VIEW`에만 특화된 라이브러리*** 이다.
- **Flux Model Pattern**(옵저버패턴과 비슷)
    > **Flux Model Pattern**  
    > ![fluxpattern](https://github.com/kjh122333/JsAndReact/blob/master/images/fluxpattern.png?raw=true)
    > - 단방향 데이터 흐름.
    > - Facebook은 알람 버그의 원인을 해당 패턴으로 잡았다.
    >> - Dispatcher
    >> -  Store
    >> - View
    >> - Action
- ***`Conponent`*** (클래스와 비슷)
   - 최소한의 모듈을 지칭하는 말
   - *cf) 퍼즐 조각중에 하나, MS의 Window창 하나 Button 하나*
   - *ex) 버튼 두개를 묶어서 **하나의 패키지**로 만들어 이것을<br> 필요한곳 마다 사용한다.*

## `DOM` : WebPage에서 <tag>들을 `CRUD`시킬 수 있는 것들의 모임.
 - `DOM tree` : 기본적으로 Tree구조이며, 최상단 tag부터 타고 내려가며 조회함.

## Virtual DOM
- `Real DOM` 과 같은(복사?) `Virtual DOM` 을 만들어 갱신되어 차이가나는 부분을 비교함. 즉 요청없이 있는 요소들(Dom, Virtual Dom, 등등)로 갱신, 비교함.
- AJAX : 화면을 Refrash하지않고 실시간으로 데이터의 일부분만 **요청**하는 것.
> 무조건 가상 돔이 빠르다고는 할 수 없다.  
> ***REACT는 뷰를 보여주는 하나의 라이브러리이다.***

## 환경설정
1. Install `Node.js`
    ```command
    C:\Windows\system32>node -v
    v10.16.0
    C:\Windows\system32>npm -v
    6.9.0
    ```
2. Install `VsCode` 
3. npm install -g `create-react-app`
    ```command
    C:\Windows\system32>npm install -g create-react-app
   (주소,,,)index.js
    + create-react-app@3.0.1
    added 91 packages from 45 contributors in 19.007s
    ```

    ```command
    C:\Windows\system32>create-react-app -V
    3.0.1
    ```
4. 작업 폴더 만들기
5. 해당 폴더에서 터미널 열기
    ```command
    $ create-react-app test01
    ```
    ```command
    Installing packages. This might take a couple of minutes.
    Installing react, react-dom, and react-scripts...

    .
    .
    .

    We suggest that you begin by typing:

   cd test01
   npm start

    Happy hacking!
    ```
6. 해당 폴더에서...
    ```command
    cd test01

    npm start

    해당 폴더 경로
    > react-scripts start
    ```
    ```command
    Starting the development server...
    Compiled successfully!

    You can now view test01 in the browser.

    http://localhost:3000/
    
    Note that the development build is not optimized.
    To create a production build, use npm run build.
    ```
7. 이후에 진행하면서 크롬창 열림.