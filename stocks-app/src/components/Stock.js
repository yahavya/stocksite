import React from 'react'
import '../index.css'

const Stock = (props) => {
    const { img, ticker, price, changesPercentage, companyName } = props;

    let pct = parseInt(changesPercentage.slice(1,5),10)
    return (
        <div className="stock">
            <a className="tickerlink" href={`https://finance.yahoo.com/quote/${ticker}`} target="_blank">
           { //<img src={img} alt="Placeholder" /> 
           }
                <h1 className="ticker">{ticker}</h1>
                <h2 className="company-name">{companyName}</h2>
            <h2 style = {{color: '#FBFAF5'}} >{price + "$"}</h2>
            <h3 className = "pct" style = {pct < -20 ? {color: '#AB2508'} : {color: '#E62900'}}>{changesPercentage}</h3>
            </a>
        </div>
    )
}

export default Stock
