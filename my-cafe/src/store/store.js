import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        userId:'user',
        reviews:[]
    },
    mutations:{
        updateUserId(state, newId){
            state.userId = newId;
        },
        updateReviews(state, reviews){
            state.reviews = reviews
        }
    },
    actions:{
        getReviews({commit}){
            axios.get('/api/comments')
            .then(response=>{
                commit('updateReivews',response.date)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
});