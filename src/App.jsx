import Greetings from './components/Greetings.jsx'
import Home from './Home.jsx'
import Students from './Students.jsx'

function App() {
  
  return ( 
    <>
    <Students name="Wangs" age="20" isStudent={true}/>
    <Students name="Mitchelle" age={19} isStudent={false}/>
    <Students name="Samuel" age={25} isStudent={true}/>
    <Students name="Felista" age={28} isStudent={false}/>
    {/* checking default */}
    <Students />
    <Greetings name="Mary"/>
    <Home/>
    </>
   
  )
}

export default App
