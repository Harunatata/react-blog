
import Navbar from './Navbar';
import Home  from './Home';
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter } from 'react-router-dom';
import Create from './Create';
import Input from './input';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';



function app (){
  const title = 'Welcome to our New website';
  
  return (
    
              
              <Router>

          <div className="App">
              <Navbar/>
          <div className="content">

            <Switch>
                <Route exact path="/"> 
                    <Home/>   
                </Route>
                <Route path="/Create">
                  <Create/>
                </Route>
                <Route path="/Input"> 
                  <Input/>
                </Route>
                <Route path="/blogs/:id"> 
                  <BlogDetails/>
                </Route>
                <Route>
                  <NotFound/>
                </Route>
            </Switch>
                
            </div>
          </div>
          </Router> 
  
  );
  }


  
export default app;

                
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/create" element={<Create/>}/>
    //   <Route path="/input" element={<Input/>}/>
    //   <Route path="/navbar" element={(<div className="App"><Navbar/></div>)}/>
    // </Routes>
    // </BrowserRouter>