import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ProjectListPage from "./routes/ProjectListPage";
import ProjectDetailsPage from "./routes/ProjectDetailsPage";
import EditProjectPage from "./routes/EditProjectPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />
      </Routes>
    </div>
  );
}
export default App;
