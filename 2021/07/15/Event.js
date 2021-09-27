Vue.component('add', {
    template:'<button @click="add">{{ count }}</button>',
    data() {
        return {count:0}
    },
    methods:{
        add(){
            this.count += 1
        }
    }
})

let app = new Vue({
    el:'#app',
    data:{
        totalCount:0
    }
});
// 누를때마다 add 함수실행 totalcount 출력되도록 , 
// add가 3개인데 자기자신이 클릭되면 count가 올라가도록 
// add를 사용해야 + 기능 
// 이벤트 처리 