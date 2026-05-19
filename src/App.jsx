import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'

function App() {

  return (
    <div>
      <h1 className='app-title'>to<span>·</span>do</h1>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  )
}

export default App
