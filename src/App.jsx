import './App.css'
import RefForm from './components/Ref Form/RefForm'
import SimpleForm from './components/Simple Form/SimpleForm'
import StatefulForm from './components/Statful Form/StatefulForm'
function App() {
  return (
    <>
      <h1>React Core Concept 03</h1>
      <p>Simple Form</p>
      <SimpleForm></SimpleForm>
      <p>Stateful Form</p>
      <StatefulForm></StatefulForm>
      <p>Ref Form</p>
      <RefForm></RefForm>
      
    </>
  )
}

export default App
