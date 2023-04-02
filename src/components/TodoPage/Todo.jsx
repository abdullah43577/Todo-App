export default function Todo(props) {
  const todoItems = props.todoItems.map((todo, i) => {
    let borderColor = todo.category.toLowerCase();

    let trashIconColor = '';

    switch (todo.category) {
      case 'Personal':
        trashIconColor = '#3b5998';
        break;
      case 'Business':
        trashIconColor = '#c566f4';
        break;
      default:
        trashIconColor = '#1ab61a';
    }

    return (
      <li key={todo.id} id={todo.id} className="new relative rounded-2xl">
        <label htmlFor={`todo--${i}`} className="flex w-full cursor-pointer items-center justify-start rounded-2xl bg-white p-5">
          <input id={`todo--${i}`} type="checkbox" className={`mr-4 ${borderColor}`} />
          <p className="text-base text-gray">{todo.todo}</p>
          <i className={`fa-solid fa-trash absolute right-3 text-[${trashIconColor}]`} onClick={(e) => props.handleDelete(e, todo.id)}></i>
        </label>
      </li>
    );
  });

  return (
    <section className="todo--section">
      <h4 className="mt-8 mb-5 text-sm font-bold uppercase text-gray">Today's Task</h4>

      <ul className="todo--container flex flex-col-reverse gap-3">{todoItems}</ul>
    </section>
  );
}
