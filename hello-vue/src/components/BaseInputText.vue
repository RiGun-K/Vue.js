<template>
    <input type="text" class="input" :value="value" v-on="listeners">
</template>

<!-- v-on:click = 클릭 이벤트 발생 , 단 v-on="" 하면 모든 이벤트 -->

<script>
export default {
    props: {
        value: { type: String, default: '',}
    },
    computed: {
        listeners() {
            return {
                // 이벤트는 input 태그가 발생시킴 , 이 것을 캐치해서 내 부모에게 알린다.
                ...this.$listeners,
                // input 이벤트만 재정의
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #32485F;
}
</style>