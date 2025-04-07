import { Route,Routes } from 'react-router-dom'
import './App.css'
import {Navbar} from "./components/Navbar"
import {Explore,BoardofExperts,Cart,Home,Login,Store} from "./components/pages"

function App() {
  return(<div className="App">
    <Navbar temp={true}/>
    <Routes>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/boardofexperts" element={<BoardofExperts/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/store" element={<Store/>}/>
    </Routes>
  </div>)
}

export default App
