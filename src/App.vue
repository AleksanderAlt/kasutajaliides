<template>
    <div class="container">
        <section class="section">
            <button class="button" @click="prev" :disabled="!info.prev">Prev</button>
            <button class="button is-pulled-right" @click="next" :disabled="!info.next">Next</button>
            <div>
                <button class="button" v-for="num in pageNumbers" :key="num">{{num}}</button>
            </div>
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
    export default {
        name: "App",
        components: {Card},
        created(){
            axios.get('https://rickandmortyapi.com/api/character').then(response => {
                this.info = response.data.info;
                this.characters = response.data.results;
            });
        },
        data(){
            return {
                info: {
                    prev: null,
                    next: null,
                    pages: 0
                },
                characters: []
            }
        },
        methods: {
            prev(){
                axios.get(this.info.prev).then(response => {
                    this.info = response.data.info;
                    this.characters = response.data.results;
                });
            },
            next(){
                axios.get(this.info.next).then(response => {
                    this.info = response.data.info;
                    this.characters = response.data.results;
                });
            }
        },
        computed: {
            pageNumbers(){
                // [null,null,null] [0,1,2]
                let pages = [...Array(this.info.pages+1).keys()];
                pages.shift();
                return pages;
            }
        }
    }
</script>

<style scoped>

</style>