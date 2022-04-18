let app = new Vue({
    el:'#app',
    data: {
        user: {
            userid: 'user123',
            name: 'Jane Vue',
            email: 'user123@email.com'
        },
        counter: 0,
    },
    methods:{
        addCounter() {
            this.counter += 1
        }
    }
})