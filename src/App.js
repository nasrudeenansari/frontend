import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Layer from "./components/layer";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Sidebar />}>
          <Route index element={<Layer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
