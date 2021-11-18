/*
	main view to implement the following functionalities: 
		add stocks (error when adding existing stock)
		buy stocks units(error when stock not found)
		sell stocks units(error when stock not found)
*/
import React,{ useState }   from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/StockManager.css';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import StockList from './StockList'

import { useSelector, useDispatch } from 'react-redux'

//slice reducers to handle stock operations
import { addStock, errorFlag, buyStock, sellStock } from './stockStack'

function StockManager(){
	//hook to handle string the contains stock name
	const [newStock, setNewStock] = useState("");
	//hook to hide/show errors
	const { errorIndicator, errorMessage } = useSelector(state => state.stockStack);
	//call slice reducers
    const dispatch = useDispatch()

	//hide errors messages after 2 secs
	if(errorIndicator){
		setTimeout(()=>{dispatch(errorFlag())},2000);
	}
		return(
			<>
			<div>
			
			<Form.Label htmlFor="basic-url">Stock Manager</Form.Label>
  			<InputGroup className="mb-3" variant="dark">
    		<InputGroup.Text id="basic-addon3">
      			Add Stock
    		</InputGroup.Text>
    		<FormControl id="basic-url" aria-describedby="basic-addon3"  value={newStock} onChange={e => setNewStock(e.target.value)} />
     		<Button variant="dark" type="submit" onClick={()=>{dispatch(addStock(newStock))}}>
    			Add
  			</Button>
  			<Button variant="success" type="submit" onClick={()=>{dispatch(buyStock(newStock))}}>
    			Buy
  			</Button>
  			<Button variant="warning" type="submit" onClick={()=>{dispatch(sellStock(newStock))}}>
    			Sell
  			</Button>
  			</InputGroup>
			</div>
			
			<Alert className="alert-div" show={errorIndicator} key="alertKey" variant='warning'>
   			<p>{errorMessage}</p>
  			<hr/>
   			<Button variant="outline-warning" className="ok-button" type="submit" onClick={()=>{dispatch(errorFlag())}}>
    			Ok
  			</Button>
  			</Alert>
						
			<StockList />
			</>
						
		)

}


export default StockManager;
