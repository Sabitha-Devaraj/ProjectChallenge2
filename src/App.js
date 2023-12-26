import './App.css';
import './index.css'
import Header from './Header';
//import Content from './Content';
import Table from './Table';
import { useEffect, useState } from 'react';

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/"
  
  const [items, setNewItems] = useState([])
  const [reqType, setReqType] = useState('users')
  const [fetchError, setFetchError] = useState('')
  const [isLoading, setIsLoading] = useState('')


useEffect ( () => {
  const fetchItems = async () => {
      try 
      {
        setIsLoading(true)
        setFetchError('')
        const req_URL = `${API_URL}${reqType}`
        const response = await fetch(req_URL);
        if(!response.ok) throw Error("Cannot fetch data")
        const listItems = await response.json();
        setNewItems(listItems)
        setIsLoading(false)
      } 
      catch (err)
      { 
        setNewItems([])
        setFetchError(err.message)
      } 
      finally 
      {
        setIsLoading(false)
      }
  }
    fetchItems();
    
 },[reqType])

  return (
    <div className="App">
      <Header 
       reqType ={reqType}
       setReqType ={setReqType}
      />
      <main>
        {isLoading && <p>Loading items..</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        <Table items = {items}/>
     </main>
    </div>
  );
}

export default App;
