import './App.css';
import React, {useState, useEffect} from 'react';
import { getData } from './api/mainapi';

function App() {
  const [data, setData] = useState([]);

  const getDatabase = () => {
    getData()
    .then((data) => {
      setData(Object.entries(data))
    })
  }

  useEffect(() => {
    getDatabase()
  },)

  // const renderFood = () => {
  //   return data.map((food, index) => {
  //     return(
  //       <p>{food}</p>
  //     )
  //   })
  // }
  console.log(data[0][1][0].title)

  return (
    <div>
      <h1>Foodup</h1>
      <p>{data[0][1][0].title}</p>
      {/* {renderFood()} */}
    </div>
  )
}

export default App;
