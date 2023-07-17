import React,{useState} from 'react'
import Navbar from './Header'
import myimage from './myimage.jpg'


function Body() {
  

  const a  = 100
  
  // //single type variable
  // int a = 10;
  
  const[val,setVal] = useState("ssss")

  return (
    <>
    <section>
        
      

        <input type="text" value={val} onChange={(b)=>setVal(b.target.value)}/>

    </section>


    <script>
      increase()
    </script>
    </>
    
  )
}

export default Body
