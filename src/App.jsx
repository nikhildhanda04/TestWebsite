import Layout from "./components/common/Layout"
import LiveTest from "./screens/LiveTest"
import Home from "./screens/Home"
import Login from "./screens/Login"
import Tests from "./screens/Tests"
import Pricing from "./screens/Pricing"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Layout> 
        <Routes>
          <Route path="/livetest" element={<LiveTest />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login/>} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
