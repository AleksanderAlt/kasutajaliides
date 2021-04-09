<template>
    <div class="container">
        <section class="section">
            <button class="button" @click="prev" :disabled="!info.prev">Prev</button>
            <button class="button is-pulled-right" @click="next" :disabled="!info.next">Next</button>
            <pagination :count="info.pages" :current="current" @naviagate="goTo"></pagination>
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
                this.getData(this.info.prev);
                this.current--;
            },
            next(){
                this.getData(this.info.next);
                this.current++;
            },
            goTo(page){
                this.getData('https://rickandmortyapi.com/api/character/?page='+ page);
                this.current=page;
            },
            getData(url){
                axios.get(url).then(response => {
                    this.info = response.data.info;
                    this.characters = response.data.results;
                });
            }
        }
    }
</script>

<style scoped>

</style>