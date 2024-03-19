import colors from 'vuetify/lib/util/colors'
export default {
    AppName:"ShoppingList",
    AppBarTitle:"ShoppingList",
    ShowAppBar:true,
    ShowBottomList:false,
    ListItems: [
        { PID:1,ProductName: 'Maggi', icon: 'mdi-clock',Price:100, Quantity:5,Status:'Pending'},
        { PID:2,ProductName: 'Cup Noodals', icon: 'mdi-account',Price:100, Quantity:5,Status:'Pending'},
        { PID:3,ProductName: 'Detol', icon: 'mdi-flag',Price:100, Quantity:5,Status:'Pending'},
        { PID:4,ProductName: 'Jam', icon: 'mdi-person',Price:100, Quantity:5,Status:'Pending'},
      ],
      color:colors,
      Products:[],
      ExpenseGroups:['Default', 'Decoration', 'Sanitary', 'Food', 'Cloths', 'Fast Food'],
      MyEvents:[
        {EID:1,EventName:'Default',StartDate:'',EndDate:''},
        {EID:2,EventName:'General',StartDate:'',EndDate:''},
        {EID:3,EventName:'Travel',StartDate:'',EndDate:''},
        {EID:4,EventName:'Functions',StartDate:'',EndDate:''},
        {EID:5,EventName:'Medical',StartDate:'',EndDate:''},
        
    ],
        
      async SaveData()
      {
var temp=[{EID:1,EventName:'Default',StartDate:'',EndDate:''},
{EID:2,EventName:'General',StartDate:'',EndDate:''},
{EID:3,EventName:'Travel',StartDate:'',EndDate:''},
{EID:4,EventName:'Functions',StartDate:'',EndDate:''},
{EID:5,EventName:'Medical',StartDate:'',EndDate:''}];
               
        // if(JSON.parse(localStorage.getItem('MyEvents'))[0]=='aa')
         await localStorage.setItem('MyEvents',JSON.stringify(temp));
        // else await localStorage.setItem('MyEvents',JSON.stringify(aaaa));
      }
      
}