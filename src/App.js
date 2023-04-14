import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';



// import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: false},
  { text: 'Tomar el curso de React', completed: false},
  { text: 'Llamar a madre', completed: false},
]

function App() {
  return (
    <>
      {<TodoCounter />}
      {<TodoSearch />}      
      {<TodoList>
        {todos.map(todo =>(
          <TodoItem 
           key={todo.text}
           text={todo.text}
           completed={todo.completed}
           />
        ))}
        </TodoList>}
      {<CreateTodoButton/>}
      </>    
    );
}

export default App;
