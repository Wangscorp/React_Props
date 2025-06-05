import Students from './Students.jsx'

function App() {
  
  return ( 
    <>
    <Students name="Wangs" age={20} isStudent={true}/>
    <Students name="Mitchelle" age={19} isStudent={false}/>
    <Students name="Samuel" age={25} isStudent={true}/>
    <Students name="Felista" age={28} isStudent={false}/>
    </>
   
  )
}

export default App
