import './App.css';
import {useState} from 'react'

function App() {

 const [bottle,setBottle]=useState(3)
 const [weight,setWeight]=useState(89)
 const [time,setTime]=useState(1)

 const [gender,setGender]=useState('male')

 const [result,setResult]=useState(0)

  function calculate(e) {
    e.preventDefault()
  let calc = 0
   let litres= bottle * 0.33 
   let grams= litres * 8 * 4.5
   let burning= weight/10
   let aika= grams - (burning * time)

    if (gender === 'male') {
    calc = aika / (weight * 0.7)
    } else {
    calc = aika / (weight * 0.6)
    }
    setResult(calc)
  }
  
  return (
    <div>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input type="number" name="weight" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>

        <div>
          <label>Bottles</label>
          <input type="number" name="bottles" value={bottle} onChange={e => setBottle(e.target.value)}/>
        </div>

        <div>
          <label>Time</label>
          <input type="number" name="time" value={time} onChange={e => setTime(e.target.value)}/>
        </div>

        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value='male' defaultChecked onChange={e => setGender(e.target.value)}/> 
          <label>Male</label>
          <input type="radio" name="gender" value='female' onChange={e => setGender(e.target.value)}/>
          <label>Female</label>
        </div>

        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
