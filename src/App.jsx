

import Tittle from './Partes/Tittle/tittle.jsx';
import PersonalInfo from './Partes/Info/personalInfo.jsx';
import Projects from './Partes/Projects/projects.jsx';


function App() {

  return (
    <>
      <Tittle />
      <hr className='h-px my-4 border-0 dark:bg-gray-700'/>
      <PersonalInfo />
      <hr className='h-px my-4 border-0 dark:bg-gray-700'/>
      <Projects />
    </>
  )
}

export default App
