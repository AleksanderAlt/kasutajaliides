<template>
    <div class="container">
        <section class="section">
            <button class="button is-primary" @click="modalActive=true">Pic1</button>
        </section>
        <modal :active="modalActive" @close="modalActive=false" img="https://placekitten.com/1280/960">
        <p class="image is-4vy3">
            <img src="https://placekitten.com/1280/960" alt="">
        </p>
        </modal>
    </div>
</template>

<script>
    import Modal from "./components/Modal";
    export default {
        name: "App",
        components: {Modal},
        data(){
            return {
                modalActive: false
            }
        }
    }
</script>

<style scoped>
</style>