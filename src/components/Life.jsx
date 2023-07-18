import React,{useEffect} from 'react'


function Life() {
    //mounting
    //unmounting
    //update
    const[val,setVal] = useState("")
    useEffect(()=>{
        
        //componenDidMount
        console.log("Component mounted")
        
        return ()=>{
            //component did unmount
            console.log("Unmounted")
        }


    },[val])


    //useEffect
    
    
    //component did mount
    //component did unmount
    //component did update

    



  return (
    <div>
      Life cycle
      <input type="text" />
    </div>
  )
}

export default Life
