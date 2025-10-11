## 인물관계 편집기

성경에 나오는 방대한 인물들과 그 관계를 정리할때, 아이폰보다 더 넓은 화면에서 쉽게 작업할수 있게 하기위해 인물관계 편집기를 파이썬과 pyQT6 라이브러리를 이용해 만들었습니다. AI가 많은 도움을 주었습니다. ;-)  
  
인물관계 편집기에서는 3 개의 필수 추가 데이터 파일을 사용해서 MyStudyBible 에서 사용하는 user_data/person_relationships.sqlite 파일을 편집하게 됩니다.  

#### 3 개의 필수 추가 데이터 파일들
- 성경 DB 파일: MyStudyBible -> bible -> {인물관계를 정리하는데 기본이 될 성경 파일}
- MDict 포맷의 사전 데이터 (앞서 소개한 [네이버카페](https://cafe.naver.com/thewordkor)에서 구할 수 있습니다.)
- 인물 DB 파일: MyStudyBible -> user_data -> person_relationships.sqlite

##### Tip: 아이클라우드 동기화를 켜고, 맥/윈도우에서 인물관계 편집기를 시작한 후에 '아이클라우드-> MyStudyBible -> user_data -> person_relationships.sqlite' 을 편집기에서 불러와서 작업하면 자동으로 아이폰과 동기화가 이루어져 이 편집기에서 작업한 내용을 아이폰/아이패드에서 볼 수 있게 됩니다.  


메인화면 스크린샷:
<img src="PersonRelationshipEditor_1_0_Images/main.png" width="800">


### 왼쪽 탭들
##### 인물 목록
- 현재 person_relationships.sqlite 파일에 저장되어 있는 모든 인물들이 리스트로 표시됩니다.
- 인물의 이름 위에서 마우스 우클릭을 하면 '성경에서 검색', '사전에서 검색'을 곧바로 실행할수 있습니다.
- **인물 목록에서 선택한 인물이** 이 편집기에서는 **항상 기준 인물** 역할을 합니다. 
<img src="PersonRelationshipEditor_1_0_Images/left-person-mouse-right-click.png" width="800">

##### 성경 검색
- 성경에서 입력한 단어로 검색을 합니다.
- AND 버튼을 누르면 OR 버튼으로 바뀌고 이를 통해, 모든 단어가 들어간 구절(AND)이나 한 단어라도 들어간 구절(OR)을 검색할수 있습니다.
- 검색 결과에서 성경의 '책 장:절' 표시위에서 더블클릭을 하면 성경탭이 자동으로 열리면서 해당 구절이 표시됩니다.
<img src="PersonRelationshipEditor_1_0_Images/left-bible-search.png" width="800">

##### 성경
- 메인 화면 아래에 표시된 성경의 내용이 표시됩니다.
- 성경의 장 전체가 표시됩니다.
- 원하는 장으로 가기위해 책이름과 장을 넣으면 해당 장으로 이동하실수 있습니다.
<img src="PersonRelationshipEditor_1_0_Images/left-bible.png" width="800">

##### 사전
- 메인 화면 아래에 표시된 사전의 내용이 표시됩니다.
- 현재 '에스라 성경 사전'이 인물관계 편집기에 기본 내장되어 있습니다.
- MDict 용 사전(확장자 .mdx)을 지원합니다.
<img src="PersonRelationshipEditor_1_0_Images/left-dict.png" width="800">

### 오른쪽 탭들

##### 인물 정보
##### 관계 관리
##### 등장하는 구절
##### 새 인물