import { useState } from 'react';
import './App.css';
import { TasksContext } from './components/Tasks/TasksContext';
import TasksList from './components/Tasks/TasksList/TasksList';
import TopNav from './components/TopNav/TopNav';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'test1',
      done: false
    },
    {
      id: '2',
      title: 'test2',
      done: false
    },
    {
      id: '3',
      title: 'test3',
      done: true
    }
  ])

  const toggleDone = (id: string) => {
    const updatedTasks = tasks.map(task => task.id !== id ? task : {...task, done: !task.done})
    setTasks(updatedTasks)
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen)}

  return (<>
  <div
    id="overlay"
    className={`backdrop-brightness-50 w-full h-full fixed top-0 left-0 ease-in-out transition-all duration-300 ${!isDrawerOpen && 'backdrop-filter-none hidden'}`}
    onClick={toggleDrawer}
  >
  </div>
  <TopNav toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen}/>
  <section className='container p-4 dark:bg-gray-800'>
    <TasksContext.Provider value={{tasks, toggleDone}}>
      <TasksList />
    </TasksContext.Provider>
  </section>
  <aside
    id="drawer-menu"
    className={`transform top-11 left-0 w-4/5 max-w-xs bg-gradient-to-b from-cyan-500 to-blue-500 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
  </aside>

  </>);
}

export default App;
