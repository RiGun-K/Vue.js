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
    }
});
