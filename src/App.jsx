// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todo from "./Components/Todo"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
