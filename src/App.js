import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ProjectListPage from "./routes/ProjectListPage";
import ProjectDetailsPage from "./routes/ProjectDetailsPage";
import SignupPage from "./routes/SignupPage";
import EditProjectPage from "./routes/EditProjectPage";
import Navbar from "./components/Navbar";
import LoginPage from "./routes/LoginPage";
import IsPrivate from "./components/IsPrivate"; // <== IMPORT
import IsAnon from "./components/IsAnon"; // <== IMPORT

function App() {
  return (
    <div className="App bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <IsPrivate>
              <ProjectListPage />
            </IsPrivate>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <IsPrivate>
              <ProjectDetailsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/projects/edit/:projectId"
          element={
            <IsPrivate>
              <EditProjectPage />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
