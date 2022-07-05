import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
// import Home from "./pages/Home";
// import Contactus from "./pages/Contactus";
// import Aboutus from "./pages/Aboutus";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="/" element={<Contactus />}/>
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);
