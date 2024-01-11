import { ItemListContainer } from "./components/ItemListContainer"
import { Navbar } from "./components/Navbar"


function App() {
  
  let mensaje = "Esta Página  esta en Construcción.."

  return (
    <>
     <Navbar />
     <ItemListContainer  data = {mensaje} />
    </>
  )
}

export default App
