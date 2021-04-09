<template>
    <div>
        <button class="button" :class="{'is-primary': current == 1}" @click="$emit('navigate', 1)">1</button>
        <button class="button" v-if="current > 3" disabled>...</button>
        <button class="button" v-if="current > 2" @click="$emit('navigate', current - 1)">{{current - 1}}</button>
        <button class="button is-primary" v-if="current > 1 && current < count">{{current}}</button>
        <button class="button" v-if="current < count - 1" @click="$emit('navigate', current + 1)">{{current + 1}}</button>
        <button class="button" v-if="current < count - 2" disabled>...</button>
        <button class="button" :class="{'is-primary': current == 1}" @click="$emit('navigate', count)">{{count}}</button>
  </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: ['count', 'current']
    }
</script>

<style scoped>
    div {
        text-align: center;
    }
</style>