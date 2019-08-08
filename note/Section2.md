# Section2 : Start React Project

## WebPack
 > ***code들을 의존하는 순서대로 잘 합쳐서 하나 또는 여러개의 파일로 결과물을 만들어내는 도구***
 - URL형식으로 파일을 불러 오는게 아님.
 - Javascript파일에서 `import`구문으로 필요한 확장자를 번들링 작업을 통해서 준비하는 방식. cf) 걸프

## Babel
 > Javascript 변환 도구
 - 형식이나 문법등에 있어서 이전 Js와 사용하고있는(최신) Js로 자동 변환 해줌
 - JSX 문법 사용에 필요함

## App.js
 > React 모듈이 설치되어있는데, 불러와서 사용하겠다.
```Javascript
import React, { Component } from 'react';

```
> 컴포넌트를 만드는 방법 : Class (기본 방법)
```Javascript
class App extends Component {  
```
 > `render()` 함수 내에서는 Js코드를 return해줘야하는 규약이 있다.
```Javascript 
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}
export default App;
```