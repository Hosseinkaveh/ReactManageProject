import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";
import ProjectandTaskContextProvider, {ProjectandTaskContext} from "./Components/store/project-task-context.jsx";
import { useContext } from "react";

export default function App() {



  return (
    <ProjectandTaskContextProvider>
     <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar  />
       <AppContent/>
      </main>
    </ProjectandTaskContextProvider>
  );
}
function AppContent(){
  let { projectState } = useContext(ProjectandTaskContext);
  let {SelectedProjectId} = projectState;
  return(
    <>
    {SelectedProjectId === null && <NewProject />}
    {SelectedProjectId === undefined && <NoProjectSelected />}
    {SelectedProjectId  && <SelectedProject />}
    </>
  )
}