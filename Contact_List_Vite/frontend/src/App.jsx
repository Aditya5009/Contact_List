import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListContacts from './components/ListContacts'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* http;//locahost:5173/ */}
          <Route path='/' element={<ListContacts />}></Route>

          {/* http;//locahost:5173/contact */}
          <Route path='/contact' element={<ListContacts />}></Route>

          {/* http;//locahost:3000/add-contact */}
          <Route path='/add-contact' element={<Contact />}></Route>

          {/* http;//locahost:3000/edit-contact/1 */}
          <Route path='/edit-contact/:id' element={<Contact />}></Route>



        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
