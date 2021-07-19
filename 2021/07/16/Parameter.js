// 함수의 파라미터도 html에 전달 가능하다
let app = new Vue({
    el:'#app',
    data: {
        message:'Select a user',
        users:[ {name:'User'}, {name:'Admin'} ]
    },
    methods:{
        sayHi(name) {
            this.message = 'Hi, ' + name
        }
    }
});