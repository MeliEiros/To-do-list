import { FormControl, Input, Icon, IconButton, Button} from "@chakra-ui/react";
import { useState } from "react";
import Todo from './Todo';
//import { filter } from "@chakra-ui/react/dist";

export default function AgregarTarea ({ setTareas, tarea, close }) { 

    const [filtros, setfiltros] = useState ([]);
        return (
        <> 
        <FormControl style={{margin: "auto", 
        display :"flex"}}> 
        <div style={{display :"flex",
            width: "50%", 
            margin: "30px",
            flexDirection: "column"}}>
                <label style={{fontSize: "20px", 
                    color: "pink"}}> Tarea 
                </label>
            <Input type="text" style={{
                padding: "15px", 
                borderRadius: "20px"
            }} 
            placeholder="Inserte su nueva tarea"> 
            </Input>
        </div>
        

    <div style={{display :"flex", 
        width: "50%", 
        margin: "30px" ,
        flexDirection: "column"}}>
    <select onChange={(e) => setfiltros(e.target.value)} style={{
        fontSize: "10px" ,
        padding: "20px", 
        color: "black" 
        }}>
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
<Button type="submit" style={{
    backgroundColor: "pink", 
    color:"black", 
    borderRadius: "15px"
    }}>
    Enviar
</Button>
</FormControl> 


{setTareas  
    .filtros((tarea) => { 
        if (filtros === "Completa" && filtros === "Incompleta") {
        return tarea.state === filtros 
        } 
        else if (filtros === "Completa" || filtros === "Incompleta") {
            return tarea.state === filtros
        }
    })
    .map((Tarea) => (
        <Todo
            key={Tarea.id}
            id={Tarea.id}
            nombre={Tarea.nombre}
            state={Tarea.state}
            close={close}
        />
        ))}
    </> )
}

