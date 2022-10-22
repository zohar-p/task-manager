import { createContext } from 'react'
import { Task } from './types';

export const TasksContext = createContext<{tasks: Task[], toggleDone: (id: string) => void}>({tasks: [], toggleDone: (id: string) => {}});