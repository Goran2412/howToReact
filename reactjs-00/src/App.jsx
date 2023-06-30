import './App.css'
import Card from './components/Card'
import vehicles from './data/vehicles'
import ShowAndHide from './components/ChangeValues'



function App() {
  const list = vehicles.map((v) => {
    return <Card 
      title={v.name}
      description={v.description}
    />
  })

  return (
  <div className='App'>
    <h1>¡Hola mundo!</h1>
    <div className='container'>
      {list}

      
    </div>
    <div>
      <br />
      <ShowAndHide />
    </div>
  </div>
  );
}

export default App
