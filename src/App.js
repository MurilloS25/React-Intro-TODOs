import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';

const deafultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Jugar Watch', completed: false}
];

function App() {
  return (
<React.Fragment>
    <TodoCounter completed={16} total={25}/>

    <TodoSearch/>

    <TodoList>  
      {deafultTodos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList>

     <CreateTodoButton/> 

    </React.Fragment>
  );
}




export default App;
