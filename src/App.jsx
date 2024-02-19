


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Korzinka from './Pages/Korzinka/Korzinka'
import Dishes from './Pages/Dishes/Dishes'
import Login from './Pages/Login/Login'
import SignIn from './Pages/SignIn/SignIn'
import NotFound from './Pages/NotFound/NotFound'
import { useState } from 'react'
import Footer from './components/Footer'
import Next from './Pages/Next/Next'


function App() {
  const [user, setUser] = useState('');
  
  return (

    <BrowserRouter>
      
      {user ? <Navbar user={user} /> : null}
      <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/dishes' element={<Dishes user={user} />} />
          <Route path='/korzinka' element={<Korzinka user={user} />} />
          <Route path='/signin' element={<SignIn user={user} />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/next' element= {<Next user={user}/>} />
          <Route path='*' element={<NotFound />} />
      </Routes>

      {user ? <Footer user={user} /> : null}




    </BrowserRouter>

  )
}

export default App
