<template>
<v-app-bar v-if="MultiSelect" color="teal-darken-4" >
        <template v-slot:image>
          <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)" ></v-img>
        </template>

        <v-btn @click="Back()" icon="mdi-arrow-left-bold"></v-btn>

        <v-app-bar-title>Items ({{ SelectedItems.length }})</v-app-bar-title>
        <v-spacer></v-spacer>

        
        <!-- <v-btn :icon="(MultiSelect)?'mdi-close':'mdi-check'" @click="ToggleMultiSelect()" ></v-btn> -->
        <v-btn icon="mdi-plus" @click="NavigateTo('')" ></v-btn>
        
      </v-app-bar>

      <v-container>
 <v-card class="mx-3" elevation="4" >
     
    <v-card-title><v-btn @click="ToggleMultiSelect()" size="small" color="teal" icon="mdi-plus"></v-btn></v-card-title>
    <v-list>
      <v-list-subheader>Products</v-list-subheader>

      <v-list-item :class="(SelectedItems.includes(i))?'selected':''" 
        v-for="(item, i) in dataService.ListItems"
        :key="i"
        :value="item"
        color="dark"
       @click="Select(i)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.ProductName"></v-list-item-title>
        <v-list-item-subtitle>{{ item.Price * item.Quantity }} /-</v-list-item-subtitle>
        <template v-slot:append>
          <span>{{ item.Quantity }}</span>
        </template>
      </v-list-item>
    </v-list>

    
  </v-card>

      </v-container>
  
  <v-bottom-navigation bg-color="teal" v-if="MultiSelect && SelectedItems.length>0">
      <v-btn @click="ToggleMultiSelect()">
        <v-icon>mdi-close</v-icon>

        <span>Close</span>
      </v-btn>

      <v-btn @click="Purchased()">
        <v-icon>mdi-check-bold</v-icon>
        <span>Purchased</span>
      </v-btn>
    </v-bottom-navigation>


    <v-dialog v-model="dialog" persistent width="auto">
      
      <v-card>
        <v-card-title class="text-h5">
          Confirmation
        </v-card-title>
        <v-card-text>Are you Sure ?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn elevation="4" class="bg-success" @click="dialog = false">Done</v-btn>
          <v-btn elevation="4" class="bg-success" @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script>
import dataService from "@/Services/Data";

import { ref } from 'vue';

export default {
  name: 'ExpenseList',
  setup(){
    const dialog = ref(false);
    return {dialog};
  },
  data: () => ({
    SelectedItems:[],
    dataService:dataService,
    
    MultiSelect:false,
    Icon:'$close'
    }),
    methods:{
      Back()
      {
        this.$router.go(-1);
        this.dataService.ShowAppBar=true;
      },
        Select(Index){
            if(this.MultiSelect){
                if(!this.SelectedItems.includes(Index)){this.SelectedItems.push(Index);}
             else {this.SelectedItems.splice(this.SelectedItems.indexOf(Index),1);}
            }
            console.log(this.SelectedItems);
                
        },
        ToggleMultiSelect(){
            this.MultiSelect=!this.MultiSelect;
            this.dataService.ShowAppBar=!this.MultiSelect;
              // if(this.MultiSelect){
                
              // }
            
            this.SelectedItems=[];
        },
        Purchased(){
            console.log(this.dialog);
            this.dialog=true;
        }
    }

}
</script>
<style scoped>
.selected{background-color: #26A69A;color:white;}
</style>