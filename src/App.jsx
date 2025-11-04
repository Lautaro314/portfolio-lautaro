import {Routes , Route} from "react-router-dom"
import {Navbar} from './components/Navbar'
import './App.css'

export function App () {
return (
  <>
    <Navbar>
    </Navbar>

    <Routes>
      <Route path="/portfolioLautaro" element={<Navbar/>}></Route>
    </Routes>
  </>
)
}

export default App
