import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject.jsx";
import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";
import { ProjectandTaskContext } from "./Components/store/project-task-context.jsx";

function App() {
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
  const handelShowAddProject = () => {
    setProjectState((pre) => {
      return {
        ...pre,
        SelectedProjectId: null,
      };
    });
  };
  const handelCancelAddProject = () => {
    setProjectState((pre) => {
      return {
        ...pre,
        SelectedProjectId: undefined,
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
  
  let content;
  if (projectState.SelectedProjectId === null) {
    content = (
      <NewProject/>
    );
  } else if (projectState.SelectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else {
    content = (
      <SelectedProject project={selectedProject} />
    );
  }
  let value = {
    projectState: projectState,
    addProject: handelAddNewProject,
    deleteProject: handelDeleteProject,
    addTask: handelAddTask,
    deleteTask: handelDeleteTask,
    showaddProjectPage:handelShowAddProject,
    cancellAddProject:handelCancelAddProject,
    selectedProject:handelSelectProject
  };

  return (
    <ProjectandTaskContext.Provider value={value}>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar/>
        {content}
      </main>
    </ProjectandTaskContext.Provider>
  );
}

export default App;
