import {React} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Home from './Pages/Home'
import Product from './Pages/Product'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<Home/>}></Route>
        <Route  exact path='/products' element={<Product/>}></Route>
        <Route  exact path='/gallery' element={<Gallery/>}></Route>
        <Route  exact path='/contact' element={<Contact/>}></Route>
        <Route  exact path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App