const Card = (props) => {
  return (
    <div className="grid lg:grid-cols-3 gap-3 my-10">
      <div className="rounded bg-white p-5 border-l-8 border-purple-500">
        <h1 className="text-purple-500">Hello</h1>
        <div>Elit laborum tempor mollit esse anim non cillum quis.</div>
      </div>
      <div className="rounded bg-white p-5 border-l-8 border-purple-500">
        <h1 className="text-purple-500">Hello</h1>
        <div>Elit laborum tempor mollit esse anim non cillum quis.</div>
      </div>
      <div className="rounded bg-white p-5 border-l-8 border-purple-500">
        <h1 className="text-purple-500">Hello</h1>
        <div>Elit laborum tempor mollit esse anim non cillum quis.</div>
      </div>
    </div>
  );
};
export default Card;
