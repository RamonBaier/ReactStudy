import { useState } from "react"

export function CreateToDo(){
    const [texto, setTexto] = useState<string>("");
    return(
        <>
        <input 
            type="text" 
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
        />
        </>
    )
    
}
