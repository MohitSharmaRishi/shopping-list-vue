<template>
<h5 class="text-secondry" color="teal">New User?</h5>
<hr />
  <v-row>
    <v-col cols="auto">

    </v-col>
  </v-row>
  <v-card  class="pa-3">
    <v-sheet class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="firstNameRules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="lastNameRules"
      ></v-text-field>

      <v-btn v-bind:disabled="firstNameRules" type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
  </v-card>
  
</template>

<script>



export default {
  name: 'SignUp',

  data: () => ({
    firstName: '',
    firstNameRules: [
      value => {
        if (value?.length > 3) return true
        return 'First name must be at least 3 characters.'
      },
    ],
    lastName: '123',
    lastNameRules: [
      value => {
        if (/[^0-9]/.test(value)) return true
        
        return 'Last name can not contain digits.'
      },
    ],
  }),
}




</script>
