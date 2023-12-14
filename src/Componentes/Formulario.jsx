import { FormControl, Input, Icon, IconButton, Button} from "@chakra-ui/react";
import { useState } from "react";
import Todo from './Todo';

export default function agregarTarea ({ setTareas, tareas, close }) { 

    const [filtros, setfiltros]

    return <>
        <FormControl style={{margin: "auto", display :"flex"}}> 
        <div style={{display :"flex", width: "50%", margin: "30px" ,flexDirection: "column"}}>
            <label style={{fontSize: "20px", color: "pink"}}> Tarea </label>
            <input type="text" style={{padding: "15px", borderRadius: "20px"}} placeholder="Inserte su nueva tarea"> </input>
        </div>

<div style={{display :"flex", width: "50%", margin: "30px" ,flexDirection: "column"}}>
    <select cambiar={(e) => setfiltros(e.target.value)} style={{fontSize: "10px" ,padding: "20px", color: "black" }}>
        <option value="Todas">
            Todas
        </option>
        <option value="Completa">
            Completas
        </option>
        <option value="Incompleta">
            Incompletas
        </option>
    </select>
</div>
<Button type="submit" style={{backgroundColor: "pink", color="black", borderRadius: "15px"}}>
    Enviar
</Button>
</FormControl>

{setTareas  
    .filtros((tarea)) => { 
        if (filtros === "Completa" && filtros === "Incompleta") {
        return Tarea.state === filtros 
        } 
        else if (filtros === "Completa" || filtros === "Incompleta") {
            return Tarea.state === filtro }
        .map((Tarea) => (
          <Todo
            key={Tarea.id}
            id={Tarea.id}
            nombre={Tarea.nombre}
            state={Tarea.state}
            Close={Close}
          />
        ))
    </>
}
