import './App.css'

import { Router } from './Router.jsx'

import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

const appRoutes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage }
]

function App() {

  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  )
}

export default App
