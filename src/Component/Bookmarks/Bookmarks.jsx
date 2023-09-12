import React from 'react';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='ml-5 bg-slate-200 w-[30%]'>
            <h1 className='font-bold flex justify-center'>Bookmarks: {bookmarks.length} </h1>
            {
                bookmarks.map(bookmark => <p className='bg-slate-300 mt-2 p-2 rounded-md mx-3' key={bookmark.id}>{bookmark.title}</p>)
            }
        </div>
    );
};

export default Bookmarks;