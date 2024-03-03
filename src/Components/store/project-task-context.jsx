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
