<template>
  
  <v-container>
    <v-card class="pa-2 mt-0 mx-3" elevation="4">
      <v-card-title></v-card-title>

      <v-sheet class="mx-auto">
        <v-form fast-fail @submit.prevent>

          <v-text-field type="text" dense v-model="Item.ProductName" label="Enter Name of Product" variant="outlined"
            :error="v$.ProductName.$invalid"></v-text-field>

          <v-text-field type="number" v-model="Item.Price" label="Price in Rupee" variant="outlined"
            :error="v$.Price.$invalid"></v-text-field>
          <v-row fluid fill-height>

            <v-col class="d-flex">

              <v-text-field variant="outlined" type="number" v-model="Item.Quantity" label="Quantity"
                :error="v$.Quantity.$invalid"></v-text-field>
              <v-btn icon="mdi-minus" variant="plain" size="large" @click="Decrement()"></v-btn>
              <v-btn icon="mdi-plus" variant="plain" size="large" @click="Increment()"></v-btn>
            </v-col>


          </v-row>
          <v-select label="Select Group" v-model="Item.Group" :items="dataService.ExpenseGroups"
            variant="outlined"></v-select>

          <v-select label="Select Event" v-model="Item.Event" :items="dataService.MyEvents" variant="outlined" :key="Item"
            item-title="EventName" item-value="EventName">
          </v-select>

          <v-btn color="teal" type="submit" @click="submit()" block class="mt-2">Submit</v-btn>
        </v-form>
      </v-sheet>
    </v-card>
  </v-container>
</template>
<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, minValue } from '@vuelidate/validators'
import dataService from "@/Services/Data";
import expenseService from "@/Services/ExpenseService";


export default {
  name: "NewExpense",
  setup: () => {

    var Item = reactive({PID:0, ProductName: '', Price: 0, Quantity: 0, Group: 'Default', Event: 'Default', ExpenseDateTime: new Date() });
    var rules = {
      ProductName: { required },
      Price: { numeric, required, minValue: minValue(1) },
      Quantity: { numeric, required, minValue: minValue(1) },
      Group: { required },
      Event: { required },
      ExpenseDateTime: { required }
    };
    var v$ = useVuelidate(rules, Item);
    return { Item, v$ }
  },
  data: () => ({
    dataService: dataService,
    expenseService:expenseService,

  }),
  methods: {
    Increment() { this.Item.Quantity++; console.log(this.Item.Quantity); },
    Decrement() { if (this.Item.Quantity > 1) this.Item.Quantity--; },

    async submit() {


      await this.expenseService.Test();return;



      // if (! await this.v$.$validate()) { return; }
      // this.Item.PID=this.dataService.ListItems.length;
      // this.dataService.ListItems.push(this.Item);
      // console.log(this.Item);

      //   //this.v$.Name.errorMessage="hello hello";
      //   if(this.v$.ProductName.$error)
      //   console.log(await this.v$.ProductName.$errors[0].$message);


    }

  }

}
</script>