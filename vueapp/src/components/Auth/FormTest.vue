<template>
    <v-container>
      <v-card  class="pa-3">
      <v-sheet class="mx-auto">
      <v-form fast-fail @submit.prevent v-on:keydown="v$.Name.$validate()">
        
        <v-text-field  
        v-model="formData.Name" label="Your Email" 
        :error="(v$.Name.$invalid )" 
        :error-messages="(v$.Name.$error)?v$.Name.$errors[0].$message:''"  ></v-text-field>

        <v-text-field v-model="formData.text" label="Your Test" 
        :error="(v$.text.$invalid )" 
        :error-messages="(v$.text.$error)?v$.text.$errors[0].$message:''"
        ></v-text-field>
        <!-- :error-messages="(v$.$invalid)?'Invalid Email':''" -->
  
        <v-btn type="submit" v-bind:disabled="false" block @click="submit()" class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
    </v-card>
    </v-container>
  </template>
  
  <script>
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required,email } from '@vuelidate/validators'
  
  // var rules={
  //   Name:{required,email}
  // };
//var v$=useVuelidate(rules,formData);
  export default {
    name: 'FormTest',
    
 
  setup () {
    const mustBeCool = (value) => value.includes('cool')

    const formData = reactive({Name:''});
    const rules = {Name:{required,email},text:{mustBeCool,$message:"xxxxx"}};
    const v$ = useVuelidate(rules, formData);

    return { formData, v$ };
  },
  
    data: () => ({
      error:false,
      errorMessage:"",
      
    }),
    methods: {
      
      async submit(){
        
        this.v$.$validate();

        //this.v$.Name.errorMessage="hello hello";
        if(this.v$.Name.$error)
        console.log(await this.v$.text.$errors);
        
        
      }
    },
  }
  </script>
  