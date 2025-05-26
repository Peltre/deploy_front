import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("componente montado")
    }, []);

    useEffect(() => {
        console.log("Componente actualizado")
    },[text]);

    useEffect(() => {
        return () => console.log("Componente desmonado")
    }, []);

    useEffect(() => {
        console.log("componente siempre")
    });

  return (
    <div>
        <input  
            type='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)}
        />
    </div>
  )
}

export default LifeCycle
