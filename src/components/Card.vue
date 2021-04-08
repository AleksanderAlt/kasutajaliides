<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ character.name }}
            </p>
        </header>
        <div class="card-image">
    <figure class="image is-4by3">
      <img :src="character.image" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <ul>
          <li><b>Species:</b> {{ character.species }}</li>
          <li><b>Origin:</b> {{ character.origin.name }}</li>
          <li><b>Status:</b> {{ character.status }}</li>
          <li><b>Gender:</b> {{ character.gender }}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Card",
        props: ['character']
    }
</script>

<style scoped>

</style>