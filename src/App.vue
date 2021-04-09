<template>
    <div class="container">
        <section class="section">
            <div class="columns is-multiline mt-3">
                <div class="column is-one-fifth" v-for="character in characters" :key="character.id">
                    <card :character="character"></card>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    import Card from './components/Card';
    import Pagination from './components/Pagination';
    export default {
        name: "App",
        components: {Pagination, Card},
        created(){
            document.addEventListener('scroll', this.scroll);
            this.getData('https://rickandmortyapi.com/api/character');
        },
        data(){
            return {
                info: {
                    prev: null,
                    next: null,
                    pages: 0
                },
                characters: [],
                current: 1,
            }
        },
        methods: {
            prev(){
                if(this.info.prev) {
                    this.getData(this.info.prev);
                    this.current--;
                }
            },
            next(){
                if(this.info.next) {
                this.getData(this.info.next);
                this.current++;
                }
            },
            goTo(page){
                this.getData('https://rickandmortyapi.com/api/character/?page='+ page);
                this.current=page;
            },
            getData(url){
                axios.get(url).then(response => {
                    this.info = response.data.info;
                    this.characters.push(...response.data.results);
                });
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