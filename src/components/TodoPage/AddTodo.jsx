// Todo: onClick of the addtodoBtn (if there's a value in all the inputs) render the todo item and close down the addtodo page

export default function AddTodo(props) {
  return (
    <form className={`hideTodoPage fixed top-0 left-0 flex h-screen w-full ${props.state && 'showTodoPage'} items-center justify-center bg-[#f3f3f3]`} onSubmit={props.handleFormSubmit}>
      <div className="fixed top-5 right-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-2 border-[#d7d7d7] bg-transparent" onClick={props.handleClick}>
        <i className="fa-solid fa-xmark"></i>
      </div>

      <section className="addtodo mx-8 flex w-full flex-col items-center">
        <input type="text" placeholder="Enter new task" className="h-[50px] w-full rounded-full px-4 py-3 text-xl outline-none" name="todo" onChange={props.handleFormInputs} value={props.valueTxT} />

        <div className="date--sect my-3 flex w-full items-center justify-start">
          <div className="date--container w-full rounded-lg">
            <input type="date" className="w-[90%] rounded-full p-3 outline-none" name="date" onChange={props.handleFormInputs} value={props.valueDate} />
          </div>

          <div className="radio flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-[#d7d7d7]">
            <input type="radio" defaultChecked />
          </div>
        </div>

        <select name="category" id="categories" className="w-full rounded-full p-3 outline-none" onChange={props.handleFormInputs} value={props.valueSelect}>
          <option value="Personal" className="p-3">
            Personal
          </option>
          <option value="Business" className="p-3">
            Business
          </option>
          <option value="Shopping" className="p-3">
            Shopping
          </option>
        </select>
      </section>

      <button className="addNewTask absolute bottom-8 right-4 rounded-full bg-blue-700 px-8 py-4 text-sm text-white">
        New task <i className="fa-solid fa-angle-up"></i>
      </button>
    </form>
  );
}