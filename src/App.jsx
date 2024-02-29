import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject.jsx";
import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";

function App() {
  const [showAddProject, setShowAddProject] = useState(false);

  const handelShowAddProject = () => {
    setShowAddProject(true);
  };

  let content;
  if (showAddProject) {
    content = <NewProject />;
  } else {
    content = <NoProjectSelected onStartAddProject={handelShowAddProject} />;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handelShowAddProject} />
      {content}
    </main>
  );
}

export default App;
