<template>
  <v-container>
    <v-card  class="pa-3">
    <v-sheet class="mx-auto">
      <v-row class="mb-3"><v-spacer />
         <v-col align-self="center" cols="auto">
        <v-img class="rounded-circle " 
      width="110"
      :aspect-ratio="1/1"
      cover  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
       ></v-img></v-col>
       <v-spacer />
      </v-row>
     
      
      <v-form fast-fail @submit.prevent>
      
      <v-text-field type="text" v-model="formData.UserName" label="Your Email / Mobile Number"
      :error="v$.UserName.$invalid" :error-messages="(v$.UserName.$error)?v$.UserName.$errors[0].$message:''"
      ></v-text-field>

      <v-text-field type="password" v-model="formData.PWD" label="Last name"></v-text-field>

      <v-btn v-bind:disabled="firstNameRules" type="submit" @click="submit()" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
  </v-card>
  </v-container>
</template>

<script>
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required } from '@vuelidate/validators'

export default {
  name: 'LogIn',
setup () {
    
    const formData = reactive({UserName:'',PWD:''});
    const rules = {
      UserName:{required,},
      PWD:{required}
    
    };
    const v$ = useVuelidate(rules, formData);

    return { formData, v$ };
  },
  data: () => ({
    
    
    EmailRules: [
      value => {
        if (/^[6789]\d{9}$/.test(value)) return true
        
        return 'Invalid Email Entered.'
      },
    ],
    
    PasswordRules: [
      value => {
        if (/^[\w@.#!&*{}[\]()-]{1,30}$/.test(value)) return true
        
        return 'Last name can not contain digits.'
      },
    ],
  }),
  methods: {
      
      async submit(){
        
        this.v$.$validate();

        //this.v$.Name.errorMessage="hello hello";
        if(this.v$.UserName.$error)
        console.log(await this.v$.UserName.$errors);
        
        
      }
    }
}
</script>
