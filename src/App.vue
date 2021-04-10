<template>
    <div class="container">
        <section class="section">
            <div class="columns is-multiline mt-3">
                <div class="column is-one-fifth" v-for="character in $store.state.characters" :key="character.id">
                    <card :character="character"></card>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Card from './components/Card';
    import Pagination from './components/Pagination';
    export default {
        name: "App",
        components: {Pagination, Card},
        created(){
            document.addEventListener('scroll', this.scroll);
            this.getData('https://rickandmortyapi.com/api/character', 1);
        },
        data(){
            return {
            }
        },
        methods: {
            prev(){
                if(this.$store.state.info.prev) {
                    this.getData(this.$store.state.info.prev, this.$store.state.current - 1);
                }
            },
            next(){
                if(this.$store.state.info.next) {
                    this.getData(this.$store.state.info.next, this.$store.state.current + 1);
                }
            },
            goTo(page){
                this.getData('https://rickandmortyapi.com/api/character/?page=' + page, page);
            },
            getData(url, current){
                this.$store.dispatch('getData', {url: url, current: current});
            },
            scroll(event){
                console.log({current: window.pageYOffset + window.innerHeight, outerH:document.body.clientHeight});
                if(window.pageYOffset + window.innerHeight >= document.body.clientHeight){
                    this.next();
                }
            }
        }
    }
</script>

<style scoped>

</style>