import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react'
import Header from './Componentes/Header.jsx';
import Formulario from './Componentes/Formulario.jsx';






function App() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('tareas')) || []);

  const tareaRealizada = (tarea) = {
    const tareaNueva = [...tareas, tarea]
    localStorage.setItem ('tareas' , JSON.stringify(tareaNueva))
    setTareas(tareaNueva)
  };

  const borrarTarea = (id) => { 
    const close = tareas.filter(tareas => 
      tarea.id ! == id)
    setTareas(close)
    //localStorage.setItem('tareas' , JSON.stringify(buenasTareas));
}

const pepe = (id) => { 
  const array = [...tareas]
  const tareaCompletada = array.find(tarea = tarea.id === id)
  tareaCompletada.completed = !completedTarea.completed
  setTareas(array)
}
  return (
    <Box backgroundImage="url('">
    // alignItems='center' color='pink'/> 
    //<Formulario onSubmit={onSubmit} tareas={tareas} />
  //) 
  <Header/>
  <Formulario tareas={tareas} close={close}/>
  </Box>
  );
};
export default App 
