import './App.css'
import { Home } from './components/Home/Home'
import { NavBar } from './components/navBar/Navbar'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skill'

function App() {


  return (
    <main>
      <NavBar/>
      <Home id='home'/>
      <Projects id='projects'/>
      <Skills id='skills'/>
    </main>


  )
}

export default App
