<template>
    <div id="app">
        <h1>Welcome {{ $store.state.userId }}</h1>
        <input v-model="newId" type="text"><button @click="updateUserId">Save</button><br>
        <button @click="updateReviews">Update</button>
        <ul>
            <li v-for="r in $store.state.reviews" :key="r.id">
                <p>{{ r.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return { newId:''}
    },
    methods:{
        updateUserId(){
            this.$store.commit('updateUserId',this.newId)
        },
        updateReviews(){
            this.$store.dispatch('getReviews')
        }
    }
}
</script>