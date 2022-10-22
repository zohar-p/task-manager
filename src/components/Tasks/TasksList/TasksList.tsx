import React, { useContext } from 'react'
import Tasks from '../Task/Task'
import { TasksContext } from '../TasksContext'
import { Task } from '../types'

type Props = {}

const TasksList = (props: Props) => {
  const {tasks} = useContext(TasksContext)

  return (
    <ul className="w-full m-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {tasks.map(task => <Tasks key={task.id} task={task}/>)}
    </ul>
  )
}

export default TasksList