import "./App.css";
import Header from "./Component/Header/Header";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [markRead, setMarkRead] = useState (0)

  const handleBookmarks = (bookmark) => {
    const newBookmarks = [...bookmarks, bookmark]
    setBookmarks(newBookmarks)
  }

  const handleMarkRead = (readingMark, id) => {
    setMarkRead (markRead + readingMark)
   const removeBookmark = bookmarks.filter(remove => remove.id !== id)
   setBookmarks(removeBookmark);
  }


  return (
    <main className="lg:w-[80%] m-auto">
      <Header></Header>
      <div className="lg:flex">
        <div className="flex justify-center lg:w-3/4 bg-slate-100">
             <Blogs 
             handleMarkRead = {handleMarkRead}
             handleBookmarks = {handleBookmarks}></Blogs>
        </div>
            <Bookmarks
            markRead = {markRead}
            bookmarks = {bookmarks}></Bookmarks>
      </div>
    </main>
  );
}

export default App;
