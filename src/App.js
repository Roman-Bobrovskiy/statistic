import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./components/Routes";

import Home from "./view/Home";

function App() {
  return (
    <Routes>
      <Route path={routes.home} exact element={<Home />} />
      {/* <Route path={routes.citypage} element={CityPage} />
  <Route component={NotFound} /> */}
    </Routes>
  );
}

export default App;
