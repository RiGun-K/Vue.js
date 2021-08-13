let app = new Vue({
    el:'#app',
    data: {
        message:'Select a user',
        users:[ {name:'User'}, {name:'Age'} ]
    },
    methods:{
        sayHi(name) {
            this.message = 'Hi, ' + name
        }
    }
});