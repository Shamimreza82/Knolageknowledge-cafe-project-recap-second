import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";

function App() {
  return (
    <main className="lg:w-[80%] m-auto">
      <Header></Header>
      <div className="lg:flex">
        <div className="flex justify-center lg:w-3/4 bg-slate-100">
             <Blogs></Blogs>
        </div>
            <Bookmarks></Bookmarks>
      </div>
    </main>
  );
}

export default App;
