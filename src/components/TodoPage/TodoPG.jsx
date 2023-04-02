import Todo from './Todo';
import AddTodoBtn from './AddTodoBtn';

export default function TodoPG(props) {
  return (
    <section className="todo--page h-full w-full bg-white py-[64px] px-[32px]">
      <header className="header--icons__section">
        <nav>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>

          <div className="search-notification">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-bell"></i>
          </div>
        </nav>

        <h2 className="text-3xl font-bold text-black md:text-6xl">What's up Joy!</h2>
        <p className="my-[32px] text-base font-medium uppercase text-gray">Categories</p>

        <section className="todo-categories--section">
          <div className="business--sect w-[180px] cursor-pointer rounded-md bg-white py-[20px] px-[12px]">
            <p className="text-sm text-black">40 Tasks</p>
            <h4 className="py-2 text-xl font-medium text-black">Business</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div className="inner-div h-full w-[40%] rounded bg-purple"></div>
            </div>
          </div>

          <div className="business--sect w-[180px] cursor-pointer rounded-md bg-white py-[20px] px-[12px]">
            <p className="text-sm text-black">18 Tasks</p>
            <h4 className="py-2 text-xl font-medium text-black">Personal</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div className="inner-div h-full w-[40%] rounded bg-softBlue"></div>
            </div>
          </div>

          <div className="business--sect w-[180px] cursor-pointer rounded-md bg-white py-[20px] px-[12px]">
            <p className="text-sm text-black">10 Tasks</p>
            <h4 className="py-2 text-sm font-medium text-black">Groceries / Shopping</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div className="inner-div h-full w-[40%] rounded bg-green-500"></div>
            </div>
          </div>
        </section>
      </header>

      <Todo todoItems={props.todoItems} handleDelete={props.handleDelete} />
      <AddTodoBtn handleClick={props.handleClick} />
    </section>
  );
}
