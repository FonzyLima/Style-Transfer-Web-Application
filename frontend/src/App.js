import logo from './logo.svg';
import './styles/App.css';
import {useState,useEffect} from 'react';
const axios = require('axios')
function App() {
  const [num,setNum] = useState(99);
  const [get,setGet] = useState(false);
  const getRandomNum = async () => {
    try{
      const getRandomNumData = await axios({
        url:"/image",
        method:"get",
      });
      setNum(getRandomNumData.data.Hello);
      console.log(num)
      console.log(getRandomNumData.data)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(get){
      getRandomNum()
    }
  },[get])
  return (
    <div className="App">
      <h1>My Number is {num}</h1>
      <input type="Text"/>
      <button onClick={()=>setGet(true)}>Submit</button>
    </div>
  );
}

export default App;
