import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
      const {id} = useParams();
      const {data: blog, error, isPending } = useFetch('http://localhost:9000/blogs/' + id);
   
      return ( 
        <div className="blog-list">
       {isPending && <div>Loading....</div>}
      {error &&  <div>{error}</div> }
      {blog && (<article>
        <h1>{blog.title}</h1>
        <p>Written by {blog.title}</p>
        <p>{blog.author}</p>
        </article>)}
        </div>
     );
}
 
export default BlogDetails;