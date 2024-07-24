
import { Link } from "react-router-dom";
    const BlogList = ({blogs, title, headline}) => {
    
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            <p>{headline}</p>
        {blogs.map((blog) => (
            <div className="blog-preview">
               <Link to={`/blogs/${blog.id}`}>
               <h2>{blog.title}</h2>
               <p>Written by {blog.author}</p>
            
               </Link>
                
                 
            </div>
        ))}
        </div>

     );
}
 
export default BlogList;