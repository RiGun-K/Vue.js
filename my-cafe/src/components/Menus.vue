<template>
    <div id="app">
        <h1>Menus</h1>
        <li v-for="(product,i) in products" :key="i"><a v-bind:href="'menus/'+'1'">{{  product }}</a></li>
    </div>
</template>

<script>
export default {
    name:'Menus',
    data(){
        return{
            menus:[
                {id:1, name:"a", price:10000},
            ],
            products:['Tea','Coffee','Ice']
        }
    }
}
</script>