import { Route, Routes } from "react-router-dom";
import InputBar from "./Components/InputBar";
import Edit from "./Components/Edit";

function App() {
  return (
    <>
      {/* <h1 className="bg-blue-300 ">Notes App</h1> */}
      {/* <InputBar /> */}
      <Routes>
        <Route path="/" element={<InputBar />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
