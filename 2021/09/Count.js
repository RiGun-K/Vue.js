let app = new Vue({
    el:'#app',
    data: {
        counter:0
    },
    method: {
        countUp() {
            this.counter += 1
        },
        countDown() {
            this.counter -= 1
        }
    }
});