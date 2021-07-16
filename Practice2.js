// 전역함수로 만들어보자
// 필수옵션은 template

// template은 반드시 역따옴표 (`) 사용 , comments
Vue.component('comments', {
    template:`<div>
    <h2>게시글을 작성해봅시다.</h2>
    <input type="text" v-model="name" placeholder="작성자">
    <input type="text" v-model="comment" placeholder="내용">
    <button @click="save">저장</button><br>
    <ul>
        <li v-for="msg in messages">
            <p>{{ msg.name }} 님이 작성한 내용은 {{ msg.comment }} 입니다.</p>
        </li>
    </ul>
    </div>`,

data(){
    return {
        name:null,
        comment:null,
        messages:[]
    }
},
methods:{
    // 버튼 클릭시 메소드 필요
    save() {
        const message={
            name:this.name,
            comment:this.comment
        };
    
        this.messages.unshift(message);
        this.name=null
        this.comment=null  
       
    }
    
}


});

let app = new Vue({
    el:'#app',
});



