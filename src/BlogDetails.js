import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const BlogDetails = () => {
      const { id } = useParams();
      const {Data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id);
      const history = useHistory();
     
       const handleClick= () => {
        fetch('http://localhost:3000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() =>{
          history.push('/');
        })
       }
      return ( 
        <div className="blog-list">
          {isPending && <div>Loading...ssss</div>}
        {error && <p>{ error }</p> }
      {blog && (<article>
        <h1>{blog.title}</h1>
        <p>Written by {blog.author}</p>
        <p>{blog.body}</p>
        <button onClick={handleClick}>Delete</button>
        </article>)}
        </div>
     );
}
 
export default BlogDetails;