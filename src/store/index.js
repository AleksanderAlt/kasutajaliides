import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        info: {
            prev: null,
            next: null,
            pages: 0
        },
        characters: [],
        current: 1,
    },
    mutations: {
        SET_INFO(state, info) {
            state.info = info;
        },
        APPEND_CHARACTERS(state, characters) {
            state.characters.push(...characters);
        },
        SET_CURRENT(state, current) {
            state.current = current;
        }
    },
    actions: {
        getData(context, data){
            axios.get(data.url).then(response => {
                context.commit('SET_INFO', response.data.info);
                context.commit('APPEND_CHARACTERS', response.data.results);
            });
            context.commit('SET_CURRENT', data.current);
        }
    }
});