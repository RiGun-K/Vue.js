let app = new Vue({
    el:'#app',
    data: {
        user_id:'user123',
        user_grade:'Gold',
        user_age:'22'
    },
    computed: {
        // user_info:function() {
        // return this.user_id+'(' + this.user_grade + ')'
        
        age_message() {
            let str='Adult'
            if(this.user_age < 20) str='Not Adult'
            return str
        }
        // data에 해당하는 age의 값이 20 미만이면 'Not Adult' , 아니면 'Audlt' 출력
        
        
    }
    
});