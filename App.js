import { useState } from "react";
import "./Style.css"
function App() {
  const [value, setValue] = useState('')  
  return (<>
    <h1>Calculator</h1>
    <div className="main">
      <div className="container">
        <input type="text" value={value}></input>
        <div className="row">
          <input type="button" value='7' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='8' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='9' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='x' className="button" onClick={e => setValue(value + e.target.value)} />
        </div>
        <div className="row">
          <input type="button" value='4' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='5' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='6' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='-' className="button" onClick={e => setValue(value + e.target.value)} />
        </div>
        <div className="row">
          <input type="button" value='1' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='2' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='3' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='+' className="button" onClick={e => setValue(value + e.target.value)} />
        </div>
        <div className="row">
          <input type="button" value='0' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='.' className="button" onClick={e => setValue(value + e.target.value)} />
          <input type="button" value='=' className="button" onClick={e => setValue(eval(value))} />
          <input type="button" value='clr' className="button" onClick={e => setValue('')} />
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
