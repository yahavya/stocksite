import { React, useState, useEffect } from 'react'
import Stock from '../components/Stock'
import '../index.css'
import axios from 'axios'


const StockList = () => {
    const [stock, setStocks] = useState([])
    
    useEffect(() => {
    axios.get('/stocks')
      .then(res => {
        console.log(res)
        setStocks(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  
    return (
        <div className="stocklist">
        { 
            stock.map((stock, index) => {
            return <Stock key = {index} {...stock}></Stock>
  })}
        </div>
    )

}
export default StockList

 
        