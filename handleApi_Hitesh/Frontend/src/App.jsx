import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [data, setData] = useState([])  
  const [load, setLoad] = useState(false)  
  const [search, setSearch] = useState('')  
  useEffect(()=>{
    ;(async()=>{
      try {
        setLoad(true)
        const res= await axios.get('api/products?search='+search)
        console.log(res.data)
        setData(res.data)
        setLoad(false)
      } catch (error) {
        console.log(error.message)
      }
    })()    
  },[search])

  return (
    <>
      <div>
        <h1>Products length: {data.length}</h1>
        <input type="text"  
        onChange={(e)=>setSearch(e.target.value)}
        />
        {load?<div>Loading....</div>:
          data.map((item)=>(
            <div key={item.id}>
              {item.name}
            </div>
          ))
        }
      </div>      
    </>
  )
}

export default App
