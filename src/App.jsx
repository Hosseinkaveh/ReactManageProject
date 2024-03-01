import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject.jsx";
import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";

function App() {
  const [projectState,setProjectState] = useState({
    SelectedProjectId:undefined,
    projects:[]
  })

  const handelSelectProject =(id)=>{
    setProjectState((preState)=>{
      return{
        ...preState,
        SelectedProjectId : id
      }
     
    })
  }
  const handelShowAddProject = () => {
    setProjectState(pre=>{
      return{
        ...pre,
        SelectedProjectId:null
      }
    })
  };
  const handelCancelAddProject =()=>{
    setProjectState(pre=>{
      return{
        ...pre,
        SelectedProjectId:undefined
      }
    })
  }
  const handelAddNewProject =(project)=>{
    setProjectState(preState =>{
      let newProject ={
        ...project,
        id:Math.random()
      }
      return{
        ...preState,
        SelectedProjectId:undefined,
       projects:[...preState.projects, newProject]
      }
    })
  }
  const handelDeleteProject =(id)=>{
    setProjectState(preState=>{
      return{
        selectedProject:undefined,
        projects:  preState.projects.filter(item=>(item.id !== id))
      }
    })

  }

  const selectedProject = projectState.projects.find((project)=>{
   return project.id===projectState.SelectedProjectId
  })
  let content = <SelectedProject project={selectedProject} onDeleteProject={handelDeleteProject}/>;
  if (projectState.SelectedProjectId === null) {
    content = <NewProject onAdd={handelAddNewProject} onCancell={handelCancelAddProject}/>;
  } else if(projectState.SelectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handelShowAddProject} />;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projectList={projectState} onStartAddProject={handelShowAddProject} onSelectProject={handelSelectProject} />
      {content}
    </main>
  );
}

export default App;
