import React,{useState} from "react"

function App() {
  const[opt1,setOpt1]=useState('')
  const [opt2, setOpt2] = useState("");
  const[val1,setVal1]=useState('')
  const [val2, setVal2] = useState("");
  const [values, setValues] = useState([]);
  const handleOpp=()=>{
    let arr=[]
    let d=val1+val2
    arr.push({label:"a+b",val:d})
    d = val1 - val2;
    arr.push({ label: "a-b", val: d });
    d=val1*val2
    arr.push({label:"a*b",val:d})
    d = val1 / val2;
    arr.push({ label: "a/b", val: d });
    d = val1 % val2;
    arr.push({ label: "a%b", val: d });
    d = val1 ** val2;
    arr.push({ label: "a**b", val: d });
    d = val1 > val2;
    console.log(d)
    arr.push({ label: "a>b", val: d });
    d = val1 < val2;
    arr.push({ label: "a<b", val: d });
    d = val1 >= val2;
    arr.push({ label: "a>=b", val: d });
    d = val1 <= val2;
    arr.push({ label: "a<=b", val: d });
    d = val1 != val2;
    arr.push({ label: "a!=b", val: d });
    d = val1 == val2;
    arr.push({ label: "a==b", val: d });
    d = val1 === val2;
    arr.push({ label: "a===b", val: d });
    d = val1 !== val2;
    arr.push({ label: "a!==b", val: d });
    d = val1 << val2;
    arr.push({ label: "a<<b", val: d });
    d = val1 >> val2;
    arr.push({ label: "a>>b", val: d });
    d = val1 >>> val2;
    arr.push({ label: "a>>>b", val: d });
    d = val1 & val2;
    arr.push({ label: "a&b", val: d });
    d = val1 | val2;
    arr.push({ label: "a|b", val: d });

    d = val1 ^ val2;
    arr.push({ label: "a^b", val: d });

    d = val1 && val2;
    arr.push({ label: "a&&b", val: d });

    d = val1 || val2;
    arr.push({ label: "a||b", val: d });

    d = val1 ?? val2;
    arr.push({ label: "a??b", val: d });

   


console.log(arr,val2)

setValues(arr)

  }
  return (
    <>
      <div>
        <select name="data" id="data" onChange={(e) => setOpt1(e.target.value)}>
          <option value="text">String</option>
          <option value="number">Number</option>
          <option value="number">Float</option>
          <option value="bool">Bool</option>
        </select>
        <input
          type={opt1}
          onChange={(e) => {
            opt1==="bool" ? setVal1(Boolean(e.target.value)) : setVal1(e.target.value);
          }}
        />
      </div>
      <div>
        <select name="data" id="data" onChange={(e) => setOpt2(e.target.value)}>
          <option value="text">String</option>
          <option value="number">Number</option>
          <option value="number">Float</option>
          <option value="bool">Bool</option>
        </select>
        <input
          type={opt2}
          onChange={(e) => {
            opt2==='bool' ? setVal2(Boolean(e.target.value)) : setVal2(e.target.value);
          }}
        />
      </div>

      <button onClick={() => handleOpp()}>find</button>
      {values?.map((a) => (
        <h3>
          {a.label} => {a.val.toString()}
        </h3>
      ))}
    </>
  );
}

export default App;
