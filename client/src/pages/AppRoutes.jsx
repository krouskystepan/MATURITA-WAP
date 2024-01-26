import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage/MainPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}
