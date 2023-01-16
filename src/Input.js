import React from 'react'

export default function Input({color, setColor, addColor}) {
  return (
    <form className='inputForm' onSubmit={addColor}>
         <label htmlFor="input">Color</label>
         <input 
         id='input'
         type="text" 
         placeholder='Name a color'
         required
         value={color}
         onChange={(e)=>setColor(e.target.value)}
         />
    </form>
  )
}
