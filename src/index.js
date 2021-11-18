import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StockManager from './StockManager';
import store from './store'
import { Provider} from 'react-redux'

/* 
	
	the main view is called StockManager: 
		it renders the main menu with action buttons to add new Stocks/sell/buy


	StockManager.js renders StockList.js: 
		a table that displays the data associated to each stock, 
		the stock might be manipulated from this table alternatively.

	Each entry in the Stock List is an element generated from Stock.js

	stockStack.js is used to handle all operations that manipulates the list of stocks and the stocks themselves.
	
	The stocks are store in system memory using the store.js file and the slice stockStack.js

*/

ReactDOM.render(
<Provider store={store}>
    <StockManager />
  </Provider>,
  document.getElementById('root')
);


