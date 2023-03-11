import './App.css';
import React, {useState, useEffect} from 'react';
import { getData } from './api/mainapi';

function App() {
  const [data, setData] = useState([]);

  const getDatabase = () => {
    getData()
    .then((data) => {
      setData(data)
    })
  }

  useEffect(() => {
    getDatabase()
  }, [])

  console.log(data)

  return (
    <div>
      <h1>Foodup</h1>
      {data.map(item => (
        <p key={item.id}>{item.results[0]}</p>
      ))}
    </div>
  )
}
//test

export default App;
