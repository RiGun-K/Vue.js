// form 에서 v-model 이라는 키워드를 사용
// input을 사용해서 comment를 참고 하겠다 (양방향)
// comment에 input하면 js에 있는 data에 저장되어서 <p>태그에 있는 comment에 다시 input된 값이 출력됨.

let app = new Vue({
    el:'#app',
    data: {
        comment:''
    }
});