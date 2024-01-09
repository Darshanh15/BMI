import { useState } from "react";
function SimpleObject(){
    const [inp,setInp] = useState({
        p:0,
        r:0,
        t:0
    })


const [si,setSi] = useState(0)
const [total,setTotal] =useState(0)

const readInput = (e) => {
    const {name, value } = e.target;
    setInp({...inp, [name]: value})
}
const calculate = function (e){
    e.preventDefault();
    let x = (inp.p * inp.t * inp.r)/100;
    setSi(x)
    let y = inp.p * (1 + (inp.r/100) * inp.t);
    setTotal(y)
}

return (
    <div>
      <div className="titel">
        <h1>forms in functinaol comopents</h1>
      </div>
      <div className="container">
        <form autoComplete='off' onSubmit={(e) => calculate(e)}>
            <div className="form-ite">
                <label htmlFor="p">Principle</label>
                <input type="number" name="p" id="p" value={inp.p} onChange={(e) => readInput(e)} required/>
            </div>
            <div className="form-ite">
                <label htmlFor="r">Rate of interst</label>
                <input type="number" name="r" id="r" value={inp.r} onChange={readInput} required/>
            </div>
            <div className="form-ite">
                <label htmlFor="t">Time</label>
                <input type="number" name="t" id="t" value={inp.t} onChange={readInput} required/>
            </div>
            <div className="form-ite">
                <input type="submit" value="calculate" />
            </div>
        </form>
        <div className='container'>
            <h1>Simple interst = {si}</h1>
            <h1>Total amount = {total}</h1>
        </div>
      </div>
    </div>
  )

}
export default SimpleObject