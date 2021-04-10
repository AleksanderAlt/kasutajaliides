
import('./main.scss');
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import store from './store/index.js';

import App from './App.vue';

Vue.component('app', App);

let app = new Vue ({
    el: '#app',
    store: store
});