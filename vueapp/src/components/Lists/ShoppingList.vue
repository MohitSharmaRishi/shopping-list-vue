<template>
<h1>Shopping Lists {{ dataService.AppBarTitle }}</h1>
<v-btn @click="dataService.AppBarTitle='a as asdasd sd'"></v-btn>
</template>

<script>
    import { defineComponent } from "vue";
import dataService from "../../Services/Data";
    
export default defineComponent( {
  name: 'LoginComponent',

  data() {
   return { dataService:dataService}
  },
})
</script>