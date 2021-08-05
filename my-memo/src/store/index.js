import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        accessToken:null
    },
    getters:{
        isAuth(state){
            if(state.accessToken==null) return false;
            return true;
        }
    },
    mutations:{
        signin(state, payload){
            state.accessToken = payload.accessToken
            localStorage.setItem('accessToken',state.accessToken)
        },
        signout(state){
            state.accessToken=nulll
            localStorage.removeItem('accessToken')
            location.reload();
        },
        getAccessToken(state){
            state.accessToken = localStorage.getItem('accessToken')
        }
    },
    actions:{
        signin({commit}, payload){
            const data={ userid:payload.userid, password:payload.password}
            return axios.post('/api/auth/login', data)
            .then(response=>{
                if(response.status==200){// 로그인 성공
                    commit('signin', {accessToken:response.data.token})
                }
            })
            .catch(()=>{ // 에러 발생하면 로그아웃 처리
                commit('signout')
            })
        }
    }
    
});