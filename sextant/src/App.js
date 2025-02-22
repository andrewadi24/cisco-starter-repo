import './App.css';
import Banner from './Components/Banner'
import Exhibit from './Components/Exhibit';
import Socket from './Components/Socket';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [IPV4, setIPV4] = useState(<></>)
    const fetchData = () => {
        let elem = []
        Axios.get("https://api.ipify.org").then((response) => {
            elem.push("IPV4: " + response.data)
            const elements = elem.map((element) =>{
              return (<p>{element}</p>)     
            })
            setIPV4(elements)
            Axios.get("https://api64.ipify.org?format=json").then((response) => {
            elem.push("IPV6: " + response.data.ip)
            const elements = elem.map((element) =>{
              return (<p>{element}</p>)     
            })
            setIPV4(elements)
        })
        })
    } 
    useEffect(() => {
      fetchData();
    }, [])
  return (
    <div className="container">
        <Banner></Banner>
      <div className='row'>
        <div className='col-4'>
          <Exhibit title="Public IP address:" children = {IPV4}></Exhibit>
        </div>
        <div className='col-8'>
          <Exhibit title= "Packet latency: ">
            <Socket></Socket>
          </Exhibit>
        </div>

      </div>

    </div>
  );
}

export default App;
