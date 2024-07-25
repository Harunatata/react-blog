import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();
    const [isPending, setIspending] = useState(false);
    const history = useHistory();
    

    const handleSubmit = (e) => {
            e.preventDefault();
            const blog = {title, body, author};
            
            setIspending(true);
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {"content-type": "application/json"},
                body: JSON.stringify(blog)
                
    }).then(() => {
        console.log('new blog added');
        setIspending(true);
        history.push('/');
        
    })}
    return ( 
       <div className="create">
        <h2>ADD NEW BLOG</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Blog Body</label>
            <textarea  value={body} onChange={(e) => setBody(e.target.value)}
            required>
                
            </textarea>
            <label>Blog Author</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="Dauda">Dauda</option>
                <option value="Sharfudeen">Sharfudeen</option>
                <option value="Haruna">Haruna</option>
            </select>
          {!isPending && <button>Add New SBlog</button>}
          {isPending && <button>Disable add blog</button>}
         
            
        </form>

        
       </div>
     );
}

 
export default Create;