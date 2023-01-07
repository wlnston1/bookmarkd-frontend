import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const URL = "http://localhost:4000/";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Display />
    </div>
  );
}

export default App;
