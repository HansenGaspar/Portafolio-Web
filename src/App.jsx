import './App.css'

import Tittle from './Partes/Tittle/tittle.jsx';
import PersonalInfo from './Partes/Info/personalInfo.jsx';
import Projects from './Partes/Projects/projects.jsx';


function App() {

  return (
    <div className='App lg:px-16 2xl:px-64'>
      <Tittle />

      <div className='flex flex-col items-center space-y-2'>
        <PersonalInfo />
        <Projects />
      </div>

    </div>
  )
}

export default App
