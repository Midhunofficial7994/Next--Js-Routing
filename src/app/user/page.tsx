 "use client"
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {

    const [item,setItem]= useState<string>("");
    const [display,setDisplay]= useState<string>("");

    const Add =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setItem(e.target.value);
    }

   const displayItems = ()=>{
    setDisplay(item)
   }

  return (
    <div className=' flex-container'>
    <input 
  type="text"
  value={item}
  onChange={Add}
  style={{ color: 'black' }}  
/>


      <button onClick={displayItems}>OK</button>
      <div>
      
      

      {display}
      </div>

      
       <Link href = "/trial">
      <button>Lets Go😎</button>
      </Link>
      

    </div>
  )
}

export default page
