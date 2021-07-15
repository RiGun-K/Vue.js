// 체크박스 여러개 사용시 ,  같은 모델의 값일 경우 = v-model="values" 가 여러개 일경우 배열로 묶는다 
// = data: { values:[] }

let app = new Vue({
    el:'#app',
    data: {
        value:false,
        values:[]
    }
});