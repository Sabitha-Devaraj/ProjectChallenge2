import './App.css';
import './index.css'
import Header from './Header';
import Content from './Content';
import { useState } from 'react';

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/"
  
  const [items, setNewItems] = useState([])
  const [fetchError, setFetchError] = useState('')
  const [isLoading, setIsLoading] = useState('')

  const fetchItems = async (value) => {
    try 
    {
      setIsLoading(true)
      setFetchError('')

      const req_URL = `${API_URL}${value}`
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

  return (
    <div className="App">
      <Header 
        fetchItems = {fetchItems}
      />
      <main>
        {isLoading && <p>Loading items..</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        <Content  
          items = {items}
        />
     </main>
    </div>
  );
}

export default App;
