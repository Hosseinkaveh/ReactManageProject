import { useState } from "react";
import { createContext } from "react";
import SelectedProject from "../SelectedProject";
import NoProjectSelected from "../NoProjectSelected";
import NewProject from "../NewProject";

export const ProjectandTaskContext = createContext({
  projectState: {
    SelectedProjectId: undefined,
    projects: [],
    tasks: [],
  },
  addProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
});
export default function ProjectandTaskContextProvider({children}){
  const [projectState, setProjectState] = useState({
    SelectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handelDeleteTask = (id) => {
    setProjectState((preState) => {
      return {
        ...preState,
        tasks: preState.tasks.filter((task) => task.id !== id),
      };
    });
  };
  const handelAddTask = (taskText) => {
    setProjectState((preState) => {
      let taskId = Math.random();
      let newTask = {
        id: taskId,
        Text: taskText,
        projectId: preState.SelectedProjectId,
      };
      return {
        ...preState,
        tasks: [...preState.tasks, newTask],
      };
    });
  };

  const handelSelectProject = (id) => {
    setProjectState((preState) => {
      return {
        ...preState,
        SelectedProjectId: id,
      };
    });
  };

  const handelAddNewProject = (project) => {
    setProjectState((preState) => {
      let newProject = {
        ...project,
        id: Math.random(),
      };
      return {
        ...preState,
        SelectedProjectId: undefined,
        projects: [...preState.projects, newProject],
      };
    });
  };
  const handelDeleteProject = (id) => {
    setProjectState((preState) => {
      return {
        selectedProject: undefined,
        projects: preState.projects.filter((item) => item.id !== id),
      };
    });
  };
  const selectedProject = projectState.projects.find((project) => {
    return project.id === projectState.SelectedProjectId;
  });

  const handelShowAddProject = () => {
   setProjectState((preState)=>{
    return{
      ...preState,
      SelectedProjectId:null
    }
   })
  };
  const handelCancelAddProject = () => {
    setProjectState((preState)=>{
      return{
        ...preState,
        SelectedProjectId:undefined
      }
     })
  };
  let value = {
  
    projectState: projectState,
    selectedProject:selectedProject,
    addProject: handelAddNewProject,
    deleteProject: handelDeleteProject,
    addTask: handelAddTask,
    deleteTask: handelDeleteTask,
    showaddProjectPage:handelShowAddProject,
    cancellAddProject:handelCancelAddProject,
    selectProject:handelSelectProject
  };
  return(
    <ProjectandTaskContext.Provider value={value}>
      {children}
    </ProjectandTaskContext.Provider>
  )
}