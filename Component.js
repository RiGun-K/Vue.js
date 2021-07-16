Vue.component('hello', {
    props:['name'],
    template:'<p>{{message}}</p>',
    data: function() {
        return { message: 'hello!, ' + this.name }
    }
});
/* 
   props 는 선택 (필수 X)
   template 사용시 <P>가 2개이상 올 수 없음. 
   그 경우 <div>로 묶어줘야함
   
   전역함수 임
*/

let app = new Vue({
    el:'#app'
});