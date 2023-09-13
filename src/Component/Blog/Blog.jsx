import { FaBeer } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({blog, handleBookmarks, handleMarkRead}) => {
    const {title, cover, id, posted_date, author, author_img, reading_time, hashtags } = blog
    
    return (
        <div>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex mt-3'>
                    <img className='w-[50px]' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h1 className='font-bold'>{author}</h1>
                        <h2>{posted_date}</h2>
                    </div>
                </div>
                <div className='flex gap-3 items-center '>
                    <span>{reading_time} minit</span>
                    <span onClick={()=>handleBookmarks(blog)} className='text-red-500'><FaBeer></FaBeer></span>
                    
                </div>
            </div>
            <h1 className='text-2xl font-bold my-3'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx}  className='mr-5'>#{hash}</span>)
                }
            </p>
            <p onClick={()=> handleMarkRead(reading_time, id )} className='mb-8 border-b-2 text-red-500 underline'>Mark as read</p>
            
            
        </div>
    );
};


Blog.propType = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkRead: PropTypes.func
}


export default Blog;