import { useState } from "react";
import "./App.css";
import Sidebar from "./components/shared/Sidebar";
import PostSection from "./components/PostSection";

function App() {
  return (
    <div className="container-fluid d-flex justify-content-between">
      <Sidebar />
      <PostSection/>
    </div>
  );
}

export default App;
