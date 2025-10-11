성경에 나오는 방대한 인물들과 그 관계를 정리할때, 아이폰보다 더 넓은 화면에서 쉽게 작업할수 있게 하기위해 인물관계 편집기를 파이썬과 pyQT6 라이브러리를 이용해 만들었습니다. AI가 많은 도움을 주었습니다. ;-)  
  
인물관계 편집기에서는 3 개의 필수 추가 데이터 파일을 사용해서 MyStudyBible 에서 사용하는 user_data/person_relationships.sqlite 파일을 편집하게 됩니다.  

#### 3 개의 필수 추가 데이터 파일들
- 성경 DB 파일: MyStudyBible -> bible -> {인물관계를 정리하는데 기본이 될 성경 파일}
- MDict 포맷의 사전 데이터 (앞서 소개한 [네이버카페](https://cafe.naver.com/thewordkor)에서 구할 수 있습니다.)
- 인물 DB 파일: MyStudyBible -> user_data -> person_relationships.sqlite

##### Tip: 아이클라우드 동기화를 켜고, 맥/윈도우에서 인물관계 편집기를 시작한 후에 '아이클라우드-> MyStudyBible -> user_data -> person_relationships.sqlite' 을 편집기에서 불러와서 작업하면 자동으로 아이폰과 동기화가 이루어져 이 편집기에서 작업한 내용을 아이폰/아이패드에서 볼 수 있게 됩니다.  


메인화면 스크린샷:
<img src="PersonRelationshipEditor_1_0_Images/main.png" width="800">
