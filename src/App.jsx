import './App.css'

function App() {
  
  function constadorDeVistas(){
    return 456750
  }

  function authUser() {
    return{
      userName: "Bustos",
      colorPreferido: "Verde"
    }
  }

  const estilosDeContador = {
    background: "white",
    color: "blue"
  };


  return (
    <>
      <h1>Hola {authUser().userName} bienvenido a la concha tuya</h1>
      <div className="card">
        <h2>
          {constadorDeVistas()}
        </h2>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
