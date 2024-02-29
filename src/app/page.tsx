export default function Home() {
  return (<div className="flex flex-row py-4">
          <Card title={"Todo"} description={"Description"} checked={true}/>
          <Card title={"Todo"} description={"Description"} checked={true}/>
          <Card title={"Todo"} description={"Description"} checked={true}/>
    </div>
  );
}
class TodoItemProps{
    title: string;
    description: string;
    checked: Boolean;
}

function Navbar(){
    return <nav className="flex justify-between bg-cyan-500">
        <label className="hover:text-orange-400"></label>
    </nav>
}

function Card({title, description, checked}:TodoItemProps)
{
    return <div className="flex flex-col items-center px-4 justify-between bg-slate-300 hover:bg-slate-600 w-1/6 h-60">
        <h2>{title}</h2>
        <label className="text-xs">{description}</label>
    </div>
}