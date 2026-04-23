import { HashRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { ProjectsPage } from "./pages/ProjectsPage"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster"


function App() {

  return <>
    <HashRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
    <Toaster/>
  </>
}

export default App
