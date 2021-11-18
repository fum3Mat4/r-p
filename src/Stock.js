/*
	Each entry in the main table is rendered as tuple of 5 columns:
		StockName
		Price
		LastUpdate
		A button to buy stock units
		A button to sell stock units
		
	The Slice reducers are called to allow user to manipulate stocks from the table itself.
*/

import React from "react";
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'

import { buyStock, sellStock } from './stockStack'

function Stock(stockdata){

    const dispatch = useDispatch()

  return (
    <tr>
  	    <td>{stockdata.stockname}</td>
      	<td>{stockdata.price}</td>
      	<td>{stockdata.lastupdate.toISOString().slice(0, 19)}</td>
      	<td><Button variant="dark" type="submit" onClick={()=>{dispatch(buyStock(stockdata.stockname))}}>
    			Buy
  			</Button>
  		</td>
  		<td><Button variant="dark" type="submit" onClick={()=>{dispatch(sellStock(stockdata.stockname))}}>
    			Sell
  			</Button>
  		</td>
    </tr>
  );
};

export default Stock;
