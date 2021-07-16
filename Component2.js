let app = new Vue({
    el:'#app',
    components: {
        'local-hello': {
            template:'<p>This is 장 성 규<p>'
        }
    }
});

// 지역함수 임 = component<s> 
// Vue 안에서만 사용