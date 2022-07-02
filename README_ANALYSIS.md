## 프로젝트 개발 중에 이해한 것들
1. [Module Bundler(Build Tool) & Web Server] webpack
    1. 정의
        - webpack은 "FrontEnd Module Bundler(Build Tool)"이며, "Node.js Web Server"임
    1. 용도
        - 의존성 있는 모듈들을 하나의 JavaScript File로 번들링 (Network Cost가 줄어듦)
        - devServer를 통해 app을 띄울 수 있으며, proxy 설정을 추가하면 proxy 서버를 함께 띄워서 CORS 문제를 해결할 수 있음
            - proxy 설정은 package.json 또는 setupProxy.js에서 할 수 있음
        - babel을 함께 사용하면 ES5 이하 브라우저 지원이 가능
    1. 기능
        1. webpack-dev-server
            - Live Reload 설정 (HTML, JS, CSS File 변경 시 가능)
                ```javascript
                // webpack.config.js
                devServer : { watchFiles : ["./*"] } // Hot Reload 사용 가능
                devServer : { liveReload : true, hot : false } // Hot Reload 사용 불가
                ```
            - Hot Reload 설정 (JS, CSS File 변경 시만 가능)
                ```javascript
                // entry JS File
                if (module.hot) module.hot.accept();
                ```
1. [Router] react-router-dom
    - BrowserRouter -> Routes -> Route 순으로 감싸고, Route의 element 속성 내에 Link가 들어간 Component를 넣음
1. [Component] import, export
1. 반응형 웹 구현

* * *

## 프로젝트 시작, 빌드, 배포
1. 프로젝트 시작 (빌드 후, 빌드 산출물로 서버 기동)
    - 빌드 산출물을 메모리에 저장 (빌드 속도가 빠름)
        ```javascript
        // webpack-dev-server(a little Node.js Express server)를 실행하여 빌드 산출물을 배포
        // webpack-dev-server (version 4)
        // webpack serve (version 5)
        $ npm start
        ```
1. 프로젝트 빌드
    - 빌드 산출물을 파일에 저장
        ```javascript
        // webpack -w
        $ npm run build
        ```
1. 프로젝트 배포 (이미 만들어진 빌드 산출물로 서버 기동)
    - Node.js 또는 Nginx와 같은 Web Server에 배포
        ```javascript
        // Node.js Web Server를 실행하여 name이 "build"인 빌드 산출물을 배포
        $ npx serve -s build
        ```
1. scripts, config 디렉토리 노출
    - scripts : build.js, start.js 등
    - config : webpack.config.js 등
        ```javascript
        $ npm run eject
        ```