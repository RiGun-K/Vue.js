// 작성자 메시지를 작성하여 저장 버튼누르자
// 하단에 작성자 메시지를 리스트로 출력
// 최신순으로
// 지역변수

let app = new Vue({
    el:'#app',
    data: {
        name:null,
        comment:null,
        // 데이터를 null 로 했다가 이후 초기화 가능 (일단 선언)
        messages:[]
    },
    methods:{
        // 버튼 클릭시 메소드 필요
        save() {
            const message={
                name:this.name,
                comment:this.comment
            };
            // 하나의 상수 이므로 위에서 이 데이터를 저장
        
            this.messages.unshift(message);
            this.name=null
            this.comment=null   // 입력 다 끝나면 form에 비워짐
            // unshift 하면 가장 최신을 최상단에 올라오도록 
        
        }
        
    }
});


// https://kr.vuejs.org/v2/guide/events.html Vue 사이트
