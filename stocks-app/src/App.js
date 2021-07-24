import './index';
import { React } from 'react';
import StockList from "./components/StockList"
import Navbar from "./components/Navbar"
import { Button } from '@material-ui/core'

function App() {
  const handleClick = () => {
    alert("Refreshing, please stand by")
  }
  return (
    <>
    <Navbar />
    <h1 className = "doctitle">Welcome to the worst stocks tracker</h1>
    <StockList />
    <Button className = "refresh-btn" color = "primary" onClick = {handleClick}>Click me to refresh</Button>
    </>

  );
}

export default App;
