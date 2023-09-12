import "./App.css";
import Header from "./Component/Header/Header";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarks = (bookmark) => {
    const newBookmarks = [...bookmarks, bookmark]
    setBookmarks(newBookmarks)
  }



  return (
    <main className="lg:w-[80%] m-auto">
      <Header></Header>
      <div className="lg:flex">
        <div className="flex justify-center lg:w-3/4 bg-slate-100">
             <Blogs handleBookmarks = {handleBookmarks}></Blogs>
        </div>
            <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </main>
  );
}

export default App;
