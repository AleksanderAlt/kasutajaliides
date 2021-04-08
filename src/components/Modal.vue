<template>
    <div class="modal is-active" v-if="active">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: ['active']
    }
</script>

<style scoped>

</style>