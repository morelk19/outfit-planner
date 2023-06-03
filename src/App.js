import logo from './logo.svg';
import './App.css';
import SetImages from './hooks/SetImages';


function App() {

  const{ setCasual, setFormal, setSport } = SetImages();
  return (
    <div className="App">

      <p className='outfitPlanner'>Outfit Planner</p>
      <p className='findWhatToWear'>Find What to Wear</p>
  
      <p className='fashionStyles'>Fashion Styles / Dress Code</p>
      <button id='button1'onClick={setCasual}>Casuaul</button>
      <button id='button2'onClick={setSport}>Sport</button>
      <button id='button3'onClick={setFormal}>Formal</button>

      <p className='top'>TOP</p>
      <img id='imageSize1'alt='Top'/>

      <p className='bottom'>BOTTOM</p>
      <img id='imageSize2' alt='bottom'/>

      <p className='shoes'>SHOES</p>
      <img id='imageSize3' alt='shoes'/>
      
    </div>
  );
}

export default App;



