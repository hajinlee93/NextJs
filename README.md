# NextJs


npm init -y
(Npm not found 뜨면 node.js 다운로드 해주기)
(npm이란 Node Package Manager의 약자로 node.js에서 사용하는 모듈들을 패키지로 만들어 관리하고 배포하는 역할을 한다.)
(package.json은 패키지에 관한 정보와 의존 중인 버전에 대한 정보들을 담고 있다.)
(npm init은 package.json 파일을 생성하여 Node 패키지에 관한 정보와 의존 중인 버전에 관한 정보로 node.js에서 사용하는 모듈들을 패키지로 만들기 위해 입력하는 커맨드)

라이센스 바꿔주기 "license": "MIT" 로 바꿔주기

npm install react@latest next@latest react-dom@latest
(react 최신 버전 , next 최신 버전 , react-dom 최신버전 다운로드)
(React란, User Interface를 만들기 위한 자바스크립트 라이브러리 입니다.웹 또는 브라우저를 위한 라이브러리는 아닙니다.React는 컴포넌트와 props, state, context를 관리하며, 이들의 변경 사항을 파악하고 변경 사항 snap shot을 React-DOM에 전달합니다.)

(React-DOM은 브라우저의 DOM에서 React를 사용하기 위한 라이브러리입니다. React-DOM은 웹 인터페이스로 웹과 직접적인 연관이 있으며 실제 HTML 요소를 화면에 불러오는 역할을 합니다.
따라서, React-DOM은 React로 부터 받은 변경 사항 snap shot과 실제 브라우저 DOM을 비교하며 차이점을 확인 후, 실제 DOM을 조작합니다.
즉, 실질적인 브라우저 DOM의 조작은 React-DOM이 하게 되며 리액트 컴포넌트의 이전 state와 현재 state를 비교한 뒤, 차이점이 있을 때 업데이트됩니다.)

다운로드 이후 package.json내부  
"dependencies": {
    "next": "^14.2.3",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
작성된걸 볼 수 있음

package.json -> script 내부 지우고 “dev” : “next dev”
-> dev 라는 명령어를 치면 nextjs를 실행할꺼다 라는 의미

page라는 특수한 파일을 만들어줘야 하는데 이는 app 폴더 안에 작성되야하고 “소문자”로 작성이 되야한다(프레임워크 규칙)

파일은 자바스크립트로 작성시 -> jsx , 타입스크립트로 작성원하면 tsx

export default function test (){
	return <h1>Hello Next</h1>
}
->리엑트 같은 것도 import 할 필요 없음 , 자동적으로 됨

(export default 가 java로 치면 main 문법이랑 같아보임 걍 외우기)

Your page app/page.tsx did not have a root layout. We created app/layout.tsx for you. 
-> 터미널에서 루트가 없어서 대신 만들어 줬다는 옆과 같은 문구 나오고 파일 생성되어있는것 확인 가능


NextJs 는 프레임워크 - framework means it calls our code, we don’t call NextJs


리엑트에서는 라우터로 url 설정 해줘야 하는데 넥스트에서는 그게 필요가 없음 폴더생성을 통해 페이지를 늘리수 있음(폴더명이 하나의 페이지가 있음을 보여주는 프레임워크 룰을 가지고 있음)
Ex) / ——> <Home />
	/about us ——> <AboutUs />
	/movies/:id ——> <Movie />

폴더만 가지고 있을때 불러보면 404에러를 뱉어내는데 NextJs가 랜더링할 ui를 제공하지 않았기 때문이다 -> 빈폴더는 경로가 될 수 없다

Ui 를 작성하게 되면 꼭! Return 써주기! 안그러면 작동 못함

특수한 파일 명
1. page.tsx
2. layout.tsx
3. not-found.tsx


react만으로 어플리케이션을 생성하면 client side application이 됨
react는 사용자 브라우저인 client단에서 모든 rendering 작업을 수행해야된다
-> client 가 사용자 브라우저에 	UI를 구축해야된다는 의미
이런 client side application의 단점
1. 유저가 페이지에 도착한 시점에는 페이지가 비어있다 브라우저가 모든 자바스크립트 파일을 다운로드하고 실행한 후에야 화면이 보여질 수 있음. 브라우저의 자바스크립트 엔진에 의해 추가 된것. 새로고침을 하게 되면 빈화면이 순간적으로 보이는게 이런 구조이기 때문이다
	이런 구조에서는 사용자가 자바스크립트를 비활성화 했을 때 실행조차 시킬 수 없다
2. SEO 검색 엔진 최적화

nextJs 는 자동적으로 server side rendering 이 됨 -> 자바스크립트를 다운로드 하기 전 이미 브라우저 코드에 있는 것을 볼 수 있다.(자바스크립트가 로드 될 떄까지 기다릴 필요가 없다는 것을 의미)

모든 컴포넌트들과 페이지들은 먼저 백엔드에서 렌더링됨
그리고 그것들은 html로 변환된다.

NextJs에서는 모든것이 server side rendering 되고 pre render되어 유저에게 자바스크립트를 다운받기 전에 html을 먼저 보여준다 그 후 client components 만이 hydrate되고 interactive 하게 되는것

Client component vs. Server component


