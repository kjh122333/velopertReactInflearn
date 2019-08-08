# Section3 : JSX
 - React 컴포넌트를 작성할때 쓰는 문법
 - JSX는 보기에는 HTML비슷하지만 다름
 
 
## 규칙
 > tag를 닫아야한다 ex) < >...</> or < /> ◀ ***Syntax Error***
 ```javascript
    <div>
     1.   <div>  ~ </div>
     2.   <div />
    </div>
 ```
 > 두개의 태그로 감싸야 함
 ```javascript
    <div>
        <h1>Hello React!</h1>
    </div>
 ```
> JSX 안에 Javascript 값 사용하기
```javascript
render() {
    const name = 'REACT';
    return (
      <div>
        <h1> Hello { name } !</h1>
      </div>
    );
  }
```
> JSX : 3항연산자
```javascript
  const name = 'REACT';
    return (
      <div>
        {
          1 + 1 === 2
          ? (<div> YES! </div>)
          : (<div> NO.. </div>)
        }
        {
          name === 'REACT' 
          ? <div> YES! </div>
          : <div> NO! </div>
        }
      </div>
     );
```
> JSX : if문
```javascript
  const value = 1;
    return (
      <div>
        {
            (function() {
                if (value === 1) return <div>I'm 1</div>
                if (value === 2) return <div>I'm 2</div>
                if (value === 3) return <div>I'm 3</div> 
            return <div>No</div>
            })()
        }
      </div>
     );
```
> JSX : 화살표(=>)함수
 - `this`, `arguments`, `super` 같은 개념이 없다
 - ES6문법이며, react에서 자주 사용됨
```javascript
            (() => {
                if (value === 1) return <div>I'm 1</div>
                if (value === 2) return <div>I'm 2</div>
                if (value === 3) return <div>I'm 3</div> 
            return <div>No</div>
            })()
```
## var, let, const
```javascript
    function foo(){
        var a = 'hello';
        if (true) { 
            var a = 'bye';
            console.log(a); //bye
        }
        console.log(a); //bye
    }
```
 > `var` 의 스코프는 함수 단위이다. foo(){  var의 범위 }

```javascript
    function foo(){
        let a = 'hello';
        if (true) { 
            let a = 'bye';
            console.log(a); //bye
        }
        console.log(a); //hello
    }
```
 > `let`은 블록 단위

 > 정리
 > - `var`는 더이상 안씀
 > - `const`는 한번 선언 후 고정 값
 > - 'let`은 유동적  

##
##
##
##
##
##
