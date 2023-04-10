import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
