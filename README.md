# SGBInside-Server
## ✨ 생기부 인사이드는?
<img src="https://github.com/Team-KeepGoEat/KeepGoEat-Server/assets/82032418/b10ebb02-85ab-4172-971f-1eec92d84e61">

생기부인사이드는 `고등학생을 위한 생활기록부 기록 종합 가이드 서비스`입니다.<br>

아래의 4개의 `생활기록부 기록 주요 항목`들을 `기록, 관리`합니다. 
> 1. 창의적 체험활동
> 2. 세부능력 및 특기사항
> 3. 독서활동
> 4. 수상경력
<br>
<details>
<summary style="font-size: 25px;">타겟 유저</summary>
기록과 성찰의 기회가 부족하고, 학생부 종합전형을 스스로 준비하는 것의 어려움을 겪고 있는 <strong>고등학생</strong>을 주요 타겟 유저로 설정합니다.<br>
이외에, 고교 활동 경험을 공유하고 멘토링을 제공하고자 하는 <strong>대학생 멘토</strong> 또한 타겟 유저로 설정합니다.
</details>
<br>
<details>
<summary style="font-size: 25px;">서비스 목표</summary>
1. <strong>학생이 주체가 되는 생활기록부 관리</strong><br>
부모님, 선생님, 또는 사설 업체의 도움을 받기에 앞서 스스로 생활기록부를 관리할 수 있도록 합니다.
<br><br>
2. <strong>주기적인 활동 기록을 통한 전략적 입시 대비</strong><br>
담임 선생님께 생활기록부 문구를 제출하거나, 자기소개서를 작성할 시에 미리 기록된 데이터를 참고할 수 있도록 합니다.
</details>
<br>

## 🎁 주요 기능
### ✏ (고등학생) 생활기록부 4개 항목 활동 기록하기 
생활기록부 4개 항목별 활동을 폼 형태 UI로 기록합니다.<br>
기재요령 확인하기 버튼을 클릭해 생활기록부 기재 요령을 함께 확인할 수 있습니다.<br>
<details>
    <summary>세부내용 조회</summary>
    <br>
    <strong>창의적 체험활동 기록하기</strong><br>
    <img src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/9ed86a68-48ef-4e3a-a0f7-b8afb5c5e531">
    <br><br>
    <strong>교과별 세부능력 및 특기사항 기록하기</strong><br>
    <img width="60%" src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/71e05c9c-99b3-44a7-8d5c-57119e71adc6">
    <br><br>
    <strong>수상경력 기록하기</strong><br>
    <img width="60%" src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/ea47eb91-884e-446c-9855-8aa169b28795">
    <br><br>
    <strong>독서활동 기록하기</strong><br>
    <img width="60%" src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/8ca5e7c6-1888-46d4-ada8-d94f53f40947">
</details>
<br>

### 📚 (고등학생) 마이페이지에서 기록한 활동 관리하기
토글을 통해 `학기별`로, 버튼을 통해 `생활기록부 항목별`로 분류하여 기록한 활동을 조회합니다.<br>
개별 활동을 클릭해 작성한 `세부 내용을 조회/수정/삭제`할 수 있으며, `텍스트 내용을 클립보드에 복사`할 수 있습니다.
<details>
    <summary>세부 내용 조회</summary><br>
    <img src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/3d446eed-b38d-4551-94a0-d40b8e33c6cb">
</details>
<br>

### 🎅 (고등학생) 생활기록부 4개 항목 기록을 보충하는 추천 시스템
고등학생 유저는 생활기록부 4개 항목별로 필요할 경우 추가적인 정보를 제공받을 수 있습니다.
<details>
    <summary>세부 내용 조회</summary>

