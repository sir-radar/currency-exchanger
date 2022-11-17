import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:from/:to" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
