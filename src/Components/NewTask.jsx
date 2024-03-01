import { useState } from "react";

export default function NewTask({onAdd}) {
  const[taskText,setTaskText] = useState('')
  const handelChange=(event)=>{
    setTaskText(event.target.value)
  }
  const handelClick=()=>{
    onAdd(taskText)
    setTaskText('')

  }
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handelChange} value={taskText}/>
      <button className="text-stone-700 hover:text-stone-950" onClick={handelClick}>Add Task</button>
    </div>
  );
}
