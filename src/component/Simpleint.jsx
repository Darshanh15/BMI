import React, { useState } from 'react'
// function calculate() // this is defanation type
function Simpleint() {
    const [p,setP] = useState(0);//
    const [r,setR] = useState(0);
    const [t,setT] = useState(undefined);

    const [si,setSi] = useState(0);
    const [total,setTotal] = useState(0);

    // calculate () {}
    // const calculate =  () => {} // 
    // const calculate = function () {} // 
    const calculate = function (e) {
        e.preventDefault();
        let x = ( p * t * r)/100;
        setSi(x)
        let y = p * (1 + (r/100)* total)
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
                <input type="number" name="p" id="p" value={p} onChange={(e) => setP(e.target.value)} required/>
            </div>
            <div className="form-ite">
                <label htmlFor="r">Rate of interst</label>
                <input type="number" name="r" id="r" value={r} onChange={(e) => setR(e.target.value)} required/>
            </div>
            <div className="form-ite">
                <label htmlFor="t">Time</label>
                <input type="number" name="t" id="t" value={t} onChange={(e) => setT(e.target.value)} required/>
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

export default Simpleint
