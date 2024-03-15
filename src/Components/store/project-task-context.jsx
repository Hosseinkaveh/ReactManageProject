import { useReducer} from "react";
import { createContext } from "react";

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

function projectAndTaskReducer(state, action) {
  if (action.type === "Add_Project") {
    let newProject ={
      ...action.project,
      id:Math.random()
    }
    return {
      ...state,
      SelectedProjectId: undefined,
      projects: [...state.projects, newProject],
    };
  }
  if (action.type === "Delete_Project") {
    return {
      selectedProject: undefined,
      projects: state.projects.filter((item) => item.id !== action.id),
      tasks:[...state.tasks]
    };
  }
  if (action.type === "Add_Task") {
    let taskId = Math.random();
    let newTask = {
      id: taskId,
      Text: action.taskText,
      projectId: state.SelectedProjectId,
    };
    return {
      ...state,
      tasks: [...state.tasks, newTask],
    };
  }
  if (action.type === "Delete_Task") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.id),
    };
  }
  if (action.type === "Select_Project") {
    return {
      ...state,
      SelectedProjectId: action.id,
    };
  }
  if (action.type === "Show_Add_Project") {
    return {
      ...state,
      SelectedProjectId: null,
    };
  }
  if (action.type === "Cancell_Add_Project") {
    return {
      ...state,
      SelectedProjectId: undefined,
    };
  }
  return state;
}
export default function ProjectandTaskContextProvider({ children }) {
  const [projectTaskState, projectTaskDispatch] = useReducer(
    projectAndTaskReducer,
    {
      SelectedProjectId: undefined,
      projects: [],
      tasks: [],
    }
  );
  const handelDeleteTask = (id) => {
    projectTaskDispatch({
      type: "Delete_Task",
      id,
    });
  };
  const handelAddTask = (taskText) => {
    projectTaskDispatch({
      type: "Add_Task",
      taskText,
    });
  };
  const handelAddNewProject = (project) => {
    projectTaskDispatch({
      type: "Add_Project",
      project,
    });
  };
  const handelDeleteProject = (id) => {
    projectTaskDispatch({
      type: "Delete_Project",
      id,
    });
  };
  const handelSelectProject = (id) => {
    projectTaskDispatch({
      type: "Select_Project",
      id,
    });
  };

  const selectedProject = projectTaskState.projects.find((project) => {
    return project.id === projectTaskState.SelectedProjectId;
  });

  const handelShowAddProject = () => {
    // setProjectState((preState) => {
    //   return {
    //     ...preState,
    //     SelectedProjectId: null,
    //   };
    // });
    projectTaskDispatch({
      type: "Show_Add_Project",
    });
  };
  const handelCancelAddProject = () => {
    // setProjectState((preState) => {
    //   return {
    //     ...preState,
    //     SelectedProjectId: undefined,
    //   };
    // });
    projectTaskDispatch({
      type: "Cancell_Add_Project",
    });
  };
  let value = {
    projectState: projectTaskState,
    selectedProject: selectedProject,
    addProject: handelAddNewProject,
    deleteProject: handelDeleteProject,
    addTask: handelAddTask,
    deleteTask: handelDeleteTask,
    showaddProjectPage: handelShowAddProject,
    cancellAddProject: handelCancelAddProject,
    selectProject: handelSelectProject,
  };
  return (
    <ProjectandTaskContext.Provider value={value}>
      {children}
    </ProjectandTaskContext.Provider>
  );
}
