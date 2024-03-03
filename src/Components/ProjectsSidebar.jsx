import { useContext } from "react";
import Button from "./Button.jsx";
import { ProjectandTaskContext } from "./store/project-task-context.jsx";
export default function ProjectsSidebar() {
  let {projectState,showaddProjectPage,selectedProject} = useContext(ProjectandTaskContext)

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={showaddProjectPage}> + Add Project</Button>
      </div>
      <ul className="mt-4">
        {projectState.projects.map((x) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if(x.id == projectState.SelectedProjectId){
            cssClasses += ' bg-stone-800 text-stone-200'
          }else{
            cssClasses += ' text-stone-400'
          }
          return (
            <li key={x.id}>
              <button className={cssClasses} onClick={()=>selectedProject(x.id)}>
                {x.Title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
