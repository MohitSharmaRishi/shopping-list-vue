<template>
  
  <v-card class="pa-2 mt-5 mx-3" elevation="4">
<v-text-field type="text" v-model="inpName"></v-text-field>
<br>
<v-btn @click="addEl">Add</v-btn>
  

</v-card>
  
 <TransitionGroup tag="v-list">
    <v-list-item v-for="x in products" :key="x">
      {{ x }}
    </v-list-item>
  </TransitionGroup>
  
</template>

<script>
  export default {
    data() {
      return {
        products: ['Apple','Pizza','Rice'],
        inpName: ''
      }
    },
    methods: {
      addEl() {
        const el = this.inpName;
        this.products.push(el);
        this.inpName = null;
      }
    }
  }
</script>

<style>
  .v-enter-from {
    opacity: 0;
    rotate: 180deg;
  }
  .v-enter-to {
    opacity: 1;
    rotate: 0deg;
  }
  .v-enter-active {
    transition: all 0.7s;
  }
</style>  