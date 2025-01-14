import Layout from "./components/common/Layout"
import LiveTest from "./screens/LiveTest"
import LandingPage from "./screens/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Layout> 
        <Routes>
          <Route path="/livetest" element={<LiveTest />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
