import { Box, Flex} from '@chakra-ui/react';
import { useState } from 'react'
import Header from './Componentes/Header.jsx';
import Formulario from './Componentes/Formulario.jsx';
import Todo from './Componentes/Todo.jsx';


function App() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('tareas')) || []);

  const tareaRealizada = (task) => {
    let tareaNueva = [...tareas, task];
        localStorage.setItem('tareas' , JSON.stringify(tareaNueva))
    setTareas(tareaNueva)
  }

const borrarTarea = (id) => { 
    const close = tareas.filter(tarea => tarea.id !== id); 
    setTareas(close)
    localStorage.setItem('tareas' , JSON.stringify(close));
};

const newArr = (id) => { 
  const array = [...tareas]
  const tareaCompletada = array.find(tareas = tareas.id === id)
  tareaCompletada.completed = !tareaCompletada.completed
  setTareas(newArr)
};

  return (
  <Box backgroundImage="url('https://static.vecteezy.com/system/resources/previews/006/621/189/non_2x/abstract-background-gradient-abstract-modern-background-for-mobile-apps-free-vector.jpg'">
    <Flex alignItems='center' color='pink'>
    <Formulario tareaRealizada={tareaRealizada} tareas={tareas} /> 
  <Header/>
    <Formulario tareas={tareas} close={close}/>
  <Todo tareas={tareas} borrarTarea={borrarTarea} newArr={newArr} />
    </Flex>
  </Box>
)
}
export default App 
