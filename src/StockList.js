/*
	Render list of stocks
	Allow user to change ordering criteria: highest price, latest update.
*/

import React,{ useState }  from "react";
import { useSelector } from "react-redux";
import Stock from "./Stock";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import './css/StockList.css'

function StockList() {
  const { stockStack } = useSelector(state => state.stockStack);
  
  const [stortType, setSortType]= useState(false);

	const copystockStack=[];
	var i=0;
	//copy stockList to sort list using distinct criteria.
	for(i=0;i<stockStack.length;i++){
		copystockStack.push(stockStack[i]);
	}
	
  return (
  		<div className="StockContainer">
    	<Table>
    		<thead>
    		<tr>
    		<th>Stock Name</th>
    		<th>Price</th>
    		<th>
    		
    		<Button variant={stortType?"success":"warning"} type="submit" onClick={()=>{setSortType(!stortType);}}>
    			Sort by {stortType?"Price":"Last Activity"}
  			</Button>
  			</th>
    		</tr>
    		
    		</thead>
			<tbody>
          	{
          	/*Sort by last update depending on stortType value (true/false)*/
          	stortType?
          	copystockStack.sort((a,b)=> a.lastupdate<b.lastupdate?1:-1).map(s => (
           	 <Stock price={s.price} stockname={s.name} lastupdate={s.lastupdate}/>
          		)):
          	copystockStack.sort((a,b)=> a.price<b.price?1:-1).map(s => (
           	 <Stock price={s.price} stockname={s.name} lastupdate={s.lastupdate}/>
          		))
          		
          		}
        	</tbody>
			</Table>
		</div>
  );
};

export default StockList;