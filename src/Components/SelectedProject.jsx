import { useContext } from 'react';
import Tasks from './Tasks.jsx'
import { ProjectandTaskContext } from './store/project-task-context.jsx';
export default function SelectedProject() {
     const {deleteProject,selectedProject} = useContext(ProjectandTaskContext)
    const formattedDate = new Date(selectedProject.DueDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  
    return (
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {selectedProject.Title}
            </h1>
            <button className="text-stone-600 hover:text-stone-950" onClick={()=>deleteProject(selectedProject.id)}>
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">{formattedDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {selectedProject.Description}
          </p>
        </header>
        <Tasks />
      </div>
    );
  }
  