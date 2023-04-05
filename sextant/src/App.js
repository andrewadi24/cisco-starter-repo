import './App.css';
import Banner from './Components/Banner'
import Exhibit from './Components/Exhibit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [IPV4, setIPV4] = useState("")
    const fetchData = () => {
        Axios.get("https://api.ipify.org").then((response) => {
            setIPV4(response.data)
            console.log(response)
        })
    } 
    useEffect(() => {
      fetchData();
    }, [])
  return (
    <div className="container">
        <Banner></Banner>
      <div className='row'>
        <div className='col-2'>
          <Exhibit title="Public IP address:" children = {IPV4}></Exhibit>
        </div>
        <div className='col-5'>
          <Exhibit></Exhibit>
        </div>
        <div className='col-5'>
          <Exhibit></Exhibit>
        </div>
      </div>

    </div>
  );
}

export default App;
