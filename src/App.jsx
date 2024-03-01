import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject.jsx";
import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";

function App() {
  const [projectState,setProjectState] = useState({
    SelectedProject:undefined,
    projects:[]
  })

  const handelShowAddProject = () => {
    setProjectState(pre=>{
      return{
        ...pre,
        SelectedProject:null
      }
    })
  };
  const handelCancelAddProject =()=>{
    setProjectState(pre=>{
      return{
        ...pre,
        SelectedProject:undefined
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
        SelectedProject:undefined,
       projects:[...preState.projects, newProject]
      }
    })
  }

  let content;
  if (projectState.SelectedProject === null) {
    content = <NewProject onAdd={handelAddNewProject} onCancell={handelCancelAddProject}/>;
  } else if(projectState.SelectedProject === undefined){
    content = <NoProjectSelected onStartAddProject={handelShowAddProject} />;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projectList={projectState.projects} onStartAddProject={handelShowAddProject} />
      {content}
    </main>
  );
}

export default App;