1. <strong>창의적 체험활동</strong>
   - `진학 희망 학과별 진로활동 추천` ([커리어넷 학과정보 API](https://www.career.go.kr/cnet/front/openapi/openApiMajorCenter.do) 활용)
   - `대학생 멘토의 창의적 체험활동 기록 조회`
   <img src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/c0e936db-92ad-4d3c-b457-210763d11ccf">

2. <strong>세부능력 및 특기사항</strong>
    - `진학 희망 학과별 집중 관리 교과목 추천` ([커리어넷 학과정보 API](https://www.career.go.kr/cnet/front/openapi/openApiMajorCenter.do) 활용)

4. <strong>수상경력</strong>
   - `대학생 멘토의 수상경력 기록 조회`

5. <strong>독서활동</strong>
   - `진학 희망 학과별 추천 도서 목록 조회` (전라북도 교육청 제공 전공별 권장도서 목록 활용)
</details>
<br>

### ✏ (대학생 멘토) 생활기록부 창의적 체험활동, 수상경력 기록하기
대학생 멘토 유저는 고등학교 재학 당시 창의적 체험활동, 수상경력을 기록하여 생기부 인사이드의 데이터베이스에 기여합니다.<br>
멘토 유저를 고려한 별도의 비즈니스 모델을 반영하지는 않았으나, 포인트 및 리워드 지급 제도의 병행을 염두에 두고 서비스를 기획하였습니다.
<details>
    <summary>세부 내용 조회</summary><br>
    <strong>창의적 체험활동 기록하기</strong><br>
    <img width="60%" src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/15240149-941b-491f-a78a-ac420ddfe687">
    <br><br>
    <strong>수상경력 기록하기</strong><br>
    <img width="60%" src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/8c607c97-1006-4d34-9283-12d221cdc4c3"/>

</details>
<br>

### 📚 (대학생 멘토) 마이페이지에서 기록한 활동 관리하기
토글을 통해 `학기별`로, 버튼을 통해 `생활기록부 항목별`로 분류하여 기록한 활동을 조회합니다.<br>
개별 활동을 클릭해 작성한 `세부 내용을 조회/수정/삭제`할 수 있으며, `텍스트 내용을 클립보드에 복사`할 수 있습니다.
<details>
    <summary>세부 내용 조회</summary><br>
    <img src="https://github.com/Team-SGBInside/SGBInside-Server/assets/82032418/568e9723-591c-4afd-a437-8eb5912b1e4d">
</details>
<br>

## 📑 요구사항 명세서
명세서 내용이 길어 노션 참고를 부탁드리겠습니다. <br>
[요구사항 명세서 Link](https://brick-rainbow-789.notion.site/37517f5606534ca6aa8637abc890329f
)
<br>

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
<br>

## 🎨 Flow Chart
### 1. 고등학생 유저 플로우
<details>
  <summary>
    이미지 확인
  </summary>
  <img src="https://github.com/Team-KeepGoEat/KeepGoEat-Server/assets/82032418/02fe53d8-c265-413b-9dae-159a2072c26e">
</details>


### 2. 대학생 멘토 유저 플로우
<details>
  <summary>
    이미지 확인
  </summary>
  <img src="https://github.com/Team-KeepGoEat/KeepGoEat-Server/assets/82032418/9c864154-d34b-4137-811a-496435c92e1c">
</details>
<br>

## ⚙️ 시스템 설계도
<img src="https://github.com/Team-KeepGoEat/KeepGoEat-Server/assets/82032418/d5550af5-5adc-4091-bf17-f51f37d9c021">
<br>

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
<br>

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
<br>

## 🌳  Branch Strategy
> 브랜치는 dev branch, feature branch 총 2개의 브랜치를 사용합니다.
<br>

## ✏ Commit Message Convention
| Commit Type  | Desc                                                 |
|--------------|------------------------------------------------------|
| [FEAT]       | 새로운 기능 추가                                            |
| [FIX]        | 버그 수정                                                |
| [CHORE] | 패키지 매니저 수정 (Dockerfile, gradle, sh, yml) 및 기타 사소한 변경 |
| [HOTFIX]     | 급하게 치명적인 버그를 고쳐야 하는 경우                               |

