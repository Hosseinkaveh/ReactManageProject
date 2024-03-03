import { useContext } from "react";
import NewTask from "./NewTask.jsx";
import { ProjectandTaskContext } from "./store/project-task-context.jsx";

export default function Tasks() {
  const {deleteTask,projectState} = useContext(ProjectandTaskContext)
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {
        projectState.tasks.length === 0 &&
        (<p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
     )}
       {projectState.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectState.tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.Text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => deleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
