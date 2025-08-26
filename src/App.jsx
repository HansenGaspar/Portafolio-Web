import './App.css'

import Tittle from './Partes/Tittle/tittle.jsx';
import PersonalInfo from './Partes/Info/personalInfo.jsx';
import Projects from './Partes/Projects/projects.jsx';


function App() {

  return (
    <div className="md:min-h-screen md:w-full md:bg-[#9368be] md:pt-3 md:flex md:justify-center md:items-start ">
      <div className='App lg:max-w-7xl w-full bg-[#E8E4CC] mx-auto md:border-4 md:border-black'>
        <Tittle />
        <div className='flex flex-col items-center space-y-2 lg:px-16 md:p-2'>
          <PersonalInfo />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
