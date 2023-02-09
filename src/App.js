import React from "react";
import Home from "./container/home"
import TITLE1 from "./container/title1"
import TITLE2 from "./container/title2"
import TITLE3 from "./container/title3"
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin/about1" element= {<TITLE1/>}/>
      <Route path="/admin/about2" element= {<TITLE2/>}/>
      <Route path="/admin/about3" element= {<TITLE3/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
