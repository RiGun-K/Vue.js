export default{
    state:()=>({
        userId:'RiGun'
    }),
    mutations:{
        updateUserId(state, newId) {
            state.userId = newId;
        }
    }
}