import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import TodoPG from './components/TodoPage/TodoPG';
import Profile from './components/Profile';
import AddTodo from './components/TodoPage/AddTodo';

export default function App() {
  const [profileVisible, setProfileVisible] = useState(false);

  const toggleNavBar = function () {
    setProfileVisible(!profileVisible);
  };

  const [toggleTodoPage, setToggleTodoPage] = useState(false);

  const renderTodoPage = function () {
    setToggleTodoPage(!toggleTodoPage);
  };

  const [formData, setFormData] = useState({
    todo: '',
    date: '',
    category: 'Personal',
  });

  const handleChange = function (e) {
    const { name, value } = e.target;
    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // get items from localStorage
    try {
      const existingTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(existingTodos || []);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // run code when todos is updated or deleted
  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (err) {
      console.error(err);
    }
  }, [todos]);

  const handleSubmit = function (e) {
    e.preventDefault();

    const formDataValues = Object.values(formData);

    // making sure all input elements where filled
    const inputStateValidity = formDataValues.every((data) => data != '');

    if (!inputStateValidity) return;

    renderTodoPage();

    const newTodo = {
      id: nanoid(),
      ...formData,
    };

    addTodo(newTodo);
  };

  const addTodo = function (value) {
    setTodos((previousState) => [...previousState, value]);
    setFormData({ todo: '', date: '', category: 'Personal' });
  };

  const handleDelete = function (e, id) {
    e.stopPropagation();
    const newArray = todos.filter((obj) => obj.id !== id);
    setTodos(newArray);
  };

  return (
    <>
      <Profile handleNav={toggleNavBar} />

      <main className={`absolute top-0 left-0 min-h-screen w-full ${profileVisible && 'translateMainDown'} bg-[#f3f3f3]`}>
        {/* prettier-ignore */}
        <TodoPG 
        handleNav={toggleNavBar} 
        handleClick={renderTodoPage} 
        todoItems={todos}
        handleDelete={handleDelete} 
        />

        {/* prettier-ignore */}
        <AddTodo 
        state={toggleTodoPage} 
        handleClick={renderTodoPage} 
        handleFormInputs={handleChange} 
        valueTxT={formData.todo} 
        valueDate={formData.date} 
        valueSelect={formData.category} 
        handleFormSubmit={handleSubmit} />
      </main>
    </>
  );
}
