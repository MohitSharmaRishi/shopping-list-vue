import axios from "axios";
import dataService from "@/Services/Data";
import config from "@/Services/Settings";


export default {
  ExpenseList:[],
    async Test(){ 
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://localhost:44300/',
        headers: { 
          'Accept': 'application/json'
        }
        
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });




    },
        
      

      async AddExpese(Expense)
      {
        dataService.ListItems.push(Expense);
        axios
        .post('https://api.coindesk.com/v1/bpi/currentprice.json', Expense)
        .then((response) => {console.log(response);})
      }
      
}