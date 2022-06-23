## 프로젝트 개발 중에 이해한 것들
1. webpack
    - webpack을 아주 간단하게 이해하자면 "node.js 웹서버"다!
    - webpack을 사용하는 react app은 기본적으로 webpack-dev-server(a little node.js Express server)상에 띄워진다.
    - webpack의 용도
        - 의존성 있는 모듈들을 하나의 JavaScript 파일로 번들링 (Network Cost가 줄어듦)
        - devServer를 통해 app을 띄울 수 있으며, proxy 설정을 추가하면 proxy 서버를 함께 띄워서 CORS 문제를 해결할 수 있음
        - babel을 함께 사용하면 ES5 이하 브라우저 지원이 가능하다.

## 빌드, 배포 작업
1. 프로젝트 시작
    - 명령어 : npm start
1. 프로젝트 빌드
    - 명령어 : npm run build
1. 프로젝트 배포
    - 명령어 : npx serve -s build (build : 빌드된 디렉토리명)
1. scripts, config 디렉토리 노출
    - 명령어 : npm run eject
    - config 디렉토리 : webpack.config.js 포함