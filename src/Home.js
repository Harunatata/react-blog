

import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
   const {Data: blogs, IsPending, error} = useFetch('http://localhost:9000/blogs');

    return ( 
        <div>
          {error && <p>{error}</p>}
          {IsPending && <p>Loading please wait....</p>}
          
          {blogs && <BlogList blogs={blogs} title="ALL PRACTICAL BLOGS"/>} 
         
          
        </div>

     );
}
 
export default Home;