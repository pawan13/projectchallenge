import React, { useState } from 'react';
import Square from './Square';
import Input from './Input';

export default function Content() {
    const [color, setColor] = useState('');
    const addColor=(e)=>{
        e.preventDefault()
        if(!color) return; 
        setColor('');  
    }

  return (
    <main>
        <Square 
        color={color}
        
        />
        <Input
        color={color}
        setColor={setColor}
        addColor={addColor}
        />
    </main>
  )
}
