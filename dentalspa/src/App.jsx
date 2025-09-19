import DentalCard from "./components/DentalCard";
import NavBar from "./components/NavBar"
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={
      <>
      <NavBar />
      <DentalCard />
      </>
    } />
    </Routes>
  )
}

export default App
