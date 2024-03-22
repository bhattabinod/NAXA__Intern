import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'

import Form from './Component/RegistrationForm'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      <Form/>
    </>
  )
}

export default App
