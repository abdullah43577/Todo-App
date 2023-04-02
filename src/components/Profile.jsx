export default function Profile(props) {
  return (
    <section className="profile--container bg-blue relative flex h-full min-h-screen w-full max-w-[50%] flex-col items-start justify-start gap-[1.5rem] py-[64px] px-[32px]">
      <figure className="h-[80px] w-[80px] rounded-full border-2 border-gray p-2">
        <img src="" alt="" />
      </figure>
      <h2 className="text-3xl font-bold text-white">Joy Mitchell</h2>

      <ul className="flex flex-col items-start justify-center gap-[15px]">
        <li className="cursor-pointer text-base text-white">
          <i className="fa-regular fa-bookmark mr-[10px]"></i>Templates
        </li>
        <li className="cursor-pointer text-base text-white">Categories</li>
        <li className="cursor-pointer text-base text-white">
          <i className="fa-solid fa-chart-pie mr-[10px]"></i>Analytics
        </li>
        <li className="cursor-pointer text-base text-white">
          <i className="fa-solid fa-gear mr-[10px]"></i>Settings
        </li>
      </ul>

      <figure className="absolute top-[20px] right-[20px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-2 border-gray p-2" onClick={props.handleNav}>
        <i className="fa-solid fa-angle-left fa-lg text-white"></i>
      </figure>
    </section>
  );
}
