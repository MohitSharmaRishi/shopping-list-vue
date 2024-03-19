<template>
    <v-container >
        <h6  class="ma-1">Dashboard</h6>
    </v-container>
    
    <hr :color="dataService.color.grey.lighten2" />
    <v-container>
        <div  class="pa-4" >
            <v-row>
            <v-col class="text-center">
                
                <v-btn size="small" variant="text" :color="dataService.color.teal.base" prepend-icon="mdi-cart" stacked>Shoppings</v-btn>
            </v-col>
            <v-col  class="text-center">
                
                <v-btn  size="small" @click="$router.push('expenses')" variant="text" :color="dataService.color.teal.base" prepend-icon="mdi-currency-inr" stacked>Expenses</v-btn>
            </v-col>
            <v-col  class="text-center">
                <v-btn  size="small"   variant="text" :color="dataService.color.teal.base" prepend-icon="$vuetify" stacked>Button</v-btn>
            </v-col>
        </v-row>
        </div>
        
       
    </v-container>
    <hr :color="dataService.color.grey.lighten2" />

    <v-container >
        <h6  class="ma-1">User  </h6>
    </v-container>
    <hr :color="dataService.color.grey.lighten2" />
    
    <v-container>
        <div  class="pa-4" >
            <v-row>
            <v-col class="text-center">
                
                <v-btn size="small" :color="dataService.color.green.darken3" variant="text" prepend-icon="mdi-cart" stacked>Profile</v-btn>
            </v-col>
            <v-col  class="text-center">
                
                <v-btn  size="small" variant="text" :color="dataService.color.grey.lighten1" prepend-icon="mdi-currency-inr" stacked>Family</v-btn>
                
            </v-col>
            <v-col  class="text-center">
                <v-btn  size="small"   variant="text" :color="dataService.color.grey.lighten1" prepend-icon="$vuetify" stacked>Button</v-btn>
            </v-col>
        </v-row>
        </div>
       
    </v-container>
    
</template>
<script>
import dataService from "@/Services/Data";
//import ExpenseList from "@/components/Expenses/ExpenseList";
import { defineComponent } from "vue";
import ExpenseService  from "@/Services/ExpenseService";


export default defineComponent({
    name: 'DashBoardView',

    data:()=>({dataService:dataService}),
    components:{},
    methods:{
        change(){this.$router.push('expenses');}
    }
    ,async mounted(){
       await ExpenseService.Test();
    }
});
</script>
 