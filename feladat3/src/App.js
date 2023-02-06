import {BrowserRouter,Routes, Route, Link,Switch } from 'react-router-dom'
import Home from './pages/Home';
import Humor from './pages/Humor';
import SciFi from './pages/SciFi';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {



  return (
<div>


    <BrowserRouter>
        <Routes>


          
            <Route path='/' element={<Home/>}>
              <Home />
            </Route>
            <Route path='scifi' element={<Humor/>}>
              <Humor/>
            </Route>
            <Route path='humor' element={<SciFi/>}>
              <SciFi/>
            </Route>
            
        </Routes>

    </BrowserRouter>
   
   


   
    </div>
  );
}

export default App;
