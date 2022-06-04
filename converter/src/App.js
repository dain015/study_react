import './App.css';
import { useState } from 'react';

function MinutesToHours() {
  const [amount, setAmount] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const onChange = (e) => {
    setAmount(e.target.value)
  }
  const reset = () => setAmount(0)
  const onFlip = () => {
    reset()
    setFlipped((current) => !current)
  }
  return(
    <div>
      <div>
        <label htmlFor='minutes'>Minutes</label>
        <input 
          value={flipped ? amount*60 : amount} 
          id='minutes' 
          placeholder='Minutes'  
          type='number' 
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor='hours'>Hours</label>
        <input 
          value={flipped ? amount : amount/60} 
          id='hours' 
          placeholder='Hours' 
          type='number'
          onChange={onChange}
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Frip</button>
    </div>
  );
}
function KmToMiles() {
  const [amount, setAmount] = useState(0)
  const [filpped, setFlipped] = useState(false)
  const onChange = (e) => {
    setAmount(e.target.value)
  }
  const onFlip = () => {
    reset()
    setFlipped((current) => !current)
  }
  const reset = () => setAmount(0)
  return(
    <div>
      <div>
        <label htmlFor='km'>Km</label>
        <input 
          value={filpped ? amount*1.609 : amount} 
          id='km' 
          placeholder='Km'  
          type='number' 
          onChange={onChange}
          disabled={filpped}
        />
      </div>
      <div>
        <label htmlFor='miles'>Miles</label>
        <input 
          value={filpped ? amount : amount/1.609} 
          id='miles' 
          placeholder='Miles'  
          type='number' 
          onChange={onChange}
          disabled={!filpped}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>flip</button>
    </div>
  );
}


function App() {
  const [index, setIndex] = useState("xx")
  const onSelect = (e) => {
    setIndex(e.target.value)
  }
  return(
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx"? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;

/* unit converter <= ex 분단위를 넣으면 시간단위로 값 출력
단위 변환 앱 unit conversion

for, class은 자바스크립트 용어 => 사용불가 htmlFor, className 사용
e.target.value => input 받을 때 value에 사용자가 입력한 값이 저장되어 있음

html select함수 => option value값에 0부터 순서대로 삽입(선택지)

자바스크립트 if를 사용하고 싶다면 중괄호{} 사용
*/