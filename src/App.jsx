import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import LogIn from "./LogIn";
import Portal from "./Portal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn></LogIn>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/portal" element={<Portal></Portal>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
