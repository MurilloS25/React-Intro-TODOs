import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro a React', completed: false},
//   {text: 'Jugar Watch', completed: false},
//   {text: 'Llorar con la llorona', completed: false}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStrogae.removeItem('TODOS_V1');


function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  if(!localStorageItem){
    parsedItem = [];
    localStorage.setItem(itemName, JSON.stringify([]));
    }else{
       parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
      
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    };

    return [item, saveItem];
}


function App() {
  
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const filteredTodos = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));


  const completeTodo = (text) => {
    const newTodos =[...todos];
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos =[...todos];
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  }


  return (
<React.Fragment>
    <TodoCounter completed={completedTodos} total={totalTodos}/>

    <TodoSearch searchValue={searchValue} 
    setSearchValue = {setSearchValue}/>

    <TodoList>  
      {filteredTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed} 
        onComplete={()=> completeTodo(todo.text)}
        onDelete={()=> deleteTodo(todo.text)}
      />))}
    </TodoList>

     <CreateTodoButton/> 

    </React.Fragment>
  );
}




export default App;
