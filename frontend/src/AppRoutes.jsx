import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Home/HomePage'
export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  )
}
