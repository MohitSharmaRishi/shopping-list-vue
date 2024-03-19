<template>

    
    <v-bottom-sheet v-model="sheet">
    

    <v-list>
      
      <v-list-item class="mt-2">
         
        <v-row justify="space-around" >
           
          <v-date-picker justify="space-around"  color="success"  v-model="SelectedDate" ></v-date-picker>
        </v-row>
      </v-list-item>

      <v-list-item class="mt-2">
        
        <v-select class="mt-2" label="Select Group" v-model="GroupName" :items="dataService.ExpenseGroups"
            variant="outlined"></v-select>
      </v-list-item>

      <v-list-item>
        
        <v-select class="mt-2" label="Select Event" v-model="Event" :items="dataService.MyEvents" variant="outlined" 
            item-title="EventName" item-value="EventName">
          </v-select>
      </v-list-item>
      
      <v-list-item>
        <v-btn color="success" size="small" text="Save" block @click="Hide()" ></v-btn>
        
      </v-list-item>
    </v-list>
  </v-bottom-sheet>
</template>


<script>

import { defineComponent } from 'vue';
import dataService from "@/Services/Data";
// Components

export default defineComponent({
  name: 'ExpenseGroupEventDate',
  props:["ShowBottomList"],
  data:()=>({
    
    dataService:dataService,
    
    SelectedDate:new Date(),
    GroupName:'Default GRP',
    Event:'Default GRP',
    sheet:false, 
    Hide(){ this.sheet=false; this.$parent.ShowBottomList=false; }
  }),
  
  //mounted (){alert(this.ShowBottomList);}, 
  updated (){if(this.ShowBottomList) this.sheet=this.ShowBottomList; this.$parent.ShowBottomList=false;},
 // beforeUnmount(){console.log();}
  
});
</script>