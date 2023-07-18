import React,{useState} from 'react'



function Body() {
  
  const [val,setVal] = useState("ss")
  const a = 100


  function show(){
    console.log(val)
  }





  return (
    <>
    <section>
        <input type="text" value={val} /> 
        <hr />
    </section>

    <div>
      <button onClick={()=>show()}>Click here</button>
    </div>

    
    </>
    
  )
}

export default Body
