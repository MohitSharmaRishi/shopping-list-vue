<template>
  
  <v-container class="d-flex">
    <v-btn :ItemCount="ItemCount" variant="plain" @click="ShowComponent='ExpenseList'"><v-icon>mdi-list-status</v-icon> List</v-btn>
    <v-spacer />
    <v-btn variant="plain" @click="ShowComponent='NewExpense'"><v-icon>mdi-plus</v-icon> New Item</v-btn>
  </v-container>
  

  <hr>
  <component :is="ShowComponent"/>
  <v-btn color="success"
          text="Setting"
          @click="ShowBottomList=!ShowBottomList; console.log(ShowBottomList);"
        ></v-btn>
<ExpenseGroupEventDate :ShowBottomList="ShowBottomList"/>
      



</template>

<script>
import ExpenseList from '@/components/Expenses/ExpenseList.vue';
import NewExpense from '@/components/Expenses/NewExpense.vue';
import { defineComponent } from 'vue';
import dataService from "@/Services/Data";
import ExpenseGroupEventDate from '@/components/Expenses/ExpenseGroupEventDate.vue';
// Components

export default defineComponent({
  name: 'ExpansesView',
  data:()=>({
    dataService:dataService,
    ShowComponent:'ExpenseList',
    ItemCount:0,
    ShowBottomList: false,
    //ShowList:false,
    //SelectedDate:null,
     GroupName:'Default GRP',
    // Event:'Default GRP',
    
  }),
  components: {
    NewExpense,ExpenseList,ExpenseGroupEventDate
  },
});
</script>
