import { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodoBtn from './AddTodoBtn';

export default function TodoPG(props) {
  const [counter, setCounter] = useState({
    business: 0,
    personal: 0,
    shopping: 0,
  });

  useEffect(() => {
    const businessTasks = props.todo.filter((todo) => todo.category === 'Business');

    setCounter((prevState) => ({ ...prevState, business: businessTasks.length }));
  }, [props.todo]);

  useEffect(() => {
    const personalTasks = props.todo.filter((todo) => todo.category === 'Personal');

    setCounter((prevState) => ({ ...prevState, personal: personalTasks.length }));
  }, [props.todo]);

  useEffect(() => {
    const shoppingTasks = props.todo.filter((todo) => todo.category === 'Shopping');

    setCounter((prevState) => ({ ...prevState, shopping: shoppingTasks.length }));
  }, [props.todo]);

  return (
    <section className="todo--page h-full w-full bg-white py-[64px] px-[32px]">
      <header className="header--icons__section">
        <nav className="mb-8 flex items-center justify-between">
          <div
            className="burger cursor-pointer"
            onClick={props.handleNav}
          >
            <div className="line1 my-[3px] h-[3px] w-[25px] bg-black"></div>
            <div className="line2 my-[3px] h-[3px] w-[25px] bg-black"></div>
          </div>

          <div className="search-notification">
            <i className="fa-solid fa-magnifying-glass fa-lg cursor-pointer px-6 text-black"></i>
            <i className="fa-regular fa-bell fa-lg cursor-pointer text-black"></i>
          </div>
        </nav>

        <h2 className="text-3xl font-bold text-black md:text-6xl">What's up User!</h2>
        <p className="my-[32px] text-base font-medium uppercase text-gray">Categories</p>

        <section className="todo-categories--section">
          <div className="business--sect w-[180px] cursor-pointer rounded-md bg-white py-[20px] px-[12px]">
            <p className="text-sm text-black">{counter.business} Tasks</p>
            <h4 className="py-2 text-xl font-medium text-black">Business</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div
                className="inner-div h-full rounded bg-purple"
                style={{ width: `${(counter.business / props.todo.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="personal--sect w-[180px] cursor-pointer rounded-md bg-white py-[20px] px-[12px]">
            <p className="text-sm text-black">{counter.personal} Tasks</p>
            <h4 className="py-2 text-xl font-medium text-black">Personal</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div
                className="inner-div h-full rounded bg-softBlue"
                style={{ width: `${(counter.personal / props.todo.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="shopping--sect w-[180px] cursor-pointer rounded-md bg-white py-[20px] px-[12px]">
            <p className="text-sm text-black">{counter.shopping} Tasks</p>
            <h4 className="py-2 text-sm font-medium text-black">Groceries / Shopping</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div
                className="inner-div h-full w-[40%] rounded bg-green-500"
                style={{ width: `${(counter.shopping / props.todo.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>
      </header>

      <Todo
        todoItems={props.todoItems}
        handleDelete={props.handleDelete}
      />
      <AddTodoBtn handleClick={props.handleClick} />
    </section>
  );
}
