import './styles/global.css';

import { Habits } from "./components/Habits"

function App() {

  return (
    <div>
      <Habits completed={4}/>
      <Habits completed={10}/>
      <Habits completed={3}/>
      <Habits completed={25}/>
    </div>
  )
}

export default App
