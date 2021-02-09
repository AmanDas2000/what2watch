import requests from './request';
import './App.css';
import Row from './Row';
import Addon from './Addon';
import Card from './Card';
import { useStateValue } from './StateProvider';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  const [{ basket }] = useStateValue();

  var x = '';
  const append = (basket) => {
    for (var i = 0; i < basket.length; i++){
      x = x + basket[i];
    }
    console.log(x);
    
    return append;
  }
  append(basket);
  
  return (
    <div className="App">
      <h1 className="head">What ✌🏼 Watch?</h1>
      
      <div className="container">
        
        <div className="page">
        
          <h2>Language</h2>
          <Page1 title1="Hindi" title2="English" id1="&with_original_language=hi" id2="&with_original_language=en"/>
          
        </div>
        
        <div className="page">
          
          <h2>What's your type?</h2>
          <Page2 />
          
        
        </div>
        
        <div className="page">
        <h2>Released within</h2>
          <Page3 />

        </div>
        
        


      </div>
      <Row fetchURL={`${requests.normal}${x}`}/>
    </div>
  );
}

export default App;
