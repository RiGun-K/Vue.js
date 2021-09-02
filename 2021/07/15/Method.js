let app = new Vue({
    el:'#app',
    data: {
        counter:0
    },

    methods:{
        addCounter(){
            this.counter += 1
        },
        subCounter(){
            this.counter -= 1
        }
        // methods를 사용시 반드시 this. 를 사용해야 한다.
        // 버튼 클릭시 -1 씩 감소하도록 설정하였다.
    }
});

// Node.js를 사용해서 UI된 모듈들을 사용 