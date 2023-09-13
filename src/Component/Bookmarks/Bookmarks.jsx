import React from 'react';
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, markRead}) => {
    return (
        <> 
         <div className='ml-5 bg-slate-200 w-[30%]'>
            <h2 className='font-bold flex justify-center'>Reading Time: {markRead} minit </h2>
            <h1 className='font-bold flex justify-center'>Bookmarks: {bookmarks.length} </h1>
            {
                bookmarks.map(bookmark => <p className='bg-slate-100 mt-2 p-2 rounded-md mx-3' key={bookmark.id}>{bookmark.title}</p>)
            }
        </div>
        </>
       
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    markRead: PropTypes.object.isRequired
}


export default Bookmarks;