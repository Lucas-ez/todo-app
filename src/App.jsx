import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import { useState } from 'react';

function App() {

  const [allTodo, setAllTodo] = useState([]);

  const addTodo = (todo) => {
    setAllTodo([...allTodo, todo]);
  }

  const removeTodo = (id) => {
    setAllTodo([...allTodo].filter(todo => todo.id !== id));
  }

  const completeTodo = id => {
    setAllTodo(allTodo.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    }));
  };

  return (
    <div className="App">
      <Form onSubmit={addTodo} />
      {allTodo.map((todo) =>
        <Todo key={todo.id}
          todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo} />
      )}
    </div>
  );
}

export default App;
