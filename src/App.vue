<template>
    <div class="container">
        <section class="section">
            <button class="button is-primary" @click="modalActive=true">Hello</button>
        </section>
        <modal :active="modalActive" @close="modalActive=false"></modal>



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