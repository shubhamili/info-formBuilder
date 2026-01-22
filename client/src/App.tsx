
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormList from './pages/FormList'
import { CreateForm } from './pages/CreateForm'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/forms' element={<FormList />} />
        <Route path='/forms/create' element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  )


}

export default App