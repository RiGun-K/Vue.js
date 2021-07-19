let app = new Vue({
    el:'#app',
    data:{
        product:'Socks',
        image:'./images/socks_blue.jpg',
        // 폴더의 경우 경로 지정 주의하기 ./과 /은 다르다 
        inStock:true,
        details:['80% cotton','20% polyester','Gender-neutral']

    }
});