import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step2 from "./components/step2";
import Step1 from "./components/step1";
import Step3 from "./components/step3";

import Result from "./components/result";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />

          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />

          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}
