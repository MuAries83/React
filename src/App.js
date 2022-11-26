import Navbar from "./Navbar"
import Nosotros from "./paginas/Nosotros"
import Precios from "./paginas/Precios"
import Inicio from "./paginas/Inicio"

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Inicio />
      break
    case "/Precios":
      component = <Precios />
      break
    case "/Nosotros":
      component = <Nosotros />
      break

  }
  return (
  <>
  <Navbar />
  <div className="contenedor">{component}</div>
  </>
  )
}

export default App;
