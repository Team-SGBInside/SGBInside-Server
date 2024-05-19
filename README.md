# SGBInside-Server
## ✨ 생기부 인사이드는?
<img src="https://github.com/Team-KeepGoEat/KeepGoEat-Server/assets/82032418/b10ebb02-85ab-4172-971f-1eec92d84e61"><br>
생기부인사이드는 고등학생을 위한 생활기록부 기록 서비스입니다.<br>

아래의 4개 항목으로 구성된 생활기록부 기록 주요 항목들을 기록, 관리합니다. 
1. 창의적 체험활동
2. 세부능력 및 특기사항
3. 독서활동
4. 수상경력

필요할 경우 4개 항목에 대해 관련 정보를 추가적으로 조회하여 생활기록부 작성에 도움을 얻을 수 있습니다.
1. 창의적 체험활동 : 진학 희망 학과별 진로활동 추천([커리어넷 학과정보 API](https://www.career.go.kr/cnet/front/openapi/openApiMajorCenter.do) 활용) 대학생 멘토가 제공하는 창의적 체험활동 기록 조회
2. 세부능력 및 특기사항 : 진학 희망 학과별 집중관리 과목 추천  ([커리어넷 학과정보 API](https://www.career.go.kr/cnet/front/openapi/openApiMajorCenter.do) 활용)
3. 독서활동 : 진학 희망 학과별 추천도서 조회 (전라북도 교육청 제공 전공별 추천도서 목록 활용)
4. 수상경력 : 대학생 멘토가 제공하는 수상경력 기록 조회


### 타겟 유저
기록과 성찰의 기회가 부족하고, 학생부 종합전형을 스스로 준비하는 것의 어려움을 겪고 있는 **고등학생**을 주요 타겟 유저로 설정합니다.<br>
이외에, 고교 활동 경험을 공유하고 멘토링을 제공하고자 하는 **대학생 멘토** 또한 타겟 유저로 설정합니다.

### 목표
1. **학생이 주체가 되는 생활기록부 관리**<br>
부모님, 선생님, 또는 사설 업체의 도움을 받기에 앞서 스스로 생활기록부를 관리할 수 있도록 합니다.
<br><br>
2. **주기적인 활동 기록을 통한 전략적 입시 대비**<br>
담임 선생님께 생활기록부 문구를 제출하거나, 자기소개서를 작성할 시에 미리 기록된 데이터를 참고할 수 있도록 합니다.

## 🎁 주요 기능
### (고등학생) 생활기록부 4개 항목 활동 기록하기 
### (고등학생) 마이페이지에서 기록한 활동 관리하기
### (고등학생) 생활기록부 4개 항목 기록을 보충하는 추천 시스템
### (대학생 멘토) 생활기록부 창의적 체험활동, 수상경력 기록하기
### (대학생 멘토) 마이페이지에서 기록한 활동 관리하기

## 📑 요구사항 명세서
명세서 내용이 길어 노션 참고를 부탁드리겠습니다. <br>
[요구사항 명세서 Link](https://brick-rainbow-789.notion.site/37517f5606534ca6aa8637abc890329f
)

## 📜 API 명세서
API별 세부 명세서는 노션 링크를 참고 부탁드립니다.<br>
https://brick-rainbow-789.notion.site/API-24561ec6be1b4147b93b1f678919fd3b?pvs=74
### 회원 API
| 기능         | HTTP method | url                   |
|------------|-------------|-----------------------|
| 회원가입       | POST        | `/auth`               |
| 로그인        | POST        | `/auth/signin`        |

### 생활기록부 항목별 기록 API
| 기능                        | HTTP method | url                   |
|---------------------------|-------------|-----------------------|
| 고등학생 및 대학생 멘토 창의적 체험활동 기록 | POST        | `/activity/creative`              |
| 고등학생 세부능력 및 특기시항 기록       | POST        | `/activity/subject`       |
| 고등학생 세부능력 및 특기시항 기록       | POST        | `/activity/subject`       |
| 고등학생 및 대학생 멘토 수상경력 기록     | POST        | `/activity/prize`       |
| 고등학생 독서활동 기록       | POST        | `/activity/book`        |

### 생활기록부 항목별 추천 정보 조회 API
| 기능                           | HTTP method | url                   |
|------------------------------|------------|-----------------------|
| 고등학생 대상 추천 창의적 체험활동 전체 조회    | POST       | `/recommend/creative?sort=`            |
| 고등학생 대상 추천 창의적 체험활동 개별 조회    | GET        | `/recommend/creative/:activityId`     |
| 고등학생 대상 대회 준비 관련 팁 전체 조회     | POST       | `/recommend/prize`       |
| 고등학생 대상 대회 준비 관련 팁 개별 조회     | GET       | `/recommend/prize/:activityId`       |
| 고등학생 대상 진학 희망 학과별 권장도서 전체 조회 | POST       | `/recommend/book`        |

### 마이페이지 API
| 기능                         | HTTP method | url         |
|----------------------------|-------------|-------------|
| 마이페이지 계정정보 및 전체 활동 조회      | POST        | `/mypage?sort=value&semester=value`  |
| 마이페이지 창의적 체험활동 기록 개별 조회    | GET         | `/mypage/creative/:activityId`  |
| 마이페이지 세부능력 및 특기사항 기록 개별 조회 | GET         | `/mypage/subject/:activityId`  |
| 마이페이지 독서활동 기록 개별 조회        | GET         | `/mypage/book/:activityId`  |
| 마이페이지 수상경력 기록 개별 조회        | GET         | `/mypage/prize/:activityId`  |
| 마이페이지 창의적 체험활동 기록 개별 수정    | PUT         | `/mypage/creative/:activityId`  |
| 마이페이지 세부능력 및 특기사항 기록 개별 수정 | PUT         | `/mypage/subject/:activityId`  |
| 마이페이지 독서활동 기록 개별 수정        | PUT         | `/mypage/book/:activityId`  |
| 마이페이지 수상경력 기록 개별 수정        | PUT         | `/mypage/prize/:activityId`  |
| 마이페이지 창의적 체험활동 기록 개별 삭제    | DELETE      | `/mypage/creative/:activityId`  |
| 마이페이지 세부능력 및 특기사항 기록 개별 삭제 | DELETE      | `/mypage/subject/:activityId`  |
| 마이페이지 독서활동 기록 개별 삭제        | DELETE      | `/mypage/book/:activityId`  |
| 마이페이지 수상경력 기록 개별 삭제        | DELETE      | `/mypage/prize/:activityId`  |


## 🎨 Flow Chart
### 1. 고등학생 유저 플로우
<img src="https://github.com/Team-KeepGoEat/KeepGoEat-Server/assets/82032418/02fe53d8-c265-413b-9dae-159a2072c26e">

### 2. 대학생 멘토 유저 플로우
<img src="https://github.com/Team-KeepGoEat/KeepGoEat-Server/assets/82032418/9c864154-d34b-4137-811a-496435c92e1c">

## ⚙️ 시스템 설계도
<img src="https://github.com/Team-KeepGoEat/KeepGoEat-Server/assets/82032418/d5550af5-5adc-4091-bf17-f51f37d9c021">

## 📦 Project Structure
<details>
  <summary>디렉토리 구조</summary>
  <pre>
│   app.ts
│   index.ts
│
├───books
│       recommendBooks.json
│
├───config
│       index.ts
│       s3Config.ts
│
├───constants
│       index.ts
│       response.ts
│       responseMessage.ts
│       statusCode.ts
│       tokenType.ts
│       type.d.ts
│
├───controller
│       activityController.ts
│       index.ts
│       mypageController.ts
│       recommendController.ts
│       userController.ts
│
├───interfaces
│   ├───activity
│   │       BookActivityCreateDTO.ts
│   │       CreativeActivityCreateDTO.ts
│   │       PrizeActivityCreateDTO.ts
│   │       SubjectDetailedActivityCreateDTO.ts
│   │
│   └───user
│           UserCreateDTO.ts
│           UserSignInDTO.ts
│
├───middlewares
│       auth.ts
│       index.ts
│       upload.ts
│
├───modules
│       jwtHandler.ts
│
├───router
│       activityRouter.ts
│       index.ts
│       mypageRouter.ts
│       recommendRouter.ts
│       userRouter.ts
│
└───service
        activityService.ts
        index.ts
        mypageService.ts
        recommendService.ts
        userService.ts

  </pre>
</details>

## 🛠 Tech Stack
Language & Framework<br>
<img alt="TypeScript" src ="https://img.shields.io/badge/Typescript-235A97.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
<img alt="Node.js" src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img alt="Express" src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Expressjs&logoColor=white">

Database<br>
<img alt="PostgreSQL" src ="https://img.shields.io/badge/postgresql-4479A1.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>
<img alt="prisma" src ="https://img.shields.io/badge/prisma-1A3173.svg?&style=for-the-badge&logo=prisma&logoColor=white"/>
<img alt="DataGrip" src ="https://img.shields.io/badge/datagrip-5FD54F.svg?&style=for-the-badge&logo=datagrip&logoColor=white"/>

배포 환경<br>
<img alt="Amazon EC2" src ="https://img.shields.io/badge/Amazon EC2-FF9900.svg?&style=for-the-badge&logo=amazonec2&logoColor=white"/>
<img alt="Amazon RDS" src ="https://img.shields.io/badge/Amazon RDS-527FFF.svg?&style=for-the-badge&logo=Amazon RDS&logoColor=white"/>
<img alt="PM2" src="https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=PM2&logoColor=white">
<img alt="Nodemon" src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white">

ETC<br>
<img alt="Mocha" src="https://img.shields.io/badge/mocha-8D6748.svg?style=for-the-badge&logo=Mocha&logoColor=white"> 
<img alt="JsonWebTokens" src="https://img.shields.io/badge/JSONWebTokens-000000.svg?style=for-the-badge&logo=JSONWebTokens&logoColor=white">

IDE<br>
<img alt="VSCode" src ="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>

FE와의 협업 툴<br>
<img alt="Github" src ="https://img.shields.io/badge/github-181717.svg?&style=for-the-badge&logo=github&logoColor=white"/>
<img alt="Git" src ="https://img.shields.io/badge/git-F05032.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img alt="Notion" src ="https://img.shields.io/badge/Notion-000000.svg?&style=for-the-badge&logo=Notion&logoColor=white"/>
<img alt="Figma" src ="https://img.shields.io/badge/figma-C382DF.svg?&style=for-the-badge&logo=figma&logoColor=white"/>

## 🌳  Branch Strategy
> 브랜치는 dev branch, feature branch 총 2개의 브랜치를 사용합니다.

## ✏ Commit Message Convention
| Commit Type  | Desc                                                 |
|--------------|------------------------------------------------------|
| [FEAT]       | 새로운 기능 추가                                            |
| [FIX]        | 버그 수정                                                |
| [CHORE] | 패키지 매니저 수정 (Dockerfile, gradle, sh, yml) 및 기타 사소한 변경 |
| [HOTFIX]     | 급하게 치명적인 버그를 고쳐야 하는 경우                               |

