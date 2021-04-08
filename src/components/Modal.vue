<template>
    <div class="modal is-active" v-if="active">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <p class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
            </p>
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