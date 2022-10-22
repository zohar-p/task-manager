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

  return (<>
  <TopNav />
  <TasksContext.Provider value={{tasks, toggleDone}}>
    <TasksList />
  </TasksContext.Provider>
  </>);
}

export default App;
