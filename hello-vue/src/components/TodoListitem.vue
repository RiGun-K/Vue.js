<!-- 리스트 각 항목을 출력할 템플릿 임 -->
<template>
    <li>
        {{ todo.text }}
        <button @click="$emit('remove', todo.id)">삭제</button>
        <!-- 버튼 클릭시 remove 이벤트 발생 -->
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>