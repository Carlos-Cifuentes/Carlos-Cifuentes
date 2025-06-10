import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectDetail from './sections/ProjectDetail'
import HomePage from './HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
