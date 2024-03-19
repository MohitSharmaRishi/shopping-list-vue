<template>
  
  <component :is="ShowComponent"/>
  <v-btn @click="ShowComponent='SignUp'">Change</v-btn>
</template>

<script>
import LogIn from '@/components/Auth/LogIn.vue';
import SignUp from '@/components/Auth/SignUp.vue';
import { defineComponent } from 'vue';

// Components

export default defineComponent({
  name: 'HomeView',
  data:()=>({

    ShowComponent:'LogIn',

  }),
  components: {
    LogIn,SignUp,
  },
});
</script>
