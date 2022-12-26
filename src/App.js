import Layout from "./components/ui/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from '../src/components/Auth/Login'
import SignUp from '../src/components/Auth/SignUp'
import Receiver from "./components/Home/Receiver";
function App() {
  return (
    <Router>
      
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/>
        <Route exact path='/Receiver' element={<Receiver/>}/>
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;

// 