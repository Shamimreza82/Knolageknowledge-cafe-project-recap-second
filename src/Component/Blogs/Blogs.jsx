import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmarks, handleMarkRead}) => {

    const [blogs, SetBlogs] = useState([]) 
    useEffect (() => {
        fetch('blog.json')
        .then(rsc => rsc.json())
        .then(data => SetBlogs(data))

    },[])

    return (
        <div>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    handleBookmarks = {handleBookmarks}
                    handleMarkRead = {handleMarkRead}
                     blog = {blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;