import { useRecoilState, useRecoilValue } from 'recoil';
import { tasksAtom } from '../atoms/tasksAtom';
import { filteredTasksSelector } from '../selectors/filteredTasksSelector';

function TaskList() {
    const filteredTasks = useRecoilValue(filteredTasksSelector);
    const [task,setTask] = useRecoilState(tasksAtom);

    function handleToggle(id) {
        setTask(task.map(task =>
            task.id === id
            ? {...task, completed: !task.completed}
            : task
        ));
    }

    function handleRemove(id) {
        setTask(task.filter(task => task.id !== id));
    }

    if (filteredTasks.length === 0) {
        return <p>Nenhuma tarefa encontrada.</p>
    }
    
    return (
        <ul className='task-list'>
            {filteredTasks.map(task => (
                <li key={task.id} className='task-item'>
                    <span className={`task-text ${task.completed ? 'done' : ''}`}>
                        {task.text}
                    </span> 
                    <button 
                        className={`btn-toggle ${task.completed ? 'active' : ''}`}
                        onClick={() => handleToggle(task.id)}>
                            {task.completed ? 'Desfazer' : 'Concluir'}
                    </button>
                    <button className='btn-remove' onClick={() => handleRemove(task.id)}>
                        Remover
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList
