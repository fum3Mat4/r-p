/*
Slice used to manage following elements:

		StockNames (keep a list of existing objects)
		stockStack (list of stock objects which contain Stock Name, price and lastUpdate)
		errorIndicator (flag to portray error messages in case stocks are not found or when
						user tries to add existing stocks)		

		errorMessage (customizable string to alert user an error has occurred)
		
*/
import { createSlice } from '@reduxjs/toolkit'

const stockStack = createSlice({
    name: 'stockStack',
    initialState: {
        stockStack: [],
        stockNames: [],
        errorIndicator: false,
        errorMessage:"",
    },
    reducers: {
        addStock: (state, action) => {
        	if(state.stockNames.indexOf(action.payload)===-1&&action.payload.length>0){
        	  state.stockNames.push(action.payload);
        	  let newDate = new Date()
              state.stockStack.push({name:action.payload, price: 50, lastupdate: newDate });
              
            }
            else{
            	state.errorIndicator=true;
            	state.errorMessage="Stock name already exists";
            }
        },
        errorFlag: (state)=>{
        	state.errorIndicator=false;
        },
        buyStock: (state,action)=>{
        	//if stock name does not exist add it otherwise display error message
      		var stix=state.stockNames.indexOf(action.payload);
      		if(stix>=0){
	    		state.stockStack[stix].price*=1.01;
	    		state.stockStack[stix].price=state.stockStack[stix].price.toFixed(3);
	    		//update last transaction date
	    		state.stockStack[stix].lastupdate=new Date();
	    	}
	    	else{
	    		state.errorIndicator=true;
            	state.errorMessage="Unable to buy: stock name not found";
	    	}
    	},
    	sellStock: (state,action)=>{
      		var stix=state.stockNames.indexOf(action.payload);
      		if(stix>=0){
		    	state.stockStack[stix].price*=0.99;
		    	state.stockStack[stix].price=state.stockStack[stix].price.toFixed(3);
		    	//update last transaction date
		    	state.stockStack[stix].lastupdate=new Date();

		    }	    	
		    else{
		    	
	    		state.errorIndicator=true;
            	state.errorMessage="Unable to sell: stock name not found";
	    	}

    	},
    },
    
});


export const { addStock, errorFlag, buyStock, sellStock} = stockStack.actions

export default stockStack.reducer

