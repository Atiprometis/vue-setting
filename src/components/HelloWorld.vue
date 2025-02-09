<template>
  <div>
    <h1>sadsad</h1>
    <div>
    <b-button variant="primary">Click Me</b-button>
    </div>
    
  </div>
</template>

<script setup>
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


</script>

<style lang="scss" scoped>

</style>